import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useUser } from "./AuthContext";
import { useProduct, IProduct } from "./ProductContext";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface CartContextType {
  cart: ICartItem[];
  addToCart: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => void;
  fetchCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const { user } = useUser();
  const { fetchProductByShortName } = useProduct();

  const addToCart = async (productId: string, quantity: number) => {
    if (!user) {
      // Handle case where user is not authenticated
      return;
    }

    const existingCartItem = cart.find(
      (item) => item.product._id === productId
    );

    if (existingCartItem) {
      // If the product is already in the cart, update the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // If the product is not in the cart, fetch it and add to the cart
      const product = await fetchProductByShortName(productId);

      if (product) {
        setCart((prevCart) => [...prevCart, { product, quantity }]);
      }
    }
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product._id !== productId)
    );
  };

  const fetchCart = async () => {
    // Fetch user's cart data from the backend
    // You can use the user._id to identify the user and retrieve their cart data
    // For demonstration purposes, I'll assume a dummy API endpoint
    try {
      const response = await fetch(`/api/users/${user?._id}/cart`); // Adjust the API endpoint accordingly
      const data = await response.json();
      setCart(data.cartItems || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    // Fetch user's cart data when the component mounts
    if (user) {
      fetchCart();
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, fetchCart }}
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
