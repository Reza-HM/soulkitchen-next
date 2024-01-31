import { IProduct } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface ProductBoxProps {
  name: string;
  price: string;
  img: string;
  shortName: string;
}

const ProductBox: FC<ProductBoxProps> = ({ name, shortName, price, img }) => {
  const router = useRouter();

  return (
    <div
      className={`animate-fade-up group ${(router.pathname = "allProducts"
        ? "col-span-12 sm:col-span-6 md:col-span-3"
        : "")} flex flex-col items-center justify-center gap-8 p-8`}
    >
      <Link href={`/product/${shortName}`}>
        <Image alt="product's img" src={img} width={300} height={300} />
      </Link>
      <Link href={`/product/${shortName}`}>
        <span className="text-2xl tracking-widest">{name}</span>
      </Link>
      <span className="text-2xl tracking-widest">${price}</span>
      <Link
        href="/cart"
        className="opacity-0 invisible group-hover:opacity-100 group-hover:visible animate-fade-up transition-double"
      >
        <span className="tracking-widest text-2xl font-bold text-zinc-400">
          ADD TO CART
        </span>
      </Link>
    </div>
  );
};
export default ProductBox;
