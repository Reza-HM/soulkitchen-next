import Link from "next/link";
import { BiPhone } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="">
      <div className="w-full mt-40 bg-[#8fa2a0] !text-white">
        <div className="container p-20">
          <div className="grid grid-cols-12 gap-20 px-20">
            <div className="col-span-12 md:col-span-3 flex flex-col gap-8">
              <h2 className="font-PlayfairDisplay text-3xl font-semibold">
                Welcome to Soul Kitchen
              </h2>
              <p>
                SOUL KITCHEN, founded in 2022, is dedicated to all those who
                love to wander far and wide.
              </p>
              <p>
                We invite you on a wholesome culinary adventure, where you’ll
                explore undiscovered gourmet experiences.
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 flex flex-col gap-16">
              <div className="flex flex-col gap-4">
                <h3 className="font-PlayfairDisplay text-3xl font-semibold">
                  Visit
                </h3>
                <p className="flex items-center gap-4 max-w-sm">
                  {" "}
                  <FaLocationDot /> 317 Pacific C Hwy Huntington, CA 92648
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-PlayfairDisplay text-3xl font-semibold">
                  Talk
                </h3>
                <p className="flex items-center gap-4">
                  <BiPhone /> 123.456-7
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-PlayfairDisplay text-3xl font-semibold">
                  Write
                </h3>
                <p className="flex items-center gap-4">
                  {" "}
                  <MdEmail /> eat@soulkitchen.com
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                <h2 className="font-PlayfairDisplay text-3xl font-semibold">
                  Reservations
                </h2>
                <Link
                  href="/booking"
                  className="flex justify-center items-center text-2xl tracking-widest !font-bold py-4 px-12 w-96 cursor-pointer border-2 !border-white hover:bg-white hover:text-zinc-500 hover:!border-white duration-300"
                >
                  BOOK YOUR TABLE
                </Link>
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="font-PlayfairDisplay text-3xl font-semibold">
                  Hours
                </h2>
                <div className="">
                  <p className="text-2xl">MONDAY thru FRIDAY</p>
                  <span className="text-2xl">11am - 9pm</span>
                </div>
                <div className="">
                  <p className="text-2xl">SATURDAY/SUNDAY</p>
                  <span className="text-2xl">10am - 11pm</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 flex flex-col gap-12">
              <h2 className="font-PlayfairDisplay text-3xl font-semibold">
                About
              </h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>Reservation Policy</li>
                <li>Privacy Policy</li>
                <li>Health & Safety</li>
              </ul>
              <h2 className="font-PlayfairDisplay text-3xl font-semibold">
                Follow Along
              </h2>
              <div className="flex items-center gap-8">
                <FaInstagram className="text-4xl" />
                <FaFacebook className="text-4xl" />
                <FaTwitter className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cyan-950 text-white p-8 flex justify-between items-center">
        <p className="text-xl w-full md:w-1/3 md:flex-1 text-start">
          © 2023 SOULKITCHEN. ALL RIGHTS RESERVED.
        </p>
        <h1 className="text-4xl w-full md:w-1/3 md:flex-1 text-center">
          SOUL K/TCHEN
        </h1>
        <div className="text-xl w-full md:w-1/3 md:flex-1 text-end">
          TASTE THE DIFFERENCE
        </div>
      </div>
    </div>
  );
};
export default Footer;
