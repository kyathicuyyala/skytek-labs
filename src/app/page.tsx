import Link from "next/link";

const highlights = [
  {
    title: "Custom Software",
    description:
      "Web and mobile applications engineered around your workflow, not the other way around.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Scalable, secure cloud architecture so your systems grow with your business.",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic guidance to modernize legacy systems and adopt the right technology.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest opacity-60">
          Skytek Labs
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Innovative IT Solutions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-80">
          We help businesses build, scale, and modernize their technology with
          custom software, cloud infrastructure, and hands-on IT consulting
          &mdash; including deep expertise in next-generation flight safety
          software.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            Our services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm opacity-75">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl border border-black/10 bg-black/[.02] p-8 dark:border-white/10 dark:bg-white/[.03] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-60">
            Featured Specialty
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Next-Generation Flight Safety Software
          </h2>
          <p className="mt-4 max-w-2xl opacity-80">
            Beyond general IT solutions, Skytek Labs brings specialized
            expertise in building safety-critical software for aviation and
            aerospace &mdash; engineered for the reliability and rigor that
            flight systems demand.
          </p>
        </div>
      </section>
    </div>
  );
}
