import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <div className="w-full md:container !px-0 flex flex-wrap justify-between mb-40">
      <div className="w-full md:w-1/2 md:flex-1 animate-fade-up !h-auto md:!h-[80rem] md:!min-h-[80rem]">
        <Image
          src="/img/chef.jpg"
          alt="chef's photo"
          width={1000}
          height={1000}
          className=" !h-auto md:!h-[80rem] md:!min-h-[80rem]"
        />
      </div>
      <div className="w-full md:w-1/2 md:flex-1 flex flex-wrap animate-fade-up !h-auto md:!h-[80rem] md:!min-h-[80rem]">
        <div className="w-full sm:flex-1 sm:w-1/2 bg-zinc-900 text-white flex flex-col justify-center items-center gap-16 p-12 md:px-20 md:py-0">
          <h3 className="font-PlayfairDisplay font-bold text-center text-4xl">
            Chef Milo Fernandes
          </h3>
          <p className="text-center max-w-md leading-loose md:!line-clamp-5 xl:!line-clamp-none">
            Milo’s culinary creations are reflective of his own extensive
            travels and love of combining flavours from all over the world. His
            cooking focuses on vegetable-centric dishes sourced from local
            farmers and he pays thoughtful attention to ingredients and subtle
            flavors.
          </p>
          <Link
            href="/team"
            className="flex justify-center items-center tracking-widest !font-bold py-2 px-8 text-xl lg:text-2xl cursor-pointer border-2 !border-white dark:!border-gray-400 hover:bg-gray-400 hover:text-white hover:!border-white duration-300"
          >
            Meet The Team
          </Link>
        </div>
        <div className="w-full sm:flex-1 sm:w-1/2 flex flex-col">
          <Image
            src="/img/chefFoods1.jpg"
            alt="chef's food"
            className="flex-1 w-full"
            width={500}
            height={500}
          />
          <Image
            src="/img/chefFoods2.jpg"
            alt="chef's food"
            className="flex-1 w-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};
export default Team;
