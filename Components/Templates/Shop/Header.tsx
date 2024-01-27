import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-start items-center p-32 h-screen bg-[url('/img/shop1.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-start gap-16">
        <h3 className="tracking-widest font-semibold text-zinc-400">
          TASTE THE LOVE
        </h3>
        <h1 className="font-PlayfairDisplay text-6xl md:text-8xl font-semibold tracking-wide dark:text-zinc-600">
          Soul Kitchen to go
        </h1>
        <p className="tracking-wide text-zinc-600 max-w-2xl">
          Enjoy our signature dishes, baked goods, spices, oils and more in the
          comfort of your own home.
        </p>
        <Link
          href="/allProducts"
          className="w-60 md:w-80 text-xl md:text-2xl lg:text-3xl bg-black text-zinc-400 dark:bg-zinc-500 dark:text-white hover:bg-zinc-500 hover:text-white duration-300 flex justify-center items-center p-4 rounded-xl"
        >
          SEE ALL PRODUCTS
        </Link>
      </div>
    </div>
  );
};
export default Header;
