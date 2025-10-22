import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("데이터베이스 연결!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
