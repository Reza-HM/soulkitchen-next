import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 bg-zinc-800 flex justify-center items-center">
        <p className="line-clamp-5 text-center leading-loose text-3xl text-white p-20 ">
          Our daily changing menu represents the best of what our local markets
          have to offer. Our passion for sourcing fresh ingredients from farmers
          and suppliers we know, combining with traditional flavors and
          rewriting familiar recipes into exceptional cuisine is our mission and
          greatest joy.
        </p>
      </div>
      <div className="flex-1">
        <div className="relative">
          <Image
            alt="about us header's photo"
            src="/img/aboutus1.jpg"
            className="w-full h-full object-cover object-center"
            width={800}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <p className="text-5xl font-PlayfairDisplay absolute inset-[50%] -translate-x-1/2 -translate-y-1/2 text-white w-60 text-center">
            About Us
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
