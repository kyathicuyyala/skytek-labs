import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Skytek Labs",
  description: "Get in touch with Skytek Labs.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Get in Touch
      </h1>
      <p className="mt-6 text-lg opacity-80">
        Have a project in mind or a question about our services? Reach out
        and we&apos;ll get back to you.
      </p>

      <div className="mt-10 space-y-2 text-lg">
        <p>
          Email:{" "}
          <a
            href="mailto:hello@skyteklabs.com"
            className="font-medium underline"
          >
            hello@skyteklabs.com
          </a>
        </p>
      </div>
    </section>
  );
}
