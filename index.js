import { fileURLToPath } from "url";
import path from "path";
import express from "express";

const port = 8088;
const delay = 200;

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/", (_, res) => {
  setTimeout(() => res.sendFile(path.join(rootDir, "conf.js")), delay);
});

console.log(`Listening on ${port}, using delay of ${delay}ms`);
app.listen(port);
