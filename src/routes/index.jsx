import { Title, Meta } from "solid-start";
import Counter from "~/components/Counter";
export default function Home() {
  return (
    <main>
      <Title>Solid Начальная страница</Title>
      <Meta name="description" content="Главная страница" />
      <h1>Hello world!</h1>
      <Counter />
    </main>
  );
}
