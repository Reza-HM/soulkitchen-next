// user.model.ts
import mongoose, { Schema, Document } from "mongoose";
import userModel, { IProduct } from "@/models/product";

export interface IUser extends Document {
  // existing fields...
  username: string;
  email: string;
  phone: string;
  password: string;
  token?: string;
  role?: string;
  // new field for shopping cart
  cart: {
    items: Array<{
      product: IProduct["_id"];
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
    // new shopping cart field
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
