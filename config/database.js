import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export const dbConnection = () => {

    mongoose.connect(process.env.MONGO_URL)
        .then(() => { console.log("DB connection successfully") })
        .catch(() => { console.log("DB connection Failed") })
}