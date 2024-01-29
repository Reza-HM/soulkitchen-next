import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", userSchema);

export default UserModel;
