export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-paper">
      <article className="prose-legal mx-auto max-w-[720px] px-4 py-20 md:px-6 md:py-28">{children}</article>
    </section>
  );
}
