import NoMatch from "./NoMatch";

export default function Home({ title }: { title?: string }) {
  return (
    <main className="border border-blue-500">
      <section>
        <h1>homepage</h1>
        <p>{title}</p>

        <NoMatch />
      </section>
    </main>
  );
}
