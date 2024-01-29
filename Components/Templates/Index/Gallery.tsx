import Image from "next/image";

const Gallery = () => {
  return (
    <div className="container px-0 mt-40">
      <div className="flex justify-center flex-wrap gap-2">
        <div className="w-full md:w-1/3 md:flex-1 flex flex-col gap-2">
          <div className="group relative cursor-pointer">
            <Image
              alt="gallery photo 1"
              src="/img/gallery1.jpg"
              width={800}
              height={800}
              className="group-hover:brightness-50 duration-300"
            />
            <p className="absolute text-center inset-[50%] -translate-x-1/2 -translate-y-1/2 w-96 tracking-widest text-2xl text-white hidden group-hover:block">
              SPICED POACHED PEARS
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="group relative cursor-pointer flex-1">
              <Image
                alt=""
                className="flex-1 group-hover:brightness-50 duration-300"
                src="/img/gallery2.jpg"
                width={400}
                height={400}
              />
              <p className="absolute text-center inset-[50%] -translate-x-1/2 -translate-y-1/2 w-96 tracking-widest text-2xl text-white hidden group-hover:block">
                VEGAN PRALINES
              </p>
            </div>
            <div className="group relative cursor-pointer flex-1">
              <Image
                alt=""
                className="flex-1 group-hover:brightness-50 duration-300"
                src="/img/gallery3.jpg"
                width={400}
                height={400}
              />
              <p className="absolute text-center inset-[50%] -translate-x-1/2 -translate-y-1/2 w-96 tracking-widest text-2xl text-white hidden group-hover:block">
                COCONUT PARFAIT WITH BERRY SAUCE
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="group relative cursor-pointer flex-1">
              <Image
                alt=""
                className="flex-1 group-hover:brightness-50 duration-300"
                src="/img/gallery5.jpg"
                width={400}
                height={400}
              />
              <p className="absolute text-center inset-[50%] -translate-x-1/2 -translate-y-1/2 w-96 tracking-widest text-2xl text-white hidden group-hover:block">
                LEMON PARFAIT
              </p>
            </div>
            <div className="group relative cursor-pointer flex-1">
              <Image
                alt=""
                className="flex-1 group-hover:brightness-50 duration-300"
                src="/img/gallery6.jpg"
                width={400}
                height={400}
              />
              <p className="absolute text-center inset-[50%] -translate-x-1/2 -translate-y-1/2 w-96 tracking-widest text-2xl text-white hidden group-hover:block">
                SPRING SALAD
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer flex-1">
            <Image
              alt=""
              src="/img/gallery4.jpg"
              width={800}
              height={800}
              className="!h-auto md:!h-[450px] lg:!h-[600px] xl:!h-[745px] 2xl:!h-[842px] flex-1 group-hover:brightness-50 duration-300"
            />
            <p className="absolute text-center inset-[50%] -translate-x-1/2 -translate-y-1/2 w-96 tracking-widest text-2xl text-white hidden group-hover:block">
              SCALLOPS WITH ORANGE BUTTER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
