import { useRouter } from "next/router";

const ArticleDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Article {id}</div>;
};
export default ArticleDetails;
