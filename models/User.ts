// user.model.ts
import mongoose, { Schema, Document } from "mongoose";
import userModel from "@/models/product";

export interface IUser extends Document {
  username: string;
  email: string;
  phone: string;
  password: string;
  token?: string;
  role?: string;
  cart: {
    items: Array<{
      product: ["_id"];
      quantity: number;
    }>;
  };
}

const userSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    token: String,
    cart: {
      items: [
        {
          product: { type: Schema.Types.ObjectId, ref: "Product" },
          quantity: { type: Number, default: 0 },
        },
      ],
    },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 });

const model =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", userSchema);

export default model;
