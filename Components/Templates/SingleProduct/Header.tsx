import Image from "next/image";
import { FC } from "react";

interface HeaderProps {
  name: string;
  img: string;
  price: string;
  description: string;
}

const Header: FC<HeaderProps> = ({ description, img, name, price }) => {

  return (
    <div className="flex flex-wrap justify-between gap-12">
      <div className="w-full md:w-1/2 md:flex-1">
        <Image
          alt="product's img"
          src={img}
          width={800}
          height={800}
          className="h-[65rem] object-cover object-center"
        />
      </div>
      <div className="w-full md:w-1/2 md:flex-1">
        <div className="flex flex-col items-center p-8 gap-16 mt-20 text-zinc-600 dark:text-zinc-300">
          <h2 className="text-5xl font-bold tracking-widest">{name}</h2>
          <h3 className="text-3xl ">${price}</h3>
          <p className="max-w-4xl self-start">{description}</p>
          <input
            type="number"
            className="w-40 p-2 rounded-lg cursor-pointer self-start border border-zinc-400 !text-zinc-600"
            min={0}
          />
          <button className="w-full xs:w-96 tracking-widest border self-start py-4 px-8 bg-black text-zinc-400 dark:bg-gray-900 dark:text-gray-400 cursor-pointer hover:bg-zinc-500 hover:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-300 duration-300">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
