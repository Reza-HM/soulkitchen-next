import Header from "@/Components/Templates/ArticleDetails/Header";
import { useRouter } from "next/router";

const ArticleDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Header />
    </div>
  );
};
export default ArticleDetails;
