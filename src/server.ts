import express from "express";

const app = express();

app.disable("x-powered-by");

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
