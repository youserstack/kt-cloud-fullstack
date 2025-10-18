import Counter from "../components/Counter";
import TodoList from "../components/TodoList";

export default function HomePage() {
  return (
    <main>
      {/* <section className="max-w-screen-md mx-auto border border-dashed">
        <h1>homepage</h1>
        <Counter />
      </section> */}
      <section className="max-w-screen-md mx-auto border border-dashed">
        <h1>homepage</h1>
        <TodoList />
      </section>
    </main>
  );
}
