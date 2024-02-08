import mongoose from "mongoose";

const connectToDB = async (): Promise<boolean> => {
  try {
    if (mongoose.connections[0]?.readyState === 1) {
      return true;
    } else {
      await mongoose.connect("mongodb://localhost:27017/soulkitchen");
      console.log("MongoDB is Connected!");
    }
  } catch (err) {
    console.error("DB Connection Has Error:", err);
  }
  return false;
};

export default connectToDB;
