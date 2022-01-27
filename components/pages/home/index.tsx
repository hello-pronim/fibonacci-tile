import QuoteModule from "@components/modules/quote";
import SupportModule from "@components/modules/support";
import ContentWithImageModule from "@components/modules/contentWithImage";
import SocialModule from "@components/modules/social";
import DualColumnModule from "@components/modules/dualColumn";
import React from "react";
import Hero from "@components/pages/home/components/hero";
import ProductCarousel from "./components/productCarousel";
import InlineSlider from "./components/inlineSlider";
import { css } from "@styled-system/css";

const Homepage = () => {
  return (
    <>
      <Hero />
      <ProductCarousel></ProductCarousel>
      <ContentWithImageModule></ContentWithImageModule>
      <DualColumnModule />
      <SupportModule title="HOW CAN WE HELP?" />
      <InlineSlider></InlineSlider>
      <SocialModule></SocialModule>
      <QuoteModule source="Rebeka Morgan, Build Her Collective">
        ‘It certainly helps from a planning and ordering perspective that
        Fibonacci carry so much stock.’
      </QuoteModule>
    </>
  );
};
export default Homepage;
