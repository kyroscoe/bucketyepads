import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const inputPath = path.join(rootDir, "content", "product-fitments.csv");
const outputPath = path.join(rootDir, "content", "product-fitment-index.json");

const requiredFields = [
  "id",
  "catalogTitle",
  "catalogFile",
  "catalogPage",
  "manufacturer",
  "equipmentModel",
  "productType",
  "partNumber",
  "application",
];

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        field += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }

      row.push(field);
      if (row.some((value) => value.length > 0)) {
        rows.push(row);
      }
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  row.push(field);
  if (row.some((value) => value.length > 0)) {
    rows.push(row);
  }

  return rows;
}

function normalizeSearchText(value) {
  return value
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function compactPartNumber(value) {
  return value.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
}

function splitManufacturers(value) {
  return value
    .split("/")
    .map((manufacturer) => manufacturer.trim())
    .filter(Boolean);
}

function slugify(value) {
  return value
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function parseBoolean(value) {
  return value.trim().toLowerCase() === "true";
}

function validateHeaders(headers) {
  const missingFields = requiredFields.filter((field) => !headers.includes(field));

  if (missingFields.length > 0) {
    throw new Error(`Missing required CSV field(s): ${missingFields.join(", ")}`);
  }
}

function rowToRecords(headers, values, rowNumber) {
  if (values.length !== headers.length) {
    throw new Error(
      `Row ${rowNumber} has ${values.length} field(s), expected ${headers.length}.`,
    );
  }

  const record = Object.fromEntries(
    headers.map((header, index) => [header, values[index].trim()]),
  );

  const missingRequiredValues = requiredFields.filter((field) => !record[field]);
  if (missingRequiredValues.length > 0) {
    throw new Error(
      `Row ${rowNumber} is missing value(s): ${missingRequiredValues.join(", ")}`,
    );
  }

  const manufacturers = splitManufacturers(record.manufacturer);

  return manufacturers.map((manufacturer) => {
    const searchValues = [
      record.partNumber,
      compactPartNumber(record.partNumber),
      record.productType,
      record.material,
      manufacturer,
      record.manufacturer,
      record.equipmentModel,
      compactPartNumber(record.equipmentModel),
      record.buckSize,
      record.application,
      record.section,
      record.catalogTitle,
      record.notes,
    ];

    return {
      id: `${record.id}-${slugify(manufacturer)}`,
      sourceId: record.id,
      catalogTitle: record.catalogTitle,
      catalogFile: record.catalogFile,
      catalogPage: Number(record.catalogPage),
      section: record.section,
      manufacturer,
      manufacturerGroup: record.manufacturer,
      equipmentModel: record.equipmentModel,
      productType: record.productType,
      partNumber: record.partNumber,
      material: record.material,
      buckSize: record.buckSize,
      application: record.application,
      requiresModelNumber: parseBoolean(record.requiresModelNumber),
      quantity: record.quantity,
      notes: record.notes,
      searchText: normalizeSearchText(searchValues.join(" ")),
    };
  });
}

async function buildIndex() {
  const csv = await fs.readFile(inputPath, "utf8");
  const [headers, ...rows] = parseCsv(csv);

  if (!headers) {
    throw new Error("Product fitments CSV is empty.");
  }

  validateHeaders(headers);

  const index = rows.flatMap((row, rowIndex) =>
    rowToRecords(headers, row, rowIndex + 2),
  );

  await fs.writeFile(outputPath, `${JSON.stringify(index, null, 2)}\n`);
  console.log(`Indexed ${index.length} product fitments.`);
}

buildIndex().catch((error) => {
  console.error(error);
  process.exit(1);
});
