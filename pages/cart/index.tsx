import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ usersCart }) => {
  console.log(usersCart);

  return (
    <div className="container mt-40 mb-20">
      <h1 className="tracking-widest text-7xl font-bold text-center mb-20">
        Cart
      </h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-2xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-8 py-4">
                Product name
              </th>
              <th scope="col" className="px-8 py-4 text-center">
                PRICE
              </th>
              <th scope="col" className="px-8 py-4 text-center">
                QUANTITY
              </th>
              <th scope="col" className="px-8 py-4 text-center">
                SUBTOTAL
              </th>
              <th scope="col" className="px-8 py-4 text-center">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-8 mr-20 md:mr-0"
              >
                <Image
                  src="/img/product1.jpg"
                  className="w-32 h-32 rounded-[50%]"
                  alt=""
                  width={300}
                  height={300}
                />
                Apple MacBook Pro 17"
              </th>
              <td className="px-8 py-4 text-center ">$12.00</td>
              <td className="px-8 py-4 text-center ">1</td>
              <td className="px-8 py-4 text-center ">$12.00</td>
              <td className="px-8 py-4">
                <AiOutlineClose className="text-5xl cursor-pointer text-red-500 bg-zinc-300 w-14 h-14 rounded-[50%] p-2 mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center md:justify-between flex-wrap mt-8">
        <div className="flex items-center justify-center flex-wrap gap-4">
          <input
            type="text"
            className="w-full xs:w-96 border py-4 px-8 text-zinc-600 dark:bg-gray-700 dark:text-gray-400"
            placeholder="Coupon Code"
          />
          <button className="w-full xs:w-96 border py-4 px-8 bg-black text-zinc-400 dark:bg-gray-900 dark:text-gray-400 cursor-pointer hover:bg-zinc-500 hover:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-300 duration-300">
            APPLY COUPON
          </button>
        </div>
        <button className="w-full xs:w-96 border py-4 px-8 bg-black text-zinc-400 dark:bg-gray-900 dark:text-gray-400 cursor-pointer hover:bg-zinc-500 hover:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-300 duration-300">
          UPDATE CART{" "}
        </button>
      </div>
      <div className="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 p-12 mt-20 max-w-4xl mx-auto flex flex-col items-center gap-8 rounded-lg">
        <h3 className="text-2xl tracking-widest font-bold">CART TOTALS</h3>
        <div className="w-full mt-8">
          <div className="flex items-center justify-between border-t border-zinc-600 dark:border-zinc-300 pt-8">
            <span>Subtotal</span>
            <span className="font-bold">$12.00</span>
          </div>
          <div className="flex items-center justify-between mt-8 border-t border-zinc-600 dark:border-zinc-300 pt-8">
            <span>Total</span>
            <span className="font-bold">$12.00</span>
          </div>
        </div>
        <Link
          href="/checkout"
          className="w-full text-center rounded-lg border py-4 px-8 bg-black text-zinc-400 dark:bg-gray-900 dark:text-gray-400 cursor-pointer hover:bg-zinc-500 hover:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-300 duration-300"
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const getMeRes = await axios.get("/api/auth/me");
    const userId = getMeRes.data.data._id;
    const userToken = getMeRes.data.data.token;

    const getMyCartRes = await axios.get("/api/shopping-cart", {
      params: { userId },
      headers: {
        Authorization: `Bearer ${JSON.parse(userToken)}`,
      },
    });

    console.log(userId);

    return {
      props: {
        usersCart: getMyCartRes.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        usersCart: [],
      },
    };
  }
}

export default Cart;
