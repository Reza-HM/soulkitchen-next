import Image from "next/image";
import Link from "next/link";

const Visit = () => {
  return (
    <div className="container mt-60 mb-40">
      <div className="relative before:absolute before:w-1 before:h-20 before:block before:!-bottom-28 before:!bg-zinc-400 flex flex-col items-center gap-8">
        <h2 className="font-PlayfairDisplay font-semibold text-6xl tracking-widest">
          Visit Us
        </h2>
      </div>
      <div className="flex justify-between flex-wrap items-center gap-12 mt-40">
        <div className="w-full md:w-1/2 md:flex-1">
          <div className="relative">
            <div className="relative">
              <Image
                alt="board's photo"
                src="/img/place1.jpg"
                width={800}
                height={600}
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            </div>
            <div className="flex flex-col gap-8 absolute !left-20 !bottom-20 w-full text-white">
              <h3 className="font-semibold font-PlayfairDisplay text-5xl">
                Laguna Beach
              </h3>
              <Link
                href=""
                className="text-center text-2xl tracking-widest p-4 w-80 bg-white text-zinc-700 hover:bg-zinc-700 hover:text-white duration-300"
              >
                MENU + DETAILS
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:flex-1">
          <div className="relative">
            <div className="relative">
              <Image
                alt="board's photo"
                src="/img/place2.jpg"
                width={800}
                height={600}
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            </div>
            <div className="flex flex-col gap-8 absolute !left-20 !bottom-20 w-full text-white">
              <h3 className="font-semibold font-PlayfairDisplay text-5xl">
                SAN FRANCISCO
              </h3>
              <Link
                href=""
                className="text-center text-2xl tracking-widest p-4 w-80 bg-white text-zinc-700 hover:bg-zinc-700 hover:text-white duration-300"
              >
                MENU + DETAILS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Visit;
