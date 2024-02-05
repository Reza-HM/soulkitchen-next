import { FaBicycle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";
import { TbShip } from "react-icons/tb";

const Services = () => {
  return (
    <div className="container mt-32 p-20">
      <div className="flex justify-between flex-wrap gap-8">
        <div className="w-full md:flex-1 md:w-1/4 flex flex-col items-center gap-8">
          <FaBicycle className="text-6xl" />
          <h3 className="text-center text-3xl font-PlayfairDisplay font-semibold">
            We deliver to your home
          </h3>
          <p className="animate-fade-right text-center text-zinc-500 max-w-lg tracking-wide">
            Order on-demand or schedule delivery up to a week in advance.
          </p>
        </div>
        <div className="w-full md:flex-1 md:w-1/4 flex flex-col items-center gap-8">
          <CiHeart className="text-6xl" />
          <h3 className="text-center text-3xl font-PlayfairDisplay font-semibold">
            Made with love
          </h3>
          <p className="animate-fade-right text-center text-zinc-500 max-w-lg tracking-wide">
            Taste the difference.
          </p>
        </div>
        <div className="w-full md:flex-1 md:w-1/4 flex flex-col items-center gap-8">
          <PiPlantLight className="text-6xl" />
          <h3 className="text-center text-3xl font-PlayfairDisplay font-semibold">
            From farm to fork
          </h3>
          <p className="animate-fade-right text-center text-zinc-500 max-w-lg tracking-wide">
            An exceptional meal experience starts with only the best
            ingredients.
          </p>
        </div>
        <div className="w-full md:flex-1 md:w-1/4 flex flex-col items-center gap-8">
          <TbShip className="text-6xl" />
          <h3 className="text-center text-3xl font-PlayfairDisplay font-semibold">
            High quality seafood, no less
          </h3>
          <p className="animate-fade-right text-center text-zinc-500 max-w-lg tracking-wide">
            Experience the best, seasonal seafood in your home
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
