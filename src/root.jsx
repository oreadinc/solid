// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Link,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import Header from "./components/Header";
export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Header />
        <Suspense>
          <Routes>
            <FileRoutes />
          </Routes>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
