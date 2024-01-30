import mongoose, { Schema, Document } from "mongoose";
import { hashPassword } from "@/utils/auth";

export interface IUser extends Document {
  username: string;
  email: string;
  phone: string;
  password: string;
  token?: string;
  role?: string;
}

const userSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

userSchema.pre<IUser>("save", async function (next) {
  // Hash the password before saving
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }

  next();
});

const UserModel =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", userSchema);

export default UserModel;
