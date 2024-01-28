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
  const [yScrollPoint, setYScrollPoint] = useState<number>(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setYScrollPoint(scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [yScrollPoint]);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const newIsDarkMode = document.documentElement.classList.contains("dark");
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newIsDarkMode));
  };

  const [isDrawerMenuOpened, setIsDrawerMenuOpened] = useState(false);
  return (
    <div className="sticky top-0  bg-white w-full p-8 shadow-xl !z-50 dark:bg-zinc-900">
      <div className="flex justify-center md:justify-between flex-wrap gap-12 lg:gap-0 items-center">
        <div className="flex items-center gap-4">
          <div
            className="lg:w-56 cursor-pointer"
            onClick={() => setIsDrawerMenuOpened(true)}
          >
            <RxHamburgerMenu className="text-6xl" />
          </div>
          <div
            className="cursor-pointer ml-8 lg:ml-0"
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
          <Link href="/">
            <Image
              alt="Header's Logo"
              src="/img/header-logo.png"
              width={250}
              height={250}
              className="dark:hidden w-[150px] xs:w-[200px] sm:w-[250px] md:w-[300px] lg:w-auto"
            />
          </Link>

          <Link href="/">
            <h1 className="hidden dark:block dark:text-white font-Poppins_Black text-3xl md:text-5xl tracking-widest">
              SOUL K/TCHEN
            </h1>
          </Link>
        </div>
        <Link
          href="/booking"
          className="hidden lg:flex justify-center items-center tracking-widest !font-bold py-2 px-8 cursor-pointer border-2 !border-black dark:!border-gray-400 hover:bg-gray-400 hover:text-white hover:!border-gray-400 duration-300"
        >
          BOOK YOUR TABLE
        </Link>
      </div>
      <div
        className={`fixed ${
          isDrawerMenuOpened ? "left-0" : "left-[-40rem]"
        } top-0 ${
          yScrollPoint > 45.599998474121094 ? "lg:top-0" : "lg:top-16"
        } w-full xs:w-[300px] overflow-y-scroll min-h-screen dark:bg-zinc-900 dark:text-white transition-[left] duration-700 bg-white p-8 flex flex-col gap-20 !z-50`}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-Poppins_Black text-3xl">Menu</h1>
          <AiOutlineClose
            className="text-4xl cursor-pointer"
            onClick={() => setIsDrawerMenuOpened(false)}
          />
        </div>

        <ul className="flex flex-col gap-8 divide-y">
          <li
            className="font-bold"
            onClick={() => setIsDrawerMenuOpened(false)}
          >
            <Link href="/">HOME</Link>
          </li>
          <li
            className="pt-8 font-bold"
            onClick={() => setIsDrawerMenuOpened(false)}
          >
            <Link href="/aboutus">ABOUT</Link>
          </li>
          <li
            className="pt-8 font-bold"
            onClick={() => setIsDrawerMenuOpened(false)}
          >
            <Link href="/team">THE TEAM</Link>
          </li>
          <li
            className="pt-8 font-bold"
            onClick={() => setIsDrawerMenuOpened(false)}
          >
            <Link href="/menu">THE MENU</Link>
          </li>
          <li
            className="pt-8 font-bold"
            onClick={() => setIsDrawerMenuOpened(false)}
          >
            <Link href="/whats_happening">WHAT’S HAPPENING</Link>
          </li>
          <li
            className="pt-8 font-bold"
            onClick={() => setIsDrawerMenuOpened(false)}
          >
            <Link href="/gallery">GALLERY</Link>
          </li>
          <li
            className="pt-8 font-bold"
            onClick={() => setIsDrawerMenuOpened(false)}
          >
            <Link href="/faq">FAQ</Link>
          </li>
          <li
            className="pt-8 font-bold"
            onClick={() => setIsDrawerMenuOpened(false)}
          >
            <Link href="/shop">SHOP</Link>
          </li>
          <li
            className="pt-8 font-bold"
            onClick={() => setIsDrawerMenuOpened(false)}
          >
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
