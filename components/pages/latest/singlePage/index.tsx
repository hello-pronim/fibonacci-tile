import BodyContent from "../bodyContent";
import SingleHero from "./single-hero";
import ArticleWayfinder from "./ArticleWayfinder";

const SinglePage = ({ pageData }) => {
  return (
    <>
      <SingleHero pageData={pageData} />
      <BodyContent pageData={pageData} />
      <ArticleWayfinder content={pageData} />
    </>
  );
};
export default SinglePage;
