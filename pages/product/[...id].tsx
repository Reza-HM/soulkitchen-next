import Header from "@/Components/Templates/SingleProduct/Header";
import Description from "@/Components/Templates/SingleProduct/Description";
import RelatedProducts from "@/Components/Templates/SingleProduct/RelatedProducts";

const SingleProduct = () => {
  return (
    <div className="container mt-20">
      <Header />
      <Description />
      <RelatedProducts />
    </div>
  );
};
export default SingleProduct;
