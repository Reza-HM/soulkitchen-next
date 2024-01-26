const Header = () => {
  return (
    <div className="flex justify-center items-center !h-[80vh] relative bg-[url('/img/articles.jpg')] bg-cover bg-center bg-no-repeat brightness-parent">
      <div className="flex flex-col gap-8 !z-50">
        <div className="p-4 bg-black dark:bg-zinc-700 text-white rounded-lg w-32 flex justify-center items-center text-2xl">
          EVENTS
        </div>
        <h1 className="text-white text-8xl font-PlayfairDisplay">
          Sunday Brunch is Back
        </h1>
        <span className="text-white text-2xl">JUNE 17, 2022</span>
      </div>
    </div>
  );
};
export default Header;
