import { useState } from "react";

const Checkout = () => {
  const [expandCouponCode, setExpandCouponCode] = useState(false);
  return (
    <div className="container p-20">
      <h1 className="tracking-widest text-7xl font-bold text-center mb-20">
        Cart
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
        <div className="">d</div>
      </div>
    </div>
  );
};
export default Checkout;
