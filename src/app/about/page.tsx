import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Skytek Labs",
  description: "Learn about Skytek Labs and what drives our work.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        About Skytek Labs
      </h1>
      <p className="mt-6 text-lg opacity-80">
        Skytek Labs is built around a simple idea: technology should remove
        friction from your business, not add to it. We partner with companies
        to design, build, and maintain the software and infrastructure that
        keep them running.
      </p>
      <p className="mt-4 text-lg opacity-80">
        From custom applications to cloud architecture, our team focuses on
        practical, durable solutions over short-term fixes &mdash; so what we
        build keeps working long after we ship it.
      </p>
      <p className="mt-4 text-lg opacity-80">
        We also bring specialized expertise to aviation and aerospace, building
        next-generation flight safety software engineered to the reliability
        and rigor that safety-critical systems demand.
      </p>
    </section>
  );
}
