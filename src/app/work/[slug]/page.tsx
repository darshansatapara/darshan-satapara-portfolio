import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  site,
  getProjectBySlug,
  projectsWithPages,
  type Project,
} from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectsWithPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return { title: "Project not found" };
  const title = `${p.title} | ${site.name}`;
  const description = p.overview ?? p.desc;
  const path = `/work/${p.slug}`;
  return {
    title: { absolute: title },
    description,
    keywords: [p.title, ...p.tags, "Darshan Satapara", "project case study"],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      type: "article",
    },
  };
}

/** Is this a real, visitable live link (not a placeholder)? */
function liveLink(p: Project) {
  return p.view && p.view !== "#" ? p.view : null;
}

/** Shell renders instantly; the slug-dependent content streams inside Suspense. */
export default function ProjectDetailPage({ params }: Params) {
  return (
    <Suspense fallback={<DetailFallback />}>
      <ProjectDetail params={params} />
    </Suspense>
  );
}

function DetailFallback() {
  return (
    <section className="relative border-b-2 border-[var(--line)] bg-[var(--paper)] pt-[57px] text-[var(--fg)]">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-14 md:pb-16 md:pt-20">
        <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
          Loading project…
        </span>
      </div>
    </section>
  );
}

async function ProjectDetail({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const live = liveLink(project);
  const idx = projectsWithPages.findIndex((p) => p.slug === slug);
  const next = projectsWithPages[(idx + 1) % projectsWithPages.length];

  return (
    <>
      {/* header */}
      <section className="relative border-b-2 border-[var(--line)] bg-[var(--paper)] pt-[57px] text-[var(--fg)]">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div
          className="relative mx-auto max-w-6xl px-5 pb-12 pt-14 md:pb-16 md:pt-20"
          data-reveal
          suppressHydrationWarning
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="ink-cell inline-block px-3 py-1 font-mono-x text-xs font-bold uppercase tracking-widest"
              style={{ background: "var(--c-lime)" }}
            >
              {project.cat}
            </span>
            <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
              Project {project.n}
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--fg-dim)] md:text-base">
            {project.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener"
                className="brut-ink brut-press px-6 py-3 text-xs font-bold uppercase tracking-widest"
                style={{ background: "var(--c-sky)" }}
              >
                View code ↗
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener"
                className="brut-ink brut-press px-6 py-3 text-xs font-bold uppercase tracking-widest"
                style={{ background: "var(--c-lime)" }}
              >
                Live demo ↗
              </a>
            )}
            <Link
              href="/work"
              className="brut-press inline-block border-2 border-[var(--line)] bg-[var(--paper)] px-6 py-3 text-xs font-bold uppercase tracking-widest"
            >
              ← All work
            </Link>
          </div>
        </div>
      </section>

      {/* live-site screenshot */}
      {project.image && (
        <section className="border-b-2 border-[var(--line)] bg-[var(--bg-2)]">
          <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
            <div
              className="brut relative aspect-[16/10] w-full overflow-hidden border-2 border-[var(--line)] bg-[var(--paper)] md:aspect-[16/8]"
              data-reveal
              suppressHydrationWarning
            >
              <Image
                src={project.image}
                alt={`${project.title} — live site`}
                fill
                sizes="(max-width:1024px) 100vw, 1100px"
                className="object-cover object-top"
              />
            </div>
            {live && (
              <p className="mt-3 font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
                Live at{" "}
                <a href={live} target="_blank" rel="noopener" className="ul-sweep text-[var(--fg)] hover:text-[var(--accent)]">
                  {live.replace(/^https?:\/\//, "")} ↗
                </a>
              </p>
            )}
          </div>
        </section>
      )}

      {/* body */}
      <section className="border-b-2 border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
        <div className="mx-auto grid max-w-6xl md:grid-cols-[1fr_auto]">
          {/* overview + features */}
          <div className="border-b-2 border-[var(--line)] px-5 py-12 md:border-b-0 md:border-r-2 md:py-16">
            <h2 className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
              [ overview ]
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed">
              {project.overview ?? project.desc}
            </p>

            {project.features && project.features.length > 0 && (
              <>
                <h2 className="mt-12 font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
                  [ what it does ]
                </h2>
                <ul className="mt-5 flex flex-col">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-4 border-t-2 border-[var(--line)] py-4 text-sm leading-relaxed"
                    >
                      <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 bg-[var(--accent)]" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* meta sidebar */}
          <aside className="px-5 py-12 md:w-[18rem] md:py-16">
            <h2 className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
              [ tech stack ]
            </h2>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="border-2 border-[var(--line)] px-2 py-0.5 font-mono-x text-[0.65rem] font-bold uppercase tracking-widest"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-2 font-mono-x text-xs font-bold uppercase tracking-widest">
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener"
                  className="ul-sweep self-start hover:text-[var(--accent)]"
                >
                  Source code ↗
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener"
                  className="ul-sweep self-start hover:text-[var(--accent)]"
                >
                  Live demo ↗
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* next project */}
      {next && next.slug !== slug && (
        <section className="border-b-2 border-[var(--line)] bg-[var(--paper)] text-[var(--fg)]">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-10 transition-[padding] hover:pl-8"
          >
            <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
              Next project
              <span className="mt-1 block font-display text-xl font-extrabold uppercase tracking-tight text-[var(--fg)] md:text-3xl">
                {next.title}
              </span>
            </span>
            <span className="font-display text-2xl font-extrabold md:text-4xl" aria-hidden>
              →
            </span>
          </Link>
        </section>
      )}
    </>
  );
}
