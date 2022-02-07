import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Footer from "@components/common/footer";
import ProductPage from "@components/pages/products";
import client from "@utils/apolloClient";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import { sampleCta1Query, sampleCta2Query } from "@gql/globalGQL";

interface ProductPageProps {
  products: any;
  colourSchemes: any;
  productCategories: any;
  sampleCta1: any;
  sampleCta2: any
}

const Products: NextPage<ProductPageProps> = ({
  products,
  colourSchemes,
  productCategories,
  sampleCta1,
  sampleCta2
}) => {
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductPage
        products={products}
        colourSchemes={colourSchemes}
        productCategories={productCategories}
        cta1={sampleCta1}
        cta2={sampleCta2}
      />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async function () {
  const {
    data: { entries: products },
  } = await client.query({
    query: ProductsQuery,
  });

  const {
    data: { globalSet: sampleCta1 },
  } = await client.query({
    query: sampleCta1Query,
  });

  const {
    data: { globalSet: sampleCta2 },
  } = await client.query({
    query: sampleCta2Query,
  });


  const {
    data: { categories: colourSchemes },
  } = await client.query({
    query: CategoriesQuery,
    variables: {
      group: "colourSchemes",
    },
  });
  const {
    data: { categories: productCategories },
  } = await client.query({
    query: CategoriesQuery,
    variables: {
      group: "productCategories",
    },
  });
  return {
    props: {
      products,
      colourSchemes,
      productCategories,
      sampleCta1,
      sampleCta2
    },
    revalidate: 500,
  };
};

export default Products;
