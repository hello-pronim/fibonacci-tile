import Head from "next/head";
import Footer from "@components/common/footer";
import ProductPage from "@components/pages/products";
import { gql, useQuery } from "@apollo/client";

const CountryQuery = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;
const Products = () => {
  const { data, error, loading } = useQuery(CountryQuery);
  // console.log("data", data)
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductPage />
      <Footer />
    </>
  );
};

export default Products;
