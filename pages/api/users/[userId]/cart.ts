import userModel, { IUser } from "@/models/user";
import connectToDB from "@/configs/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const userToken = req.headers.authorization?.split(" ")[1];
  console.log(userToken);

  try {
    connectToDB();

    const user: IUser | null = await userModel.findOne({ token: userToken });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const userCart = user.cart || [];

    res.json({ cartItems: userCart });
  } catch (error) {
    console.error("Error fetching user cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
