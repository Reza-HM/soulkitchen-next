import Description from "@/Components/Templates/ArticleDetails/Description";
import Header from "@/Components/Templates/ArticleDetails/Header";
import { useRouter } from "next/router";

const ArticleDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Header />
      <Description />
    </div>
  );
};
export default ArticleDetails;
