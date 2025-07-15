import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
 

const connectDB = async () =>{
    try {
    const connestioninstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME ? `/${DB_NAME}` : ""}`);
    console.log("MongoDB connected",connestioninstance);
     
    } catch (error) {
        console.log("ERROR", err)
        process.exit(1);
        
    }
}
