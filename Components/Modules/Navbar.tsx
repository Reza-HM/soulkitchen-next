import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isDrawerMenuOpened, setIsDrawerMenuOpened] = useState(false);
  return (
    <div className="bg-white w-full py-16 px-8">
      <div className="flex justify-between items-center">
        <div className="w-56 cursor-pointer" onClick={() => setIsDrawerMenuOpened(true)}>
          <RxHamburgerMenu className="text-6xl" />
        </div>
        <div className="">
          <Image
            alt="Header's Logo"
            src="/img/header-logo.png"
            width={250}
            height={250}
          />
        </div>
        <div className="flex justify-center items-center tracking-widest !font-bold py-2 px-8 cursor-pointer border-2 !border-black hover:bg-gray-400 hover:text-white hover:!border-gray-400 duration-300">
          BOOK YOUR TABLE
        </div>
      </div>
      <div
        className={`fixed ${
          isDrawerMenuOpened ? "left-0" : "left-[-30rem]"
        } top-16 w-[300px] overflow-y-scroll min-h-screen transition-[left] duration-300 bg-white p-8 flex flex-col gap-20`}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-Poppins_Black text-3xl">Menu</h1>
          <AiOutlineClose
            className="text-4xl cursor-pointer"
            onClick={() => setIsDrawerMenuOpened(false)}
          />
        </div>

        <ul className="flex flex-col gap-8 divide-y">
          <li className="font-bold">
            <Link href="/">HOME</Link>
          </li>
          <li className="pt-8 font-bold">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="pt-8 font-bold">
            <Link href="/team">THE TEAM</Link>
          </li>
          <li className="pt-8 font-bold">
            <div className="flex justify-between items-center">
              <span>MENUS</span>
              <FaPlus />
            </div>
            <ul className="hidden">
              <li className="">
                <Link href="/menu-blocks">MENU BLOCK EXAMPLES</Link>
              </li>
              <li className="">
                <Link href="/list&gallery">LIST MENU + GALLERY SECTIONS</Link>
              </li>
              <li className="">
                <Link href="/menu-with-tabs">MENU WITH TABS</Link>
              </li>
              <li className="">
                <Link href="/menu-with-category-image">
                  MENU WITH CATEGORY IMAGE
                </Link>
              </li>
              <li className="">
                <Link href="/menu-with-images">MENU ITEMS WITH IMAGE</Link>
              </li>
            </ul>
          </li>
          <li className="pt-8 font-bold">
            <Link href="/whats_happening">WHAT’S HAPPENING</Link>
          </li>
          <li className="pt-8 font-bold">
            <Link href="/gallery">GALLERY</Link>
          </li>
          <li className="pt-8 font-bold">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="pt-8 font-bold">
            <Link href="/shop">SHOP</Link>
          </li>
          <li className="pt-8 font-bold">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
