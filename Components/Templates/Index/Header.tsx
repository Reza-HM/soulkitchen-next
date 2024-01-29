import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-8 !z-40">
      <div className="w-full md:w-1/3 md:flex-1 flex justify-center bg-[url('/img/headerImg-1.jpg')] bg-cover bg-center bg-no-repeat animate-fade-up bg-blend-darken bg-black/30 cursor-pointer !h-[50rem] !min-h-[50rem] order-2 md:order-1">
        <div className="flex flex-col items-center justify-end mb-12 text-white gap-4">
          <h3 className="font-PlayfairDisplay_Italic text-3xl sm:text-5xl font-bold tracking-widest text-center">
            Lunch Special
          </h3>
          <p className="font-bold text-xl sm:text-3xl text-center">See Menu</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 md:flex-1 relative animate-fade-up bg-blend-darken bg-black/30 cursor-pointer !h-[50rem] !min-h-[50rem] order-1 md:order-2">
        <video
          src="/img/header-video.mp4"
          className="inset-0 w-full h-full object-cover object-center"
          muted
          loop
          playsInline
          autoPlay
        ></video>
        <div className="flex flex-col items-center text-white gap-8 absolute inset-0 top-40 p-2">
          <h3>TASTE THE DIFFERENCE</h3>
          <h2 className="text-5xl font-PlayfairDisplay_Black text-center leading-relaxed p-2">
            THE SOUL KITCHEN EXPERIENCE
          </h2>
          <p className="text-center max-w-md p-2">
            MONDAY thru FRIDAY 5pm – 11pm SATURDAY 3pm – 11pm SUNDAY closed BOOK
          </p>
          <Link
            href="/booking"
            className="flex justify-center items-center tracking-widest !font-bold py-2 px-8 cursor-pointer border-2 !border-white dark:!border-gray-400 hover:bg-gray-400 hover:text-white hover:!border-white duration-300"
          >
            BOOK YOUR TABLE
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3 md:flex-1 flex justify-center bg-[url('/img/headerImg-2.jpg')] bg-cover bg-center bg-no-repeat animate-fade-up bg-blend-darken bg-black/30 cursor-pointer !h-[50rem] !min-h-[50rem] order-3 md:order-3">
        <div className="flex flex-col items-center justify-end mb-12 text-white gap-4">
          <h3 className="font-PlayfairDisplay_Italic text-3xl sm:text-5xl font-bold tracking-widest text-center">
            Soul Kitchen Malibu{" "}
          </h3>
          <p className="font-bold text-xl sm:text-3xl text-center">
            Book Your Table{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
