import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteData } from "@/components/site-data";

function youtubeEmbedUrl(youtubeId: string) {
  return `https://www.youtube.com/embed/${encodeURIComponent(youtubeId)}`;
}

export default function InstallationVideosPage() {
  const { installationVideosPage } = siteData;

  return (
    <main>
      <PageHero
        title={installationVideosPage.heroTitle}
        description={installationVideosPage.heroDescription}
      />

      <section className="py-20">
        <Container>
          <div className="mb-8">
            <Link
              href="/resources"
              className="text-sm font-bold text-brand-red transition hover:text-brand-orange"
            >
              Back to Resources
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {installationVideosPage.videos.map((video) => (
              <article
                key={video.youtubeId}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card"
              >
                <div className="aspect-video bg-slate-100">
                  <iframe
                    className="h-full w-full"
                    src={youtubeEmbedUrl(video.youtubeId)}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-black tracking-tight text-brand-navy">
                    {video.title}
                  </h2>

                  {video.description ? (
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {video.description}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
