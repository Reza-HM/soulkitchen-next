const Header = () => {
  return (
    <div className="flex items-center justify-between gap-8 !z-40">
      <div className="flex-1 relative w-full md:w-1/3 bg-[url('/img/headerImg-1.jpg')] bg-cover bg-center bg-no-repeat h-screen">
        <div className="absolute bottom-0 mx-auto">
          <h3 className="font-PlayfairDisplay_Italic ">Lunch Special</h3>
          <p>See Menu</p>
        </div>
      </div>
      <div className="flex-1 w-full md:w-1/3 h-screen">
        <video
          muted
          loop
          playsInline
          autoPlay
          src="/img/header-video.mp4"
        ></video>
      </div>
      <div className="flex-1 w-full md:w-1/3 bg-[url('/img/headerImg-2.jpg')] bg-cover bg-center bg-no-repeat h-screen"></div>
    </div>
  );
};
export default Header;
