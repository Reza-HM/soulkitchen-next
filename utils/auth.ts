import { ICartItem } from "@/contexts/CartContext";
import axios from "axios";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextApiRequest } from "next";
import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

interface TokenData {
  [key: string]: any;
}

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcryptjs.hash(password, 12);
  return hashedPassword;
};

const generateToken = (data: TokenData): string => {
  const privateKey = process.env.privateKey || "";
  if (!privateKey) {
    throw new Error("Private key not provided");
  }

  const token = jwt.sign({ ...data }, privateKey, { expiresIn: "24h" });
  return token;
};
const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid: boolean = await bcryptjs.compare(password, hashedPassword);
  return isValid;
};

const verifyToken = (token: string): TokenData | false => {
  try {
    const privateKey = process.env.privateKey || "";
    if (!privateKey) {
      throw new Error("Private key not provided");
    }

    const validationResult = jwt.verify(token, privateKey);
    return validationResult as TokenData;
  } catch (err) {
    console.error("Verify Token Error:", err);
    return false;
  }
};

const saveCartToServer = async (userId: string, updatedCart: ICartItem[]) => {
  try {
    const response = await fetch(`/api/users/${userId}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems: updatedCart }),
    });

    if (!response.ok) {
      console.error(
        "Failed to save cart to server. Server returned:",
        response.status,
        response.statusText
      );
      const responseBody = await response.json();
      console.error("Response body:", responseBody);
    } else {
      console.log("Cart successfully saved to server");
    }
  } catch (error) {
    console.error("Error saving cart to server:", error);
  }
};

export {
  hashPassword,
  generateToken,
  verifyPassword,
  verifyToken,
  saveCartToServer,
};
