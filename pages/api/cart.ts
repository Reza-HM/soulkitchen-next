// pages/api/cart.ts

import connectToDB from "@/configs/db";
import userModel from "@/models/user";
import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

interface JWTPayload {
  email: string;
}

connectToDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    console.log("Received token:", token);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - Missing Token" });
    }

    const decoded = verify(token, process.env.privateKey || "") as JWTPayload;

    console.log("Decoded token:", decoded);

    const user = await userModel.findOne({ email: decoded.email });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User Not Found" });
    }

    console.log("User:", user);

    const populatedCart = await userModel.findById(user._id).populate("cart");
    const cartProducts = populatedCart?.cart;

    if (!cartProducts) {
      return res
        .status(401)
        .json({ message: "Unauthorized - User Data Not Found" });
    }

    console.log("User Data:", cartProducts);

    res.status(200).json({ success: true, cart: cartProducts });
  } catch (error) {
    console.error(error);
    res
      .status(401)
      .json({ success: false, message: "Unauthorized - Invalid Token" });
  }
};
