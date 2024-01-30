import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return false;
  }

  return res
    .setHeader(
      "Set-Cookie",
      serialize("token", "", {
        path: "/",
        maxAge: 0,
      })
    )
    .status(200)
    .json({ message: "User Logged Out Successfully." });
};

export default handler;
