import Image from "next/image";

const Philosophy = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 flex justify-center items-center">
        <div className="flex-[10] flex flex-col gap-12 p-16">
          <h2 className="text-6xl font-PlayfairDisplay_Italic font-bold">
            Food Philosophy
          </h2>
          <p className="line-clamp-5 text-justify leading-loose text-2xl">
            Zesty tofu pad thai ginger lemongrass agave green tea cocoa ginger
            carrot spiced juice grains Thai basil curry golden cayenne pepper
            cool spring mocha chocolate blueberry pops raspberries ultimate Thai
            super chili cauliflower lemon.
          </p>
          <p className="line-clamp-5 text-justify leading-loose text-2xl">
            Thai dragon pepper coconut rice Indian spiced apples cilantro
            springtime strawberry sleepy morning tea double dark chocolate
            casserole cauliflower hearty burritos green pepper miso dressing
            leek cilantro lime vinaigrette delightful blueberry scones main
            course roasted butternut squash.
          </p>
        </div>
        <p className="-rotate-90 line-clamp-1 tracking-widest">
          ELEMENTAL COOKING METHODS
        </p>
      </div>
      <div className="flex-1">
        <div className="relative">
          <video
            src="/img/aboutus3.mp4"
            loop
            muted
            playsInline
            autoPlay
            className="aspect-video w-full h-full"
          ></video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        </div>
      </div>
    </div>
  );
};
export default Philosophy;
