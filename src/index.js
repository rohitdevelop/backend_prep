import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import { connectDB } from "./db/detabase";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("server running");
    });
  })
  .catch((err) => {
    console.log("Erroe", err);
  });
