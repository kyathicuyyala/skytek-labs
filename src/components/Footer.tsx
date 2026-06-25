export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-6 text-sm opacity-70">
        © {year} Skytek Labs. All rights reserved.
      </div>
    </footer>
  );
}
