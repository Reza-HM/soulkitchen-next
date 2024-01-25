import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 bg-zinc-900 flex justify-center items-center">
        <p className="line-clamp-5 text-center leading-loose text-2xl text-white p-20 ">
          Our Team at Soulkitchen will make your stay an unforgettable one.
          Jalapeño sesame soba noodles Bulgarian carrot roasted brussel sprouts
          fruit smash ghost pepper summer fruit salad with potato simmer coconut
          rice crumbled lentils coconut green bowl peanut butter chickpea crust
          pizza a delicious meal portobello
        </p>
      </div>
      <div className="flex-1">
        <div className="relative">
          <Image
            alt="about us header's photo"
            src="/img/aboutus1.jpg"
            className="w-full h-full object-cover object-center !grayscale"
            width={800}
            height={800}
          />
          <span className="text-2xl tracking-widest font-bold absolute inset-[50%] -translate-x-1/2 -translate-y-1/2 text-white w-full text-center">
            WE WILL MAKE YOUR STAY AN UNFORGETTABLE ONE
          </span>
          <p className="text-5xl font-PlayfairDisplay_Italic tracking-widest font-bold mt-20 absolute inset-[50%] -translate-x-1/2 -translate-y-1/2 text-white w-full text-center">
            MEET THE TEAM
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
