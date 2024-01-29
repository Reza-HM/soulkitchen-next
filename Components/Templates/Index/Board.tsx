import Image from "next/image";

const Board = () => {
  return (
    <div className="container my-20">
      <div className="flex justify-between flex-wrap gap-12">
        <div className="w-full md:w-1/2 md:flex-1">
          <div className="relative">
            <div className="relative">
              <Image
                alt="board's photo"
                src="/img/chief2.jpg"
                width={800}
                height={600}
                className="rounded-xl object-cover !h-auto md:!h-[60rem] md:!min-h-[60rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            </div>
            <div className="flex flex-col gap-8 absolute !bottom-16 w-full text-white">
              <span className="font-semibold text-center text-3xl">
                EXECUTIVE CHEF
              </span>
              <span className="text-center text-3xl font-PlayfairDisplay_Italic">
                Jason Shetty
              </span>
            </div>
          </div>
          <p className="tracking-widest text-zinc-500 text-center text-2xl !mt-8">
            FAVORITE FOOD: GRILLED TALAPIA WITH CRAYFISH SAUCE
          </p>
        </div>
        <div className="w-full md:w-1/2 md:flex-1">
          <div className="relative">
            <div className="relative">
              <Image
                alt="board's photo"
                src="/img/chief1.jpg"
                width={800}
                height={600}
                className="rounded-xl object-cover !h-auto md:!h-[60rem] md:!min-h-[60rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            </div>
            <div className="flex flex-col gap-8 absolute !bottom-16 w-full text-white">
              <span className="font-semibold text-center text-3xl">
                CO-HEAD CHEF
              </span>
              <span className="text-center text-3xl font-PlayfairDisplay_Italic">
                Christine Stefani
              </span>
            </div>
          </div>
          <p className="tracking-widest text-zinc-500 text-center text-2xl !mt-8">
            FAVORITE FOOD: PACIFIC OYSTERS WITH PONZU SAUCE
          </p>
        </div>
      </div>
    </div>
  );
};
export default Board;
