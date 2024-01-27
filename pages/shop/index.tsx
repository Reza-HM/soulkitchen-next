import SignUp from "@/Components/Templates/Index/SignUp";
import Header from "@/Components/Templates/Shop/Header";
import NewProducts from "@/Components/Templates/Shop/NewProducts";
import Recommendation from "@/Components/Templates/Shop/Recommendation";
import Services from "@/Components/Templates/Shop/Services";

const Shop = () => {
  return (
    <div>
      <Header />
      <Services />
      <NewProducts />
      <Recommendation />
      <SignUp />
    </div>
  );
};
export default Shop;
