import mongoose, { Schema, Document } from "mongoose";
import ProductModel from "./Product";

export interface IUser extends Document {
  username: string;
  email: string;
  phone: string;
  password: string;
  token?: string;
  role?: string;
  cart: string[];
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
    cart: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

userSchema.index({ email: 1 });

const UserModel =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", userSchema);

export default UserModel;
