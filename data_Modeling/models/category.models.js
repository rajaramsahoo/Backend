import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
  },
  { timeStamp: true }
);


export const Category = mongoose.model('Category',categorySchema)