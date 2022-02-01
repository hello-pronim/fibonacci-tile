import React, { useEffect, useState, useRef } from "react";
import RelatedProducts from "./blocks/relatedProducts";
import ProductsHeader from "./Header";
import InlineSlider from "./blocks/inlineSlider";
import Projects from "./blocks/projects";
import AccordionModule from "@components/modules/accordion";
import SingleHeroModule from "./blocks/singleHero";
import Abstrakt from "public/tmp/prod/abstrakt.jpeg";
import ActThree from "public/tmp/prod/actThree.jpeg";
import Assemblage from "public/tmp/prod/assemblage.jpeg";
import Bloc from "public/tmp/prod/bloc.jpeg";
import Brackish from "public/tmp/prod/brackish.jpeg";

const ProductPage = ({ product }) => {
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
  ];

  return (
    <>
      <ProductsHeader mode="dark" />
      <SingleHeroModule product={product} />
      <Projects product={product} accentText="Fibonacci Live" />
      {product?.gallery?.length > 0 && (<InlineSlider images={product.gallery} />)}
      <AccordionModule accentText="Technical Specifications" />
      <RelatedProducts title="More in our Terrazzo range" products={products} />
    </>
  );
};

export default ProductPage;
