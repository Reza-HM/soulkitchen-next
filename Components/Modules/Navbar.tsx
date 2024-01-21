import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { PiMoonStarsBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedDarkMode = JSON.parse(
      localStorage.getItem("darkMode") || "false"
    );
    setIsDarkMode(savedDarkMode);

    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }

    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const newIsDarkMode = document.documentElement.classList.contains("dark");
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newIsDarkMode));
  };

  const [isDrawerMenuOpened, setIsDrawerMenuOpened] = useState(false);
  return (
    <div className="fixed bg-white w-full py-16 px-8 dark:bg-zinc-900">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className="w-56 cursor-pointer"
            onClick={() => setIsDrawerMenuOpened(true)}
          >
            <RxHamburgerMenu className="text-6xl" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
          >
            {isDarkMode ? (
              <PiMoonStarsBold
                className="text-5xl transition-colors duration-500 text-zinc-900 dark:text-slate-300"
                onClick={toggleDarkMode}
              />
            ) : (
              <BsFillSunFill
                className="text-5xl transition-colors duration-500 text-slate-900 dark:text-slate-300"
                onClick={toggleDarkMode}
              />
            )}
          </div>
        </div>

        <div className="">
          <Image
            alt="Header's Logo"
            src="/img/header-logo.png"
            width={250}
            height={250}
            className="dark:hidden"
          />
          <h1 className="hidden dark:block dark:text-white font-Poppins_Black text-5xl tracking-widest">SOUL K/TCHEN</h1>
        </div>
        <div className="flex justify-center items-center tracking-widest !font-bold py-2 px-8 cursor-pointer border-2 !border-black dark:!border-gray-400 hover:bg-gray-400 hover:text-white hover:!border-gray-400 duration-300">
          BOOK YOUR TABLE
        </div>
      </div>
      <div
        className={`fixed ${
          isDrawerMenuOpened ? "left-0" : "left-[-30rem]"
        } top-16 w-[300px] overflow-y-scroll min-h-screen dark:bg-zinc-900 dark:text-white transition-[left] duration-500 bg-white p-8 flex flex-col gap-20`}
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
