import Image from "next/image";
import Link from "next/link";

const ProductBox = () => {
  return (
    <div className="animate-fade-up group flex flex-col items-center justify-center gap-8 p-8">
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
      <Link href="/cart" className="hidden group-hover:block animate-fade-up">
        <span className="tracking-widest text-2xl font-bold text-zinc-400 ">
          ADD TO CART
        </span>
      </Link>
    </div>
  );
};
export default ProductBox;
