import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router } from "./routes";

var cors = require("cors");

config();

const app = express();
app.use(cors());

app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;
mongoose
  .connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(router);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
