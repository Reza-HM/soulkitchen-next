import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MouseEvent, useEffect, useState } from "react";

interface ProductBoxProps {
  _id: string;
  name: string;
  description: string;
  price: string;
  img: string;
  shortName: string;
}

const ProductBox: FC<ProductBoxProps> = ({
  _id,
  name,
  shortName,
  price,
  img,
  description,
}) => {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getMe = async () => {
      const res = await axios.get("/api/auth/me");
      setUserId(res.data.data._id);
    };
    getMe();
  }, []);

  const addToCart = async (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    const res = await axios.post(`/api/shopping-cart`, {
      userId,
      productId: _id.toString(),
      quantity: 1,
    });
  };

  return (
    <div
      className={`animate-fade-up group ${(router.pathname = "allProducts"
        ? "col-span-12 sm:col-span-6 md:col-span-3"
        : "")} flex flex-col items-center justify-center gap-8 p-8`}
    >
      <Link href={`/products/${shortName}`}>
        <Image
          alt="product's img"
          src={img}
          width={300}
          height={300}
          className="w-full h-full"
        />
      </Link>
      <Link href={`/products/${shortName}`}>
        <span className="text-2xl tracking-widest truncate">{name}</span>
      </Link>
      <span className="text-2xl tracking-widest">
        ${Number(price).toLocaleString()}
      </span>
      <div
        className="opacity-0 invisible group-hover:opacity-100 group-hover:visible animate-fade-up transition-double"
        onClick={addToCart}
      >
        <Link
          href="/cart"
          className="tracking-widest text-2xl font-bold text-zinc-400"
        >
          ADD TO CART
        </Link>
      </div>
    </div>
  );
};
export default ProductBox;
