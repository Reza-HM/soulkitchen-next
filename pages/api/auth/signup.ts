import connectToDB from "@/configs/db";
import UserModel, { IUser } from "@/models/User";
import { generateToken, hashPassword } from "@/utils/auth";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

interface SignUpRequestBody {
  username: string;
  email: string;
  phone: string;
  password: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    connectToDB();
    const { username, email, phone, password } = req.body as SignUpRequestBody;

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(422).json({ message: "Invalid email format" });
    }

    const phoneRegex: RegExp = /^09\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(422).json({ message: "Invalid phone number format" });
    }

    if (password.trim().length < 8) {
      return res
        .status(422)
        .json({ message: "Password must be at least 8 characters long" });
    }

    const usernameRegex: RegExp = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
      return res.status(422).json({ message: "Invalid username format" });
    }

    const doesUserExists = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (doesUserExists) {
      return res
        .status(422)
        .json({ message: "This Username Or Email Already Exists." });
    }

    const hashedPassword = await hashPassword(password);

    const token = generateToken({ email });

    const users = await UserModel.find({});

    await UserModel.create({
      username,
      email,
      phone,
      password: hashedPassword,
      token,
      role: users.length > 0 ? "USER" : "ADMIN",
    } as IUser);

    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 3,
        })
      )
      .status(201)
      .json({ message: "You Signed Up Successfully", token });
  } catch (err) {
    return res.status(500).json({ message: "Unknown Internal Server Error." });
  }
};

export default handler;