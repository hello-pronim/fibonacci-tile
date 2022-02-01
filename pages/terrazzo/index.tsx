import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Footer from "@components/common/footer";
import ProductPage from "@components/pages/products";
import client from "@utils/apolloClient";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";

interface ProductPageProps {
  products: any;
  colourSchemes: any;
  productCategories: any;
}

const Products: NextPage<ProductPageProps> = ({
  products,
  colourSchemes,
  productCategories,
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
    },
    revalidate: 500,
  };
};

export default Products;