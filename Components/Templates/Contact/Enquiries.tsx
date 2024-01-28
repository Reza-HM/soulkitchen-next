import Image from "next/image";

const Enquiries = () => {
  return (
    <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between">
      <div className="w-full md:w-1/2 md:flex-1">
        <Image
          alt="enquiries photo"
          src="/img/enq.jpg"
          className="w-full h-full object-cover object-center !flex-1"
          width={800}
          height={800}
        />
      </div>
      <div className="w-full md:w-1/2 md:flex-1 flex justify-center items-center p-8">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-6xl font-PlayfairDisplay font-bold !py-8 px-20">
            Enquiries
          </h2>
          <div className="flex flex-col items-center gap-4"></div>
          <h3 className="text-2xl font-bold tracking-widest">PR & MARKETING ENQUIRIES</h3>
          <span>Milo @ 0100 234 567</span>
          <div className="flex flex-col items-center gap-4"></div>
          <h3 className="text-2xl font-bold tracking-widest">CATERING ENQUIRIES</h3>
          <span>Jennifer @ 0100 234 577</span>
          <div className="flex flex-col items-center gap-4"></div>
          <h3 className="text-2xl font-bold tracking-widest">RESERVATIONS $ PRIVATE DINING</h3>
          <span>Gwyn @ 0100 234 173</span>
        </div>
      </div>
    </div>
  );
};
export default Enquiries;
