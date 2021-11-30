import Head from "next/head";
import Footer from "@components/common/Footer";
import ProductPage from "@components/pages/products";
import { useQuery } from "@apollo/client";
import { ProductsQuery } from "@gql/productGQL";
import NProgress from "nprogress";


const Products = () => {
  const {data, error, loading} = useQuery(ProductsQuery);
  if(loading) {
    NProgress.start();
  }else {
    NProgress.done();
  }
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductPage products={data?.entries} />
      <Footer />
    </>
  );
};

export default Products;
