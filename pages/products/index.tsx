import Head from "next/head";
import Header from "@componentscommon/header";
import TopSlider from "@components/pages/products/TopSlider";
import ProductFilters from "@components/pages/products/ProductFilters";
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
    </>
  );
};

export default Home;
