import Head from "next/head";
import Footer from "@components/common/Footer";
import ProductPage from "@components/pages/products";
// import { useQuery } from "@apollo/client";
// import { ProductsQuery } from "@gql/productGQL";
// import NProgress from "nprogress";


const Products = () => {
  // const {data, error, loading} = useQuery(ProductsQuery);
  // if(loading) {
  //   NProgress.start();
  // }else {
  //   NProgress.done();
  // }
  const products = [
    {
      id: "1",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "polarity",
      subHeading: "Complex • Robust • Diverse",
      title: "Polarity",
      uri: "products/polarity"
    },
    {
      id: "2",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "polarity",
      subHeading: "Complex • Robust • Diverse",
      title: "Polarity",
      uri: "products/polarity"
    },
    {
      id: "3",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "polarity",
      subHeading: "Complex • Robust • Diverse",
      title: "Polarity",
      uri: "products/polarity"
    },
    {
      id: "4",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "polarity",
      subHeading: "Complex • Robust • Diverse",
      title: "Polarity",
      uri: "products/polarity"
    },
    {
      id: "5",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "polarity",
      subHeading: "Complex • Robust • Diverse",
      title: "Polarity",
      uri: "products/polarity"
    },
    {
      id: "6",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "polarity",
      subHeading: "Complex • Robust • Diverse",
      title: "Polarity",
      uri: "products/polarity"
    },
    {
      id: "7",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "polarity",
      subHeading: "Complex • Robust • Diverse",
      title: "Polarity",
      uri: "products/polarity"
    },
    {
      id: "8",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "polarity",
      subHeading: "Complex • Robust • Diverse",
      title: "Polarity",
      uri: "products/polarity"
    }
  ]
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductPage products={products} />
      <Footer />
    </>
  );
};

export default Products;
