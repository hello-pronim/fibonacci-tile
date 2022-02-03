import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { ProductQuery, ProductsQuery } from "@gql/productGQL";
import { GlobalSpecificationQuery } from "@gql/globalGQL";
import Footer from "@components/common/footer";
import ProductSinglePage from "@components/pages/products/single";

interface ProductPageProps {
  product: any;
  specifications: any;
  relatedProducts: any;
  params: any;
}

const Product: NextPage<ProductPageProps> = ({
  product,
  specifications,
  relatedProducts,
  params,
}) => {
  if (!product) return null;
  const technicalSpecifications = specifications?.technicalSpecifications.length > 0 ? specifications.technicalSpecifications : [];
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductSinglePage
        relatedProducts={relatedProducts}
        product={product}
        technicalSpecifications={technicalSpecifications}
        collectionSlug={params["collection-slug"]}
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

export const getStaticProps: GetStaticProps = async function ({ params }) {
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

  const {
    data: { entries: relatedProducts },
  } = await client.query({
    query: ProductsQuery,
    variables: {
      limit: 5,
      id: ["not", product.id],
    },
  });

  return {
    props: {
      product,
      specifications,
      relatedProducts,
      params,
    },
    revalidate: 60,
  };
};

export default Product;
