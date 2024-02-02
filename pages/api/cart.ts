import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";

connectToDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = req.user;

    const userData = await UserModel.findById(user?._id).populate("cart");

    res.status(200).json({ success: true, cart: userData?.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
