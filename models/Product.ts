import mongoose, { Schema, Document, models, Model, model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  img: string;
  price: string;
  shortName: string;
}

const productSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: String, required: true },
    shortName: { type: String, required: true },
  },
  { timestamps: true }
);

const ProductModel =
  (models.Product as Model<IProduct>) ||
  model<IProduct>("Product", productSchema);

export default ProductModel;
