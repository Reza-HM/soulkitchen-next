const Header = () => {
  return (
    <div className="flex justify-between gap-8 !z-40">
      <div className="flex-1 flex justify-center w-full md:w-1/3 bg-[url('/img/headerImg-1.jpg')] bg-cover bg-center bg-no-repeat animate-fade-up bg-blend-darken bg-black/30">
        <div className="flex flex-col items-center justify-end mb-12 text-white gap-4">
          <h3 className="font-PlayfairDisplay_Italic text-5xl font-bold tracking-widest">
            Lunch Special
          </h3>
          <p className="font-bold text-3xl">See Menu</p>
        </div>
      </div>
      <div className="flex-1 relative md:w-1/3 animate-fade-up bg-blend-darken bg-black/30">
        <video
          src="/img/header-video.mp4"
          className="inset-0 w-full h-full object-cover object-center"
          muted
          loop
          playsInline
          autoPlay
        ></video>
        <div className="flex flex-col items-center text-white gap-8 absolute inset-0 top-40">
          <h3>TASTE THE DIFFERENCE</h3>
          <h2 className="text-5xl font-PlayfairDisplay_Black text-center leading-relaxed">
            THE SOUL KITCHEN EXPERIENCE
          </h2>
          <p className="text-center max-w-md">
            MONDAY thru FRIDAY 5pm – 11pm SATURDAY 3pm – 11pm SUNDAY closed BOOK
          </p>
          <div className="flex justify-center items-center tracking-widest !font-bold py-2 px-8 cursor-pointer border-2 !border-white dark:!border-gray-400 hover:bg-gray-400 hover:text-white hover:!border-white duration-300">
            BOOK YOUR TABLE
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center w-full md:w-1/3 bg-[url('/img/headerImg-2.jpg')] bg-cover bg-center bg-no-repeat animate-fade-up bg-blend-darken bg-black/30">
        <div className="flex flex-col items-center justify-end mb-12 text-white gap-4">
          <h3 className="font-PlayfairDisplay_Italic text-5xl font-bold tracking-widest">
            Soul Kitchen Malibu{" "}
          </h3>
          <p className="font-bold text-3xl">Book Your Table </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
