import Image from "next/image";

const Recipe = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 w-full md:w-1/2">
        <div className="relative">
          <Image
            alt="about us last photo"
            src="/img/aboutus4.jpg"
            className="w-full h-full object-cover object-center"
            width={800}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        </div>
      </div>
      <div className="flex-1 w-full md:w-1/2 flex justify-center items-center">
        <p className="-rotate-90 line-clamp-1 tracking-widest">
          MADE WITH LOVE
        </p>
        <div className="flex-[10]">
          <h2 className="text-6xl font-PlayfairDisplay_Italic font-bold !py-10 px-20">
            Taste the Difference
          </h2>
          <p className="line-clamp-5 text-justify leading-loose text-2xl !py-10 px-20">
            Zesty tofu pad thai ginger lemongrass agave green tea cocoa ginger
            carrot spiced juice grains Thai basil curry golden cayenne pepper
            cool spring mocha chocolate blueberry pops raspberries ultimate Thai
            super chili cauliflower lemon.
          </p>
          <p className="line-clamp-5 text-justify leading-loose text-2xl !py-10 px-20">
            Thai dragon pepper coconut rice Indian spiced apples cilantro
            springtime strawberry sleepy morning tea double dark chocolate
            casserole cauliflower hearty burritos green pepper miso dressing
            leek cilantro lime vinaigrette delightful blueberry scones main
            course roasted butternut squash.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
