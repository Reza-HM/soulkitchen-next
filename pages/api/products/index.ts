import connectToDB from "@/configs/db";
import productModel from "@/models/product";
import { NextApiRequest, NextApiResponse } from "next";

connectToDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const products = await productModel.find();
      return res.status(200).json(products);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, description, price, img, shortName } = req.body;

      if (!name || !description || !price || !img || !shortName) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newProduct = new productModel({
        name,
        description,
        price,
        img,
        shortName,
      });

      const savedProduct = await newProduct.save();

      res.status(201).json({ message: "New Product Created:", savedProduct });
    } catch (err) {
      console.error("Error creating product:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
