import ProductBox from "@/Components/Modules/ProductBox";
import connectToDB from "@/configs/db";
import ProductModel, { IProduct } from "@/models/Product";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { FC } from "react";

interface AllProductsProps {
  products: IProduct[];
}

const AllProducts: FC<AllProductsProps> = ({ products }) => {
  return (
    <div className="container p-20">
      <h2 className="font-bold text-3xl sm:text-5xl md:text-7xl tracking-widest text-center my-12 ">
        New Products
      </h2>
      <select className="p-8 bg-transparent">
        <option value="-1">Default Sorting</option>
        <option value="">Sort By Popularity</option>
        <option value="">Sort By Average Rating</option>
        <option value="">Sort By Latest</option>
        <option value="">Sort By Price: Low To High</option>
        <option value="">Sort By Price: High To Low</option>
      </select>
      <div className="grid grid-cols-12 gap-12 items-center">
        {products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  connectToDB();
  const products = await ProductModel.find({});

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
    revalidate: 60 * 60 * 12,
  };
};

export default AllProducts;
