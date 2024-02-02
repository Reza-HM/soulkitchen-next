import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export interface DecodedToken {
  email: string;
}

export const authenticate =
  (
    handler: (
      req: NextApiRequest & { user?: DecodedToken },
      res: NextApiResponse
    ) => Promise<void>
  ) =>
  async (
    req: NextApiRequest & { user?: DecodedToken },
    res: NextApiResponse
  ) => {
    try {
      const token = req.headers.authorization?.replace("Bearer ", "");

      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const decoded = jwt.verify(
        token,
        process.env.privateKey || ""
      ) as unknown as DecodedToken;

      req.user = decoded;
      return handler(req, res);
    } catch (err) {
      console.error(err);
      return res.status(401).json({ message: "Unauthorized" });
    }
  };

export default auth;
