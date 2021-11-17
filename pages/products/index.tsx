import Head from "next/head";
import Header from "@componentscommon/header";
import TopSlider from "@components/pages/products/TopSlider";
import TextWrapper from "@components/pages/products/Text";
import ProductFilters from "@components/pages/products/ProductFilters";
import ProductLists from "@components/pages/products/ProductLists";
const Home = () => {

  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Homepage" />
        <meta
          name="robots"
          content="index, follow"
        />
      </Head>
      <Header />
      <TopSlider />
      <TextWrapper title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built."/>
      <ProductLists/>
    </>
  );
};

export default Home;
