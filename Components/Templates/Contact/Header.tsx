import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 md:flex-1 flex flex-col gap-12 justify-center items-center">
        <h2 className="text-7xl font-bold font-PlayfairDisplay">Find Us</h2>
        <h4 className="text-3xl font-bold mt-7">WHERE</h4>
        <div className="flex flex-col gap-2 items-center">
          <span className="tracking-wider">317 Pacific C HwyHuntington</span>
          <span className="tracking-wider">CA 92648</span>
        </div>
        <div className="flex items-center gap-12">
          <button className="w-full xs:w-96 tracking-widest border self-start py-4 px-8 bg-black text-zinc-400 dark:bg-gray-900 dark:text-gray-400 cursor-pointer hover:bg-zinc-500 hover:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-300 duration-300">
            VIEW MAP{" "}
          </button>
          <Link
            href="/booking"
            className="hidden lg:flex justify-center items-center tracking-widest !font-bold py-4 px-8 cursor-pointer border-2 !border-black dark:!border-gray-400 hover:bg-gray-400 hover:text-white hover:!border-gray-400 duration-300"
          >
            BOOK YOUR TABLE
          </Link>
        </div>
        <h4 className="text-3xl font-bold mt-8">WHEN</h4>
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl tracking-widest">MONDAY - FRIDAY</p>
          <span className="text-2xl tracking-widest">7am – 6pm</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl tracking-widest">SATURDAY/SUNDAY</p>
          <span className="text-2xl tracking-widest">8am – 6pm</span>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:flex-1">
        <div className="">
          <Image
            alt="about us header's photo"
            src="/img/place1.jpg"
            className="w-full h-full object-cover object-center"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
