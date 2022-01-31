import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { ProductQuery } from "@gql/productGQL";
import { GlobalSpecificationQuery } from "@gql/globalGQL";
import Footer from "@components/common/footer";
import ProductSinglePage from "@components/pages/products/single";

interface ProductPageProps {
  product: any;
  specifications: any;
}

const Product: NextPage<ProductPageProps> = ({ product, specifications }) => {
  const technicalSpecifications = specifications[0]?.technicalSpecifications;
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductSinglePage product={product} technicalSpecifications={technicalSpecifications} />
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const {
    data: { entry: product },
  } = await client.query({
    query: ProductQuery,
    variables: { slug: params.slug },
  });
  const {
    data: { globalSets: specifications}
  } = await client.query({
    query: GlobalSpecificationQuery
  });
  console.log("asdf", specifications)
  return {
    props: {
      product,
      specifications,
    },
    revalidate: 500,
  };
};

export default Product;
