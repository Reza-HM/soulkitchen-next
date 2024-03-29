import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const Checkout = () => {
  const [expandCouponCode, setExpandCouponCode] = useState(false);
  const { cart, totalPrice } = useCart();

  return (
    <div className="container p-20">
      <h1 className="tracking-widest text-4xl sm:text-5xl lg:text-7xl font-bold text-center mb-20">
        Checkout
      </h1>
      <div className="">
        <div className="w-full bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200 flex flex-col gap-8 p-12 rounded-md">
          <span className="">Have a coupon?</span>
          <span
            className="cursor-pointer hover:text-zinc-500 duration-300"
            onClick={() => setExpandCouponCode(!expandCouponCode)}
          >
            Click here to enter your code
          </span>
        </div>
        <div
          className={`${
            expandCouponCode
              ? "max-h-[200px] h-[200px] opacity-100 visible transition-all duration-500"
              : "max-h-[0px] h-0 opacity-0 invisible transition-all duration-500"
          } mt-12 flex flex-col gap-8 `}
        >
          <h3 className="text-3xl tracking-wide">
            If you have a coupon code, please apply it below.
          </h3>
          <input
            type="text"
            className="w-full border py-4 px-8 text-zinc-600 dark:bg-gray-700 dark:text-gray-400"
            placeholder="Coupon Code"
          />
          <button className="w-full xs:w-96 border py-4 px-8 bg-black text-zinc-400 dark:bg-gray-900 dark:text-gray-400 cursor-pointer hover:bg-zinc-500 hover:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-300 duration-300">
            APPLY COUPON
          </button>
        </div>
      </div>
      <div className="flex  flex-wrap justify-between mt-16 gap-32">
        <div className="w-full md:w-1/2 md:flex-1">
          <div className="flex flex-col gap-8">
            <h2 className="font-PlayfairDisplay text-4xl font-semibold tracking-widest">
              Billing details
            </h2>
            <form
              action=""
              className="flex
            flex-col gap-8"
            >
              <div className="flex items-center flex-wrap justify-between gap-8 md:gap-20">
                <div className="flex flex-col gap-2 w-full md:w-1/2 md:flex-1">
                  <label htmlFor="" className="text-xl tracking-widest">
                    FIRST NAME *
                  </label>
                  <input
                    type="text"
                    className="py-4 px-8 text-2xl tracking-wider bg-zinc-200/50 border border-zinc-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2 md:flex-1">
                  <label htmlFor="" className="text-xl tracking-widest">
                    LAST NAME *
                  </label>
                  <input
                    type="text"
                    className="py-4 px-8 text-2xl tracking-wider bg-zinc-200/50 border border-zinc-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-xl tracking-widest">
                  COMPANY NAME (OPTIONAL)
                </label>
                <input
                  type="text"
                  className="py-4 px-8 text-2xl tracking-wider bg-zinc-200/50 border border-zinc-300 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-xl tracking-widest">
                  STREET ADDRESS *
                </label>
                <input
                  type="text"
                  className="py-4 px-8 text-2xl tracking-wider bg-zinc-200/50 border border-zinc-300 rounded-md"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  className="py-4 px-8 text-2xl tracking-wider bg-zinc-200/50 border border-zinc-300 rounded-md"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-xl tracking-widest">
                  TOWN / CITY *
                </label>
                <input
                  type="text"
                  className="py-4 px-8 text-2xl tracking-wider bg-zinc-200/50 border border-zinc-300 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-xl tracking-widest">
                  PHONE *
                </label>
                <input
                  type="text"
                  className="py-4 px-8 text-2xl tracking-wider bg-zinc-200/50 border border-zinc-300 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-xl tracking-widest">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  className="py-4 px-8 text-2xl tracking-wider bg-zinc-200/50 border border-zinc-300 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-8 w-full mt-20">
                <h2 className="font-PlayfairDisplay text-4xl font-semibold tracking-widest">
                  Additional information
                </h2>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="" className="text-xl tracking-widest">
                    ORDER NOTES (OPTIONAL)
                  </label>
                  <textarea
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    className="py-4 px-8 text-2xl tracking-wider bg-zinc-200/50 border border-zinc-300 rounded-md min-h-60"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:flex-1">
          <div className="flex flex-col gap-8">
            <h2 className="font-PlayfairDisplay text-4xl font-semibold tracking-widest">
              Your order
            </h2>
            <div className=" bg-zinc-200/50 p-12 rounded-md">
              <div className="flex flex-col gap-12">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">Product</span>
                  <span className="text-2xl font-bold">Subtotal</span>
                </div>
                {cart.map((item) => (
                  <div className="flex items-center justify-between">
                    <span className="">
                      {item.name} × {item.quantity}{" "}
                    </span>
                    <span>
                      ${(Number(item.price) * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <span className="w-full h-px bg-zinc-300 block my-12"></span>
              <div className="flex flex-col gap-12">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice().toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="">Total </span>
                  <span className="text-4xl font-bold">
                    ${totalPrice().toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="mt-20 text-2xl leading-loose tracking-wider max-w-4xl mx-auto text-center">
                Sorry, it seems that there are no available payment methods.
                Please contact us if you require assistance or wish to make
                alternate arrangements.
              </p>
              <p className="mt-20 text-xl leading-loose tracking-wider max-w-4xl mx-auto text-center">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <div className="w-full xs:w-96 float-right mt-12 text-center rounded-md border py-4 px-8 bg-black text-zinc-400 dark:bg-gray-900 dark:text-gray-400 cursor-pointer hover:bg-zinc-500 hover:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-300 duration-300">
                PLACE ORDER
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
