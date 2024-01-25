import { useState } from "react";

const BookingForm = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleCheckboxChange = (value: string) => {
    setSelectedOption(value === selectedOption ? null : value);
  };

  return (
    <div className="container p-24 dark:text-zinc-700">
      <div className="flex flex-wrap gap-20">
        <div className="flex-1 !w-full">
          <div className="flex flex-col gap-12 neumorphic-container dark:text-zinc-700 dark:shadow-md !mt-6">
            <p className="max-w-[400px]">
              We will confirm your reservation within 24 hours via Email.
            </p>
            <h3 className="text-3xl font-bold">OPENING TIMES</h3>
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
        <div className="flex-[2] !w-full">
          <form className="flex flex-col gap-12 neumorphic-form !w-full">
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-2xl tracking-widest font-semibold dark:text-zinc-700"
              >
                YOUR NAME *
              </label>
              <input type="text" className="neumorphic-input" />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-2xl tracking-widest font-semibold dark:text-zinc-700"
              >
                YOUR EMAIL *
              </label>
              <input type="email" className="neumorphic-input" />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-2xl tracking-widest font-semibold dark:text-zinc-700"
              >
                DATE *
              </label>
              <input type="date" className="neumorphic-input" />
            </div>
            <div className="flex flex-col gap-8">
              <h3>TIME *</h3>
              <div className="flex flex-wrap items-center gap-20">
                <div className="">
                  <label htmlFor="" className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="neumorphic-checkbox"
                      value="17:00"
                      checked={selectedOption === "17:00"}
                      onChange={() => handleCheckboxChange("17:00")}
                    />
                    <span>17:00</span>
                  </label>
                </div>
                <div className="">
                  <label htmlFor="" className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="neumorphic-checkbox"
                      value="17:30"
                      checked={selectedOption === "17:30"}
                      onChange={() => handleCheckboxChange("17:30")}
                    />
                    <span>17:30</span>
                  </label>
                </div>
                <div className="">
                  <label htmlFor="" className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="neumorphic-checkbox"
                      value="18:00"
                      checked={selectedOption === "18:00"}
                      onChange={() => handleCheckboxChange("18:00")}
                    />
                    <span>18:00</span>
                  </label>
                </div>
                <div className="">
                  <label htmlFor="" className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="neumorphic-checkbox"
                      value="18:30"
                      checked={selectedOption === "18:30"}
                      onChange={() => handleCheckboxChange("18:30")}
                    />
                    <span>18:30</span>
                  </label>
                </div>
                <div className="">
                  <label htmlFor="" className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="neumorphic-checkbox"
                      value="19:00"
                      checked={selectedOption === "19:00"}
                      onChange={() => handleCheckboxChange("19:00")}
                    />
                    <span>19:00</span>
                  </label>
                </div>
                <div className="">
                  <label htmlFor="" className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="neumorphic-checkbox"
                      value="19:30"
                      checked={selectedOption === "19:30"}
                      onChange={() => handleCheckboxChange("19:30")}
                    />
                    <span>19:30</span>
                  </label>
                </div>
                <div className="">
                  <label htmlFor="" className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="neumorphic-checkbox"
                      value="20:00"
                      checked={selectedOption === "20:00"}
                      onChange={() => handleCheckboxChange("20:00")}
                    />
                    <span>20:00</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-2xl tracking-widest font-semibold dark:text-zinc-700"
              >
                NUMBER OF PEOPLE *
              </label>
              <input type="number" className="neumorphic-input" min={0} />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-2xl tracking-widest font-semibold dark:text-zinc-700"
              >
                YOUR MESSAGE *
              </label>
              <textarea className="neumorphic-input min-h-40 max-h-60"></textarea>
              <button
                type="submit"
                className="rounded-xl !w-80 !p-4 !bg-black !text-zinc-500 !font-bold tracking-widest hover:!bg-zinc-500 hover:!text-zinc-100 !duration-300"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BookingForm;
