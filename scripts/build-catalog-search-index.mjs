import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFParse } from "pdf-parse";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const siteContentPath = path.join(rootDir, "content", "site.json");
const outputPath = path.join(rootDir, "content", "catalog-search-index.json");

function localPublicPath(file) {
  if (!file || /^https?:\/\//i.test(file)) {
    return null;
  }

  const publicRelativePath = file.replace(/^\/+/, "");
  return path.join(rootDir, "public", publicRelativePath);
}

function normalizeSearchText(text) {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

async function extractPdfText(filePath) {
  const parser = new PDFParse({ data: await fs.readFile(filePath) });

  try {
    const result = await parser.getText();
    return result.text;
  } finally {
    await parser.destroy();
  }
}

async function buildIndex() {
  const siteContent = JSON.parse(await fs.readFile(siteContentPath, "utf8"));
  const catalogs = siteContent.catalogsPage?.catalogs ?? [];
  const searchIndex = [];

  for (const catalog of catalogs) {
    const filePath = localPublicPath(catalog.file);
    let pdfText = "";

    if (filePath) {
      try {
        pdfText = await extractPdfText(filePath);
      } catch (error) {
        console.warn(
          `Could not index PDF text for ${catalog.file}: ${error.message}`,
        );
      }
    }

    searchIndex.push({
      file: catalog.file,
      text: normalizeSearchText(
        [
          catalog.title,
          catalog.description,
          catalog.keywords,
          pdfText,
        ].join(" "),
      ),
    });
  }

  await fs.writeFile(outputPath, `${JSON.stringify(searchIndex, null, 2)}\n`);
  console.log(`Indexed ${searchIndex.length} catalog PDFs.`);
}

buildIndex().catch((error) => {
  console.error(error);
  process.exit(1);
});
