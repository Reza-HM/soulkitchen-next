import Header from "@/Components/Templates/SingleProduct/Header";
import Description from "@/Components/Templates/SingleProduct/Description";
import RelatedProducts from "@/Components/Templates/SingleProduct/RelatedProducts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const SingleProduct = () => {
  const router = useRouter();
  const { shortName } = router.query;
  console.log(shortName);

  const [productData, setProductData] = useState<any>({});

  useEffect(() => {
    const fetchProductData = async () => {
      const res = await axios.get(`/api/products/${shortName}`);
      setProductData(res.data);
    };
    fetchProductData();
  }, [shortName]);

  return (
    <div className="container mt-20">
      <div className="flex flex-wrap justify-between gap-12">
        <div className="w-full md:w-1/2 md:flex-1">
          <Image
            alt="product's img"
            src={productData?.data?.img}
            width={800}
            height={800}
            className="h-[65rem] object-cover object-center"
          />
        </div>
        <div className="w-full md:w-1/2 md:flex-1">
          <div className="flex flex-col items-center p-8 gap-16 mt-20 text-zinc-600 dark:text-zinc-300">
            <h2 className="text-5xl font-bold tracking-widest">
              {productData?.data?.name}
            </h2>
            <h3 className="text-3xl ">
              ${Number(productData?.data?.price).toLocaleString()}
            </h3>
            <p className="max-w-4xl self-start">
              {productData?.data?.description}
            </p>
            <input
              type="number"
              className="w-40 p-2 rounded-lg cursor-pointer self-start border border-zinc-400 !text-zinc-600"
              min={0}
              defaultValue={0}
            />
            <button className="w-full xs:w-96 tracking-widest border self-start py-4 px-8 bg-black text-zinc-400 dark:bg-gray-900 dark:text-gray-400 cursor-pointer hover:bg-zinc-500 hover:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-300 duration-300">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="mt-40">
        <h2 className="underline underline-offset-8 text-2xl font-bold tracking-widest text-center">
          DESCRIPTION
        </h2>
        <span className="block h-px w-full bg-zinc-400/50 mt-12"></span>
        <div className="mt-40 flex flex-col gap-12 px-20">
          <p className="tracking-wider text-justify">
            {productData?.data?.description}
          </p>
          <p className="tracking-wider text-justify">
            {productData?.data?.description}
          </p>
          <ul className="list-disc ml-6">
            <li className="tracking-wider">
              shiitake frosted gingerbread bites
            </li>
            <li className="tracking-wider">miso turmeric glazed</li>
            <li className="tracking-wider">
              aubergine salted crumbled lentils
            </li>
            <li className="tracking-wider">cashew sweet potato</li>
            <li className="tracking-wider">mushroom tart cremini mushrooms</li>
          </ul>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default SingleProduct;
