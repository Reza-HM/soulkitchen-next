import ProductBox from "@/Components/Modules/ProductBox";
import { IProduct } from "@/models/product";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const BestSellers = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="mt-32">
      <div className="lg:!h-[700px] lg:!min-h-[700px]">
        <div className="relative before:absolute before:w-1 before:h-20 before:block before:!-bottom-28 before:!bg-zinc-400 flex flex-col items-center gap-8">
          <h4 className="text-zinc-400 text-2xl font-semibold tracking-widest">
            DISCOVER OUR
          </h4>
          <h2 className="font-PlayfairDisplay font-semibold text-6xl tracking-widest">
            Bestsellers
          </h2>
        </div>
        <div className="mt-40">
          <div className="flex justify-between flex-wrap">
            {products.map((product) => (
              <div
                className="w-full md:flex-1 md:w-1/4 flex flex-col items-center gap-8"
                key={product._id}
              >
                <ProductBox {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center mt-20">
        <Link
          href="/allProducts"
          className="mt-32 tracking-widest cursor-pointer text-zinc-500 text-2xl border-2 border-zinc-500 w-60 mx-auto p-4 flex justify-center items-center hover:bg-zinc-400 hover:text-white hover:border-zinc-400 duration-300"
        >
          SHOP ALL
        </Link>
        <Link
          href="/cart"
          className="mt-32 tracking-widest cursor-pointer text-zinc-500 text-xl border-2 border-zinc-500 w-60 mx-auto p-4 flex justify-center items-center hover:bg-zinc-400 hover:text-white hover:border-zinc-400 duration-300"
        >
          CHECK THE CART
        </Link>
      </div>
    </div>
  );
};

export default BestSellers;
