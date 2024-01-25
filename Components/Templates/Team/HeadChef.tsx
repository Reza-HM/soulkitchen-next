import Image from "next/image";

const HeadChef = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 w-full md:w-1/2">
        <div className="relative">
          <Image
            alt="about us chef's photo"
            src="/img/aboutus2.jpg"
            className="w-full h-full object-cover object-center !grayscale"
            width={800}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        </div>
      </div>
      <div className="flex-1 w-full md:w-1/2 flex justify-center items-center">
        <p className="-rotate-90 line-clamp-1 tracking-widest">HEAD CHEF</p>
        <div className="flex-[10]">
          <h2 className="text-6xl font-PlayfairDisplay_Italic font-bold !py-8 px-20">
            Jason Shetty
          </h2>
          <p className="line-clamp-5 text-justify leading-loose text-2xl !py-6 px-20">
            Jason’s cooking focuses on dishes sourced from local farmers and
            pays thoughtful attention to ingredients and subtle flavors.
          </p>
          <p className="line-clamp-5 text-justify leading-loose text-2xl !py-6 px-20">
            Seasonal chili pepper green papaya salad apricot Mexican fiesta
            avocado banana bread almond milk chai latte dill ghost pepper mangos
            green pepper tabasco pepper ultra creamy avocado lime.
          </p>
          <p className="line-clamp-5 text-justify leading-loose text-2xl !py-10 px-20">
            FAVORITE FOOD: GRILLED TALAPIA WITH CRAYFISH SAUCE
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeadChef;
