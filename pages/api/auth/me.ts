import connectToDB from "@/configs/db";
import userModel from "@/models/user";
import { verifyToken } from "@/utils/auth";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return false;
  }

  try {
    connectToDB();
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "You're Not Logged In!" });
    }

    const tokenPayload = verifyToken(token);

    if (!tokenPayload) {
      return res.status(401).json({ message: "You're Not Logged In!" });
    }

    const user = await userModel.findOne(
      { email: tokenPayload.email },
      "_id username email phone role token"
    );

    return res.status(200).json({ data: user });
  } catch (err) {
    return res.status(500).json({ message: "Unknown Internal Server Error." });
  }
};

export default handler;
