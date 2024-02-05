// cartContext.tsx

import React, { createContext, useContext, useState, useEffect } from "react";

interface CartContextType {
  cart: ProductDetails[];
  addToCart: (productDetails: ProductDetails) => void;
  removeFromCart: (productId: string) => void;
  totalPrice: () => number;
}

interface ProductDetails {
  _id: string; // Using shortName as a unique identifier
  name: string;
  price: string;
  img: string;
  description: string;
  shortName: string;
  quantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<ProductDetails[]>([]);

  const addToCart = (productDetails: ProductDetails) => {
    const { _id, name, price, img, description, shortName, quantity } =
      productDetails;

    const existingProductIndex = cart.findIndex((item) => item._id === _id);

    if (existingProductIndex !== -1) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      });
    } else {
      const newProduct: ProductDetails = {
        _id,
        name,
        price,
        img,
        description,
        shortName,
        quantity,
      };

      setCart((prevCart) => [...prevCart, newProduct]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const totalPrice = (): number => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
