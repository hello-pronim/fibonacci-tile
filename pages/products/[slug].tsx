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
}

const Product: NextPage<ProductPageProps> = ({
  product,
  specifications,
  relatedProducts,
}) => {
  if (!product) return null;
  const technicalSpecifications = specifications[0]?.technicalSpecifications;
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
      />
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const {
    data: { entries: products },
  } = await client.query({
    query: ProductsQuery,
  });
  const paths = products.map((product: any) => ({
    params: { slug: product.slug },
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
    variables: { slug: params.slug },
  });

  const {
    data: { globalSets: specifications },
  } = await client.query({
    query: GlobalSpecificationQuery,
  });

  const catId = product?.collections[0]?.id;
  const {
    data: { entries: relatedProductResults },
  } = await client.query({
    query: ProductsQuery,
    variables: { collections: [catId] },
  });

  let relatedProducts = null;
  if (relatedProductResults.length > 0) {
    relatedProducts = relatedProductResults.filter(
      (item) => parseInt(item.id) !== parseInt(product.id)
    );
  }

  return {
    props: {
      product,
      specifications,
      relatedProducts,
    },
    revalidate: 500,
  };
};

export default Product;
