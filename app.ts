import { Application } from "./deps.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.headers.append("content-type", "application/json");
  ctx.response.body = JSON.stringify({ message: "Hello World!" });
});

export default app;
