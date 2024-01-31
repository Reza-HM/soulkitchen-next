import connectToDB from "@/configs/db";
import ShoppingCartModel from "@/models/ShoppingCartItem";
import UserModel from "@/models/User";
import { Schema, isValidObjectId } from "mongoose";
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
      await removeFromShoppingCart(req, res);
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed." });
      break;
  }

  async function getShoppingCart(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { userId } = req.query;

      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }

      const user = await UserModel.findById(userId).populate(
        "shoppingCart.productId"
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user.shoppingCart);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async function addToShoppingCart(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { userId, productId, quantity } = req.body;

      if (!userId || !productId || !quantity) {
        return res
          .status(400)
          .json({ message: "User ID, Product ID, and Quantity are required" });
      }

      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const existingCartItem = user.shoppingCart.find(
        (item) => String(item.productId) === productId
      );

      if (existingCartItem) {
        existingCartItem.quantity += quantity;
      } else {
        if (!isValidObjectId(productId)) {
          return res.status(400).json({ message: "Invalid Product ID" });
        }

        const newCartItem = new ShoppingCartModel({
          productId: productId as unknown as Schema.Types.ObjectId,
          quantity: Number(quantity),
        });

        user.shoppingCart.push(newCartItem);
      }

      await user.save();

      return res.status(200).json(user.shoppingCart);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async function updateShoppingCart(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { userId, productId, quantity } = req.body;

      if (!userId || !productId || !quantity) {
        return res
          .status(400)
          .json({ message: "User ID, Product ID, and Quantity are required" });
      }

      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const cartItem = user.shoppingCart.find(
        (item) => String(item.productId) === productId
      );

      if (cartItem) {
        cartItem.quantity = quantity;
        await user.save();
        res.status(200).json(user.shoppingCart);
      } else {
        res
          .status(404)
          .json({ message: "Item not found in the shopping cart" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async function removeFromShoppingCart(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      const { userId, productId } = req.body;

      if (!userId || !productId) {
        return res
          .status(400)
          .json({ message: "User ID and Product ID are required" });
      }

      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const filteredCart = user.shoppingCart.filter(
        (item) => String(item.productId) !== productId
      );

      user.shoppingCart = filteredCart;

      await user.save();

      res.status(200).json(user.shoppingCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default handler;
