import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <div className="container p-8 md:p-20 mt-4 md:mt-20">
      <div className="grid grid-cols-12 items-center gap-4 md:gap-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-[200px] xs:w-auto mx-auto">
          <div className="flex flex-col gap-8 items-center">
            <Link href="/whats_happening/1">
              <Image
                alt="event's image"
                src="/img/event1.jpg"
                width={500}
                height={500}
                className="flex-1 !w-[200px] !h-[200px] sm:!w-auto sm:!h-[auto] cursor-pointer hover:-translate-y-4 duration-300"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                EVENTS
              </Link>
            </div>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-500 text-xl mt-4"
            >
              FEBRUARY 10, 2023
            </Link>
            <Link
              href="/whats_happening/1"
              className="font-PlayfairDisplay text-4xl font-semibold"
            >
              Valentines Day at Soul Kitchen
            </Link>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-400 text-2xl pb border-b-2 border-zinc-400"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-[200px] xs:w-auto mx-auto">
          <div className="w-full flex flex-col gap-8 items-center">
            <Link href="/whats_happening/1">
              <Image
                alt="event's image"
                src="/img/events2.jpg"
                width={500}
                height={500}
                className="flex-1 !w-[200px] !h-[200px] sm:!w-auto sm:!h-[auto] cursor-pointer hover:-translate-y-4 duration-300"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                FOOD
              </Link>
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                SHOP
              </Link>
            </div>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-500 text-xl mt-4"
            >
              FEBRUARY 3, 2023
            </Link>
            <Link
              href="/whats_happening/1"
              className="font-PlayfairDisplay text-4xl font-semibold"
            >
              Soul Kitchen To Go
            </Link>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-400 text-2xl pb-1 border-b-2 border-zinc-400"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-[200px] xs:w-auto mx-auto">
          <div className="w-full flex flex-col gap-8 items-center">
            <Link href="/whats_happening/1">
              <Image
                alt="event's image"
                src="/img/events2.jpg"
                width={500}
                height={500}
                className="flex-1 !w-[200px] !h-[200px] sm:!w-auto sm:!h-[auto] cursor-pointer hover:-translate-y-4 duration-300"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                RECIPE
              </Link>
            </div>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-500 text-xl mt-4"
            >
              JANUARY 27, 2023
            </Link>
            <Link
              href="/whats_happening/1"
              className="font-PlayfairDisplay text-4xl font-semibold"
            >
              Chef Milo’s Seabass
            </Link>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-400 text-2xl pb-1 border-b-2 border-zinc-400"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-[200px] xs:w-auto mx-auto">
          <div className="w-full flex flex-col gap-8 items-center">
            <Link href="/whats_happening/1">
              <Image
                alt="event's image"
                src="/img/event1.jpg"
                width={500}
                height={500}
                className="flex-1 !w-[200px] !h-[200px] md:!w-auto md:!h-[auto] cursor-pointer hover:-translate-y-4 duration-300"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                EVENTS
              </Link>
            </div>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-500 text-xl mt-4"
            >
              FEBRUARY 10, 2023
            </Link>
            <Link
              href="/whats_happening/1"
              className="font-PlayfairDisplay text-4xl font-semibold"
            >
              Valentines Day at Soul Kitchen
            </Link>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-400 text-2xl pb border-b-2 border-zinc-400"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-[200px] xs:w-auto mx-auto">
          <div className="w-full flex flex-col gap-8 items-center">
            <Link href="/whats_happening/1">
              <Image
                alt="event's image"
                src="/img/events2.jpg"
                width={500}
                height={500}
                className="flex-1 !w-[200px] !h-[200px] sm:!w-auto sm:!h-[auto] cursor-pointer hover:-translate-y-4 duration-300"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                FOOD
              </Link>
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                SHOP
              </Link>
            </div>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-500 text-xl mt-4"
            >
              FEBRUARY 3, 2023
            </Link>
            <Link
              href="/whats_happening/1"
              className="font-PlayfairDisplay text-4xl font-semibold"
            >
              Soul Kitchen To Go
            </Link>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-400 text-2xl pb-1 border-b-2 border-zinc-400"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-[200px] xs:w-auto mx-auto">
          <div className="w-full flex flex-col gap-8 items-center">
            <Link href="/whats_happening/1">
              <Image
                alt="event's image"
                src="/img/events2.jpg"
                width={500}
                height={500}
                className="flex-1 !w-[200px] !h-[200px] sm:!w-auto sm:!h-[auto] cursor-pointer hover:-translate-y-4 duration-300"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                RECIPE
              </Link>
            </div>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-500 text-xl mt-4"
            >
              JANUARY 27, 2023
            </Link>
            <Link
              href="/whats_happening/1"
              className="font-PlayfairDisplay text-4xl font-semibold"
            >
              Chef Milo’s Seabass
            </Link>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-400 text-2xl pb-1 border-b-2 border-zinc-400"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-[200px] xs:w-auto mx-auto">
          <div className="w-full flex flex-col gap-8 items-center">
            <Link href="/whats_happening/1">
              <Image
                alt="event's image"
                src="/img/event1.jpg"
                width={500}
                height={500}
                className="flex-1 !w-[200px] !h-[200px] md:!w-auto md:!h-[auto] cursor-pointer hover:-translate-y-4 duration-300"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                EVENTS
              </Link>
            </div>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-500 text-xl mt-4"
            >
              FEBRUARY 10, 2023
            </Link>
            <Link
              href="/whats_happening/1"
              className="font-PlayfairDisplay text-4xl font-semibold"
            >
              Valentines Day at Soul Kitchen
            </Link>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-400 text-2xl pb border-b-2 border-zinc-400"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-[200px] xs:w-auto mx-auto">
          <div className="w-full flex flex-col gap-8 items-center">
            <Link href="/whats_happening/1">
              <Image
                alt="event's image"
                src="/img/events2.jpg"
                width={500}
                height={500}
                className="flex-1 !w-[200px] !h-[200px] sm:!w-auto sm:!h-[auto] cursor-pointer hover:-translate-y-4 duration-300"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                FOOD
              </Link>
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                SHOP
              </Link>
            </div>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-500 text-xl mt-4"
            >
              FEBRUARY 3, 2023
            </Link>
            <Link
              href="/whats_happening/1"
              className="font-PlayfairDisplay text-4xl font-semibold"
            >
              Soul Kitchen To Go
            </Link>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-400 text-2xl pb-1 border-b-2 border-zinc-400"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-[200px] xs:w-auto mx-auto">
          <div className="w-full flex flex-col gap-8 items-center">
            <Link href="/whats_happening/1">
              <Image
                alt="event's image"
                src="/img/events2.jpg"
                width={500}
                height={500}
                className="flex-1 !w-[200px] !h-[200px] sm:!w-auto sm:!h-[auto] cursor-pointer hover:-translate-y-4 duration-300"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/whats_happening/1"
                className="w-40 p-2 tracking-widest flex justify-center items-center text-xl bg-black text-white dark:bg-zinc-700"
              >
                RECIPE
              </Link>
            </div>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-500 text-xl mt-4"
            >
              JANUARY 27, 2023
            </Link>
            <Link
              href="/whats_happening/1"
              className="font-PlayfairDisplay text-4xl font-semibold"
            >
              Chef Milo’s Seabass
            </Link>
            <Link
              href="/whats_happening/1"
              className="tracking-widest text-zinc-400 text-2xl pb-1 border-b-2 border-zinc-400"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
