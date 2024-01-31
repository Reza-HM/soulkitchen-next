import mongoose, { Document, Schema } from "mongoose";

export interface IShoppingCartItem extends Document {
  productId: Schema.Types.ObjectId;
  quantity: number;
}

const ShoppingCartItemSchema = new Schema<IShoppingCartItem>({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, default: 1 },
});

const ShoppingCartModel =
  (mongoose.models.ShoppingCartItem as mongoose.Model<IShoppingCartItem>) ||
  mongoose.model<IShoppingCartItem>("ShoppingCartItem", ShoppingCartItemSchema);

export default ShoppingCartModel;
