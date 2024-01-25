import Image from "next/image";

const CoHeadChef = () => {
  return (
    <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between">
      <div className="w-full md:w-1/2 md:flex-1">
        <Image
          alt="about us chef's photo"
          src="/img/coheadchef.jpg"
          className="w-full h-full object-cover object-center flex-1 !grayscale"
          width={800}
          height={800}
        />
      </div>
      <div className="w-full md:w-1/2 md:flex-1 flex justify-center items-center">
        <p className="-rotate-90 line-clamp-1 tracking-widest">
          CO - HEAD CHEF
        </p>
        <div className="flex-[10]">
          <h2 className="text-6xl font-PlayfairDisplay_Italic font-bold !py-8 px-20">
            James Fernandez
          </h2>
          <p className=" text-justify leading-loose text-2xl !py-6 px-20">
            James’ cooking focuses on dishes sourced from local farmers and pays
            thoughtful attention to ingredients and subtle flavors.
          </p>
          <p className=" text-justify leading-loose text-2xl !py-6 px-20">
            Seasonal chili pepper green papaya salad apricot Mexican fiesta
            avocado banana bread almond milk chai latte dill ghost pepper mangos
            green pepper tabasco pepper creamy avocado lime.
          </p>
          <p className=" text-justify leading-loose text-2xl !py-10 px-20">
            FAVORITE FOOD: YELLOWTAIL SASHIMI
          </p>
        </div>
      </div>
    </div>
  );
};
export default CoHeadChef;
