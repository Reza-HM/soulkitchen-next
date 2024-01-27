import Image from "next/image";
import Link from "next/link";

const Recommendation = () => {
  return (
    <div className="container px-0 mt-40 flex">
      <div className="flex items-center justify-between flex-col md:flex-row w-full md:flex-1">
        <Image
          alt=""
          src="/img/recommend.jpg"
          width={800}
          height={800}
          className="w-full md:w-1/2 flex-grow !h-[1000px] !min-h-[1000px] md:!h-[800px] md:!min-h-[800px]"
        />
        <div className="w-full md:w-1/2 bg-zinc-900 text-white flex-grow flex justify-center items-center !h-[1000px] !min-h-[1000px] md:!h-[800px] md:!min-h-[800px]">
          <div className="flex flex-col items-start gap-16 p-40">
            <h3 className="text-2xl tracking-widest font-semibold">
              CHEF’S CHOICE
            </h3>
            <h2 className="font-PlayfairDisplay text-5xl font-semibold tracking-widest">
              Soul Kitchen Five Spices Powder
            </h2>
            <p>
              SFive Spice Powder is based on ancient Chinese lore that the
              universe is composed of five elements – wood, metal, water, fire
              and earth.
            </p>
            <p>
              Ingredients of Five Spice Powder represent those five elements,
              balanced in the harmonious melding of five flavors – sweet, sour,
              bitter, pungent and salty.
            </p>
            <div className="">
              <Link
                href="/product/1"
                className="tracking-widest cursor-pointer bg-white text-black text-2xl border-2 border-zinc-500 w-60 mx-auto p-4 flex justify-center items-center hover:bg-zinc-400 hover:text-white hover:border-zinc-400 duration-300"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recommendation;
