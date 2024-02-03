import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
  name: string;
  description: string;
  img: string;
  price: number;
  shortName: string;
}

interface ProductContextType {
  products: IProduct[];
  fetchProducts: () => Promise<void>;
  fetchProductByShortName: (shortName: string) => Promise<IProduct | null>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductByShortName = async (shortName: string) => {
    try {
      const response = await fetch(`/api/products/${shortName}`);
      const data = await response.json();
      return data.product || null;
    } catch (error) {
      console.error(
        `Error fetching product with shortName ${shortName}:`,
        error
      );
      return null;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, fetchProducts, fetchProductByShortName }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
