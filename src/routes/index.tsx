import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import Counter from "~/components/Counter";
import { query } from "~/server/query";

export default function Home() {
  createAsync(() => query())
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
