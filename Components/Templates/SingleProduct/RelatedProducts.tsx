import ProductBox from "@/Components/Modules/ProductBox";

const RelatedProducts = () => {
  return (
    <div className="mt-40 mb-20">
      <h2 className="underline underline-offset-8 text-2xl font-bold tracking-widest text-center">
        DESCRIPTION
      </h2>
      <div className="mt-8 grid grid-cols-12 gap-8 items-center">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </div>
  );
};
export default RelatedProducts;
