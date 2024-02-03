import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useAuth } from "./AuthContext";
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
  const { user } = useAuth();
  const { fetchProductByShortName } = useProduct();

  const addToCart = async (productId: string, quantity: number) => {
    if (!user) {
      return;
    }

    const existingCartItem = cart.find(
      (item) => item.product._id === productId
    );

    if (existingCartItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
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
    try {
      const response = await fetch(`/api/users/${user?._id}/cart`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await response.json();
      setCart(data.cartItems || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
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
