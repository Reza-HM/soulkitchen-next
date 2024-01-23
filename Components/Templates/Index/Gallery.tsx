import Image from "next/image";

const Gallery = () => {
  return (
    <div className="container px-0 mt-40">
      <div className="flex justify-center items-center gap-2">
        <div className="w-full md:w-1/3 md:flex-1 flex flex-col gap-2">
          <Image
            alt="gallery photo 1"
            src="/img/gallery1.jpg"
            width={800}
            height={800}
          />
          <div className="flex justify-between items-center gap-2">
            <Image
              alt=""
              className="flex-1"
              src="/img/gallery2.jpg"
              width={200}
              height={200}
            />
            <Image
              alt=""
              className="flex-1"
              src="/img/gallery3.jpg"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 md:flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <Image
              alt=""
              className="flex-1"
              src="/img/gallery5.jpg"
              width={200}
              height={200}
            />
            <Image
              alt=""
              className="flex-1"
              src="/img/gallery6.jpg"
              width={200}
              height={200}
            />
          </div>
          <Image
            alt=""
            src="/img/gallery4.jpg"
            width={800}
            height={800}
            className="!h-[900px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
