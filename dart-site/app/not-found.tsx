import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1024px] px-4 py-32 text-center md:px-6">
        <h1 className="t-display">That page is not here.</h1>
        <p className="t-lede mt-4 text-ink-2">The link may be out of date.</p>
        <Link href="/" className="link mt-6 text-[17px]">Back to the home page</Link>
      </div>
    </section>
  );
}
