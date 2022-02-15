import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Footer from "@components/common/footer";
import ProductPage from "@components/pages/products";
import { initializeApollo } from "@utils/apolloClient";
import { PageQuery } from "@gql/pageGQL";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import {
  sampleCta1Query,
  sampleCta2Query,
  customSolutionsCtaQuery,
} from "@gql/globalGQL";
import { withGlobalData } from "@hoc/withGlobalData";

interface ProductPageProps {
  pageData: any;
  collectionPageData: any;
  products: any;
  colourSchemes: any;
  productCategories: any;
  sampleCta1: any;
  sampleCta2: any;
  customSolutionsCta: any;
  notifications: Array<any>;
}

const Products: NextPage<ProductPageProps> = ({
  pageData,
  collectionPageData,
  products,
  colourSchemes,
  productCategories,
  sampleCta1,
  sampleCta2,
  customSolutionsCta,
  notifications,
}) => {
  return (
    <>
      <Head>
        <title>Terrazzo | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductPage
        pageData={pageData}
        collectionPageData={collectionPageData}
        products={products}
        colourSchemes={colourSchemes}
        productCategories={productCategories}
        cta1={sampleCta1}
        cta2={sampleCta2}
        customSolutionsCta={customSolutionsCta?.customSolutionsCTA}
        notifications={notifications}
      />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async function () {
  const client = initializeApollo();

  const {
    data: { entry: pageData },
  } = await client.query({
    query: PageQuery,
    variables: {
      slug: "terrazzo",
    },
  });

  const {
    data: { entry: collectionPageData },
  } = await client.query({
    query: PageQuery,
    variables: {
      slug: "collections",
    },
  });

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
    data: { globalSet: customSolutionsCta },
  } = await client.query({
    query: customSolutionsCtaQuery,
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
      pageData,
      collectionPageData,
      products,
      colourSchemes,
      productCategories,
      sampleCta1,
      sampleCta2,
      customSolutionsCta,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Products;
