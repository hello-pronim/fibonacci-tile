import QuoteModule from "@components/modules/quote";
import Hero from "./hero";
import FeaturedProducts from "./featuredProducts";
import React from "react";
import BodyContent from "./bodyContent";

const ProjectPage = ({ project }) => {
  // console.log("project", project)
  const { projectComponents, backgroundColor, featuredProducts } = project;
  console.log("featuredProducts", featuredProducts)
  return (
    <>
    <Hero project={project} />
    {projectComponents?.length > 0 && (
      <BodyContent backgroundColor={backgroundColor} projectComponents={ projectComponents }/>
    )}
      <FeaturedProducts products={featuredProducts}/>
      <QuoteModule source="Rebeka Morgan, Build Her Collective">
      ‘It certainly helps from a planning and ordering perspective that Fibonacci Stone carry so much stock.’
      </QuoteModule>
    </>
  );
};
export default ProjectPage;
