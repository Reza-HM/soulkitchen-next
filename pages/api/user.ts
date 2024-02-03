import { NextApiRequest, NextApiResponse } from "next";
import userModel from "@/models/user";
import connectToDB from "@/configs/db";
import { verify } from "jsonwebtoken";

interface JWTPayload {
  email: string;
}

connectToDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - Missing Token" });
    }
    const decoded = verify(token, process.env.privateKey || "") as JWTPayload;

    const user = await userModel.findOne({ email: decoded.email });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User Not Found" });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error("Error Processing User Request:", err);
    res
      .status(401)
      .json({ success: false, message: "Unauthorized - Invalid Token" });
  }
};
