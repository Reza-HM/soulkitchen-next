import Image from "next/image";

const Board = () => {
  return (
    <div className="container my-20">
      <div className="flex justify-between items-center gap-12">
        <div className="w-full md:w-1/2 md:flex-1">
          <div className="relative">
            <div className="relative">
              <Image
                alt="board's photo"
                src="/img/chief2.jpg"
                width={800}
                height={600}
                className="rounded-xl object-cover"
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
        </div>
        <div className="w-full md:w-1/2 md:flex-1">
          <div className="relative">
            <div className="relative">
              <Image
                alt="board's photo"
                src="/img/chief1.jpg"
                width={800}
                height={600}
                className="rounded-xl !h-[520px] object-cover"
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
        </div>
      </div>
    </div>
  );
};
export default Board;
