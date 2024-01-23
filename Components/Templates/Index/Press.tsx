import Image from "next/image";

const Press = () => {
  return (
    <div className="container mt-60">
      <div className="relative before:absolute before:w-1 before:h-20 before:block before:!-bottom-28 before:!bg-zinc-400 flex flex-col items-center gap-">
        <h2 className="font-PlayfairDisplay font-semibold text-6xl tracking-widest">
          In The Press
        </h2>
      </div>
      <div className="grid grid-cols-10 place-items-center items-center gap-20 mt-40 dark:bg-zinc-600 p-20 rounded-xl">
        <Image
          alt="press's photo"
          src="/img/press1.png"
          width={150}
          height={150}
          className="col-span-2 cursor-pointer"
        />
        <Image
          alt="press's photo"
          src="/img/press2.png"
          width={150}
          height={150}
          className="col-span-2 cursor-pointer"
        />
        <Image
          alt="press's photo"
          src="/img/press3.png"
          width={150}
          height={150}
          className="col-span-2 cursor-pointer"
        />
        <Image
          alt="press's photo"
          src="/img/press4.png"
          width={150}
          height={150}
          className="col-span-2 cursor-pointer"
        />
        <Image
          alt="press's photo"
          src="/img/press5.png"
          width={150}
          height={150}
          className="col-span-2 cursor-pointer"
        />
        <Image
          alt="press's photo"
          src="/img/press6.png"
          width={150}
          height={150}
          className="col-span-4 cursor-pointer"
        />
        <Image
          alt="press's photo"
          src="/img/press7.png"
          width={150}
          height={150}
          className="col-span-2 cursor-pointer"
        />
        <Image
          alt="press's photo"
          src="/img/press8.png"
          width={150}
          height={150}
          className="col-span-4 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Press;
