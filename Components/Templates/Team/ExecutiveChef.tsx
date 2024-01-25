import Image from "next/image";

const ExecutiveChef = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 flex flex-col">
        <h2 className="text-6xl font-PlayfairDisplay_Italic font-bold text-end py-6 px-20">
          Christine Stefani
        </h2>
        <p className="line-clamp-5 leading-loose text-2xl text-end py-6 px-20">
          Christine’s story is one of determination to follow her dreams of
          sharing her love of people and cuisine. Minty bananas soba noodles
          chia seeds green tea.
        </p>
        <p className="line-clamp-5 leading-loose text-2xl text-end py-6 px-20">
          Seasonal chili pepper green papaya salad apricot Mexican fiesta
          avocado banana bread almond milk chai latte dill ghost pepper mangos
          green pepper tabasco pepper ultra creamy avocado lime.
        </p>
        <p className="line-clamp-5 leading-loose text-2xl text-end py-6 px-20">
          FAVORITE FOOD: CHILEAN SEA BASS
        </p>
      </div>

      <div className="flex-1">
        <Image
          alt="about us header's photo"
          src="/img/chief1.jpg"
          className="!w-full h-full object-cover object-center !grayscale"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};
export default ExecutiveChef;
