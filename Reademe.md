 there are two aproch to connect aur db

 1. first
    all db conection code function i add in index.js and excute it ....!
like 
                  import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const startServer = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME ? `/${DB_NAME}` : ""}`);
    console.log("MongoDB connected");

    app.on("error", (error) => {
      console.log("App Error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Connection Error:", err);
    process.exit(1);
  }
};

startServer();





2. second
   all db code in saprate file or folder then import in index.js and excute it 