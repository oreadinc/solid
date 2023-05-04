import { Title, Meta } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import { ErrorBoundary } from "solid-start/error-boundary";
export default function NotFound() {
  return (
    <main>
      <Title>Страница не найдена</Title>
      <Meta name="description" content="Такой страницы не существует, вы ошиблись" />
      <HttpStatusCode code={404} />
      <h1>ТАКОЙ СТРАНИЦЫ НЕТ</h1>
      <p>Visit <a href="/">start.solidjs.com</a> to learn how to build SolidStart apps.</p>
      <ErrorBoundary fallback={(e) => <div>{e.message}</div>}></ErrorBoundary>
    </main>
  );
}
