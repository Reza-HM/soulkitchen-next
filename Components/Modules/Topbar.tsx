import { BiPhone } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="w-full py-4 px-8 bg-zinc-800 text-zinc-400 text-2xl">
      <div className="flex justify-center lg:justify-between flex-wrap gap-16 items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 cursor-pointer">
            <FaLocationDot className="hover:text-zinc-200 duration-300" />
            <span className="font-PlayfairDisplay hover:text-zinc-200 duration-300">
              317 Pacific C Hwy, Huntington, CA 92648
            </span>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <BiPhone className="hover:text-zinc-200 duration-300" />
            <span className="font-PlayfairDisplay hover:text-zinc-200 duration-300">
              123.456-7
            </span>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <MdEmail className="hover:text-zinc-200 duration-300" />
            <span className="font-PlayfairDisplay hover:text-zinc-200 duration-300">
              eat@soulkitchen.com
            </span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <FaFacebook className="hover:text-zinc-200 duration-300 cursor-pointer" />
          <FaTwitter className="hover:text-zinc-200 duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-zinc-200 duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default Topbar;
