import mongoose from "mongoose";


export const connectDB = async() =>{
     const DB_URI = process.env.DB_URI;
await mongoose.connect(DB_URI).then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.error("Failed to connect to database", err);
      process.exit(1);
    });
}