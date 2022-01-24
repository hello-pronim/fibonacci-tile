import Head from "next/head";
import Footer from "@components/common/footer";
import ProductPage from "@components/pages/products";
// import { useQuery } from "@apollo/client";
// import { ProductsQuery } from "@gql/productGQL";
// import NProgress from "nprogress";
import Abstrakt from "public/tmp/prod/abstrakt.jpeg";
import ActThree from "public/tmp/prod/actThree.jpeg";
import Assemblage from "public/tmp/prod/assemblage.jpeg";
import Bloc from "public/tmp/prod/bloc.jpeg";
import Brackish from "public/tmp/prod/brackish.jpeg";
import Carmelita from "public/tmp/prod/carmelita.jpeg";
import CloudBurst from "public/tmp/prod/cloudBurst.jpeg";
import CoolStream from "public/tmp/prod/coolStream.jpeg";

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
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "abstrakt",
      subHeading: "Complex • Robust • Diverse",
      title: "Abstrakt",
      uri: "/products/abstrakt",
      img1: Abstrakt,
    },
    {
      id: "2",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "act-three",
      subHeading: "Complex • Robust • Diverse",
      title: "Act Three",
      uri: "/products/act-three",
      img1: ActThree,
    },
    {
      id: "3",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "assemblage",
      subHeading: "Complex • Robust • Diverse",
      title: "Assemblage",
      uri: "/products/assemblage",
      img1: Assemblage,
    },
    {
      id: "4",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "bloc",
      subHeading: "Complex • Robust • Diverse",
      title: "Bloc",
      uri: "/products/bloc",
      img1: Bloc,
    },
    {
      id: "5",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "brackish",
      subHeading: "Complex • Robust • Diverse",
      title: "Brackish",
      uri: "/products/brackish",
      img1: Brackish,
    },
    {
      id: "6",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "carmelita",
      subHeading: "Complex • Robust • Diverse",
      title: "Carmelita",
      uri: "/products/carmelita",
      img1: Carmelita,
    },
    {
      id: "7",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "cloudburst",
      subHeading: "Complex • Robust • Diverse",
      title: "Cloudburst",
      uri: "/products/cloudburst",
      img1: CloudBurst,
    },
    {
      id: "8",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "coolstream",
      subHeading: "Complex • Robust • Diverse",
      title: "CoolStream",
      uri: "/products/coolstream",
      img1: CoolStream,
    },
    {
      id: "9",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "cloudburst",
      subHeading: "Complex • Robust • Diverse",
      title: "Cloudburst",
      uri: "/products/cloudburst",
      img1: CloudBurst,
    },
    {
      id: "10",
      richText:
        "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "coolstream",
      subHeading: "Complex • Robust • Diverse",
      title: "CoolStream",
      uri: "/products/coolstream",
      img1: CoolStream,
    },
  ];
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
