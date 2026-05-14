import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-grow items-center justify-center px-margin-mobile pt-[120px] pb-16 md:px-margin-desktop">
      <section className="w-full max-w-3xl border border-[#2A2A2A] bg-[#0A0A0A] p-10 text-center md:p-14">
        <p className="mb-4 font-label text-[12px] uppercase tracking-[0.18em] text-tertiary">
          404 / Not Found
        </p>
        <h1 className="mb-6 font-headline text-[42px] text-secondary md:text-[56px]">
          This page does not exist in the current site structure.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl font-body text-[18px] text-on-surface-variant">
          If you followed an older `.html` link or typed a legacy URL, use the
          navigation below to continue browsing the current Next.js routes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-secondary px-8 py-3 font-label text-[14px] text-[#0A0A0A] transition-colors duration-300 hover:bg-white"
          >
            Return Home
          </Link>
          <Link
            href="/properties"
            className="border border-[#2A2A2A] px-8 py-3 font-label text-[14px] text-secondary transition-colors duration-300 hover:bg-[#2A2A2A]"
          >
            Browse Properties
          </Link>
        </div>
      </section>
    </main>
  );
}
