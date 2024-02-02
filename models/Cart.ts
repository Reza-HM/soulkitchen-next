import { Document, Model, model, models, Schema } from "mongoose";
import UserModel from "./User";
import ProductModel from "./Product";

export interface CartItem {
  product: Schema.Types.ObjectId;
  quantity: number;
}

export interface CartDocument extends Document {
  user: Schema.Types.ObjectId;
  items: CartItem[];
}

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const CartModel =
  (models.Cart as Model<CartDocument>) ||
  model<CartDocument>("Cart", cartSchema);

export default CartModel;
