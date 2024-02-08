import connectToDB from "@/pages/api/db";
import productModel from "@/models/product";
import { NextApiRequest, NextApiResponse } from "next";

connectToDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { shortName } = req.query;
  if (!shortName || Array.isArray(shortName)) {
    return res.status(400).json({ message: "Invalid shortName parameter" });
  }

  try {
    const product = await productModel.findOne({
      shortName: shortName.toString(),
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ data: product });
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
