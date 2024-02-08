import connectToDB from "@/pages/api/db";
import userModel from "@/models/user";
import { generateToken, verifyPassword } from "@/utils/auth";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }
  try {
    connectToDB();
    const { identifier, password } = req.body;

    const user = await userModel.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }

    const isPasswordValid = await verifyPassword(
      String(password),
      user.password
    );

    if (!isPasswordValid) {
      return res
        .status(422)
        .json({ message: "username or password is wrong." });
    }

    const token = generateToken({ email: user.email });

    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 3,
        })
      )
      .status(200)
      .json({ message: "User Logged In Successfully!", token });
  } catch (err) {
    return res.status(500).json({ message: "Unknown Internal Server Error." });
  }
};
export default handler;
