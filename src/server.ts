import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const app = express();

app.disable("x-powered-by");

const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;
mongoose
  .connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
