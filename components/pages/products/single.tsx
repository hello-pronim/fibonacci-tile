import React, { useEffect, useState, useRef } from "react";
import RelatedProducts from "./blocks/relatedProducts";
import ProductsHeader from "./Header";
import InlineSlider from "./blocks/inlineSlider";
import Projects from "./blocks/projects";
import AccordionModule from "@components/modules/accordion";
import SingleHeroModule from "./blocks/singleHero";
// import { useQuery } from "@apollo/client";
// import { ProductsQuery } from "@gql/productGQL";
// import NProgress from "nprogress";

const ProductPage = () => {
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
    }
  ]
  
  return (
    <>
      <ProductsHeader mode="dark" />
      <SingleHeroModule />
      <Projects accentText="Fibonacci Live"/>
      <InlineSlider/>
      <AccordionModule accentText="Technical Specifications" />
      <RelatedProducts title="More in our Terrazzo range" products={products} />
    </>
  );
};
export default ProductPage;
