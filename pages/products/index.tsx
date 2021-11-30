import Head from "next/head";
import Footer from "@components/common/Footer";
import ProductPage from "@components/pages/products";
import { useQuery } from "@apollo/client";
import { useAppContext } from "@contexts/AppContext";
import { ProductsQuery } from "@gql/productGQL";

const Products = () => {
  const {data, error, loading} = useQuery(ProductsQuery);
  const { state, dispatch } = useAppContext();
  if(loading) {
   console.log("fetching data ...")
  }else {
    console.log("Success....")
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
