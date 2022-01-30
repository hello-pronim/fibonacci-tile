import QuoteModule from "@components/modules/quote";
import Hero from "./hero";
import FeaturedProducts from "./featuredProducts";
import React from "react";
import BodyContent from "./bodyContent";

const ProjectPage = () => {
  return (
    <>
    <Hero></Hero>
    <BodyContent/>
    <FeaturedProducts/>
      <QuoteModule source="Rebeka Morgan, Build Her Collective">
      ‘It certainly helps from a planning and ordering perspective that Fibonacci Stone carry so much stock.’
      </QuoteModule>
    </>
  );
};
export default ProjectPage;
