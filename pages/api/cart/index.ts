import connectToDB from "@/configs/db";
import { NextApiRequest, NextApiResponse } from "next";

connectToDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      await getShoppingCart(req, res);
      break;
    case "POST":
      await addToShoppingCart(req, res);
      break;
    case "PUT":
      await updateShoppingCart(req, res);
      break;
    case "DELETE":
      await deleteShoppingCart(req, res);
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed." });
      break;
  }

  const getShoppingCart = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { userId, productId, quantity } = req.body;

      if (!userId || !productId || !quantity) {
        return res
          .status(400)
          .json({ message: "User ID, Product ID, and Quantity are required" });
      }

      const 

    } catch (err) {}
  };
};
