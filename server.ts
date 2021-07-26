import app from "./app.ts";

const PORT = 8000;

app.addEventListener("listen", () => {
  console.info(`http://localhost:${PORT}`);
});

app.addEventListener("error", (error) => {
  console.error(error);
  Deno.exit(1);
});

await app.listen({ port: PORT });
