import ProductBox from "@/Components/Modules/ProductBox";
import { IProduct } from "@/models/Product";
import axios from "axios";
import { useEffect, useState } from "react";

const RelatedProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="mt-40 mb-20">
      <h2 className="underline underline-offset-8 text-2xl font-bold tracking-widest text-center">
        DESCRIPTION
      </h2>
      <div className="mt-8 grid grid-cols-12 gap-8 items-center">
        {products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};
export default RelatedProducts;
