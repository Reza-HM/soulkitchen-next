import mongoose, { Schema, Document } from "mongoose";

export interface IQuestion extends Document {
  question: string;
  answer: string;
}

const questionSchema: Schema<IQuestion> = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true }
);

const model =
  (mongoose.models.Question as mongoose.Model<IQuestion>) ||
  mongoose.model<IQuestion>("Question", questionSchema);

export default model;
