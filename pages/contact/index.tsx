import ContactForm from "@/Components/Templates/Contact/ContactForm";
import Enquiries from "@/Components/Templates/Contact/Enquiries";
import Header from "@/Components/Templates/Contact/Header";
import { BsCalendarDate } from "react-icons/bs";
import { IoCarOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import Home from "..";

const Contact = () => {
  return (
    <div className="">
      <Header />
      <Enquiries />
      <ContactForm />
      <div className="container my-32">
        <div className="grid grid-cols-12 items-center gap-12">
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-col items-center gap-12 animate-fade-right">
              <BsCalendarDate className="text-7xl text-zinc-500" />
              <h3 className="font-PlayfairDisplay text-3xl tracking-widest font-bold">
                Reservations
              </h3>
              <span>Are highly recommended</span>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-col items-center gap-12 animate-fade-right">
              <IoCarOutline className="text-7xl text-zinc-500" />
              <h3 className="font-PlayfairDisplay text-3xl tracking-widest font-bold">
                Parking
              </h3>
              <span>Valet Parking is available</span>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-col items-center gap-12 animate-fade-left">
              <BsPeople className="text-7xl text-zinc-500" />
              <h3 className="font-PlayfairDisplay text-3xl tracking-widest font-bold">
                Dress Attire
              </h3>
              <span>Smart casual</span>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-col items-center gap-12 animate-fade-left">
              <FaLeaf className="text-7xl text-zinc-500" />
              <h3 className="font-PlayfairDisplay text-3xl tracking-widest font-bold">
                Vegetarian
              </h3>
              <span>Vegetarian on request</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
