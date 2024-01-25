import CoHeadChef from "@/Components/Templates/Team/CoHeadChef";
import ExecutiveChef from "@/Components/Templates/Team/ExecutiveChef";
import HeadChef from "@/Components/Templates/Team/HeadChef";
import Header from "@/Components/Templates/Team/Header";
import ServiceManager from "@/Components/Templates/Team/ServiceManager";

const index = () => {
  return (
    <div>
      <Header />
      <HeadChef />
      <ExecutiveChef />
      <CoHeadChef />
      <ServiceManager />
    </div>
  );
};
export default index;
