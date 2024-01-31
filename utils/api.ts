// utils/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Assuming your APIs are in the /api directory
});

export const getShoppingCart = (userId: string) =>
  api.get(`/shopping-cart?userId=${userId}`);
export const addToShoppingCart = (
  userId: string,
  productId: string,
  quantity: number
) => api.post("/shopping-cart", { userId, productId, quantity });
export const updateShoppingCart = (
  userId: string,
  productId: string,
  quantity: number
) => api.put("/shopping-cart", { userId, productId, quantity });
export const removeFromShoppingCart = (userId: string, productId: string) =>
  api.delete("/shopping-cart", { data: { userId, productId } });
