import React from "react";
import Hero from "@components/pages/support/components/hero";
import Cards from "@components/pages/support/components/cards";
import Sections from "@components/pages/support/components/sections";
import ContentBlock from "@components/pages/support/components/contentBlock";
import { productGuide, installationGuides, careGuide} from "./components/contentBlock/constants";
import { css } from "@styled-system/css";
import AccordionSection from "./components/accordionSection";

const Homepage = () => {
  return (
    <>
    <Hero />
    <Cards/>
    <Sections />
    <ContentBlock content={productGuide}/>
    <ContentBlock content={installationGuides}/>
    <ContentBlock content={careGuide}/>
    <AccordionSection />
    </>
  );
};
export default Homepage;
