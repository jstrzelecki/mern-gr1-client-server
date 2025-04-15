import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string; 


const connectDB = async () => {
   
    try {
        console.log("ConnectDB DB MONGO_URI ", MONGO_URI);
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connetected")
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err);
        }else {
            console.error("Jakś błąd, ale nie kumam ",err )
        }
        process.exit(1);
    }
}

export default connectDB;