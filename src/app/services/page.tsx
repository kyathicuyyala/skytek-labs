import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Skytek Labs",
  description: "Explore the IT solutions Skytek Labs offers.",
};

const services = [
  {
    title: "Custom Software Development",
    description:
      "Web apps, internal tools, and mobile applications built to fit your exact requirements, from prototype to production.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Architecture, migration, and ongoing management for cloud infrastructure that scales reliably and securely.",
  },
  {
    title: "IT Consulting & Strategy",
    description:
      "Technology audits and roadmaps that help you modernize legacy systems and make confident technical decisions.",
  },
  {
    title: "Systems Integration",
    description:
      "Connecting the tools you already use into a single, reliable workflow with APIs and automation.",
  },
  {
    title: "Flight Safety Software",
    description:
      "Safety-critical software for next-generation aviation and aerospace systems, built to the reliability and rigor that flight demands.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Services
      </h1>
      <p className="mt-4 max-w-2xl opacity-80">
        Skytek Labs offers end-to-end IT solutions tailored to your business,
        from a single feature to a full technology overhaul.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
          >
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm opacity-75">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
