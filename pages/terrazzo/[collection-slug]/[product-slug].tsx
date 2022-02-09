import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { initializeApollo } from "@utils/apolloClient";
import { withGlobalData } from "@hoc/withGlobalData";
import { ProductQuery, ProductsQuery } from "@gql/productGQL";
import { GlobalSpecificationQuery } from "@gql/globalGQL";
import Footer from "@components/common/footer";
import ProductSinglePage from "@components/pages/products/single";

interface ProductPageProps {
  product: any;
  relatedProducts: any;
  params: any;
  specifications: any;
  notifications: Array<any>;
}

const Product: NextPage<ProductPageProps> = ({
  product,
  relatedProducts,
  params,
  specifications,
  notifications,
}) => {
  if (!product) return null;
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductSinglePage
        relatedProducts={relatedProducts}
        product={product}
        specifications={specifications}
        collectionSlug={params["collection-slug"]}
        notifications={notifications}
      />
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { entries: products },
  } = await client.query({
    query: ProductsQuery,
  });
  const paths = products.map((product: any) => ({
    params: {
      "product-slug": product.slug,
      "collection-slug": product.collections[0].slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = withGlobalData(async function ({
  params,
}) {
  const client = initializeApollo();

  const {
    data: { entry: product },
  } = await client.query({
    query: ProductQuery,
    variables: { slug: params["product-slug"] },
  });
  const {
    data: { globalSet: specifications },
  } = await client.query({
    query: GlobalSpecificationQuery,
  });
  let relatedProducts = [];
  console.log("here", params["product-slug"], "here prod", product);
  if (product?.id) {
    const {
      data: { entries: rProducts },
    } = await client.query({
      query: ProductsQuery,
      variables: {
        limit: 5,
        id: ["not", product.id],
      },
    });
    relatedProducts = rProducts;
  }

  return {
    props: {
      product,
      specifications,
      relatedProducts,
      params,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Product;
