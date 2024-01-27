import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductBox = () => {
  const router = useRouter();

  return (
    <div
      className={`animate-fade-up group ${(router.pathname = "allProducts"
        ? "col-span-12 sm:col-span-6 md:col-span-3"
        : "")} flex flex-col items-center justify-center gap-8 p-8`}
    >
      <Link href="/product/1">
        <Image
          alt="product's img"
          src="/img/product1.jpg"
          width={300}
          height={300}
        />
      </Link>
      <Link href="/product/1">
        <span className="text-2xl tracking-widest">OLIVE OIL</span>
      </Link>
      <span className="text-2xl tracking-widest">$17.00</span>
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
