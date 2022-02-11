import QuoteModule from "@components/modules/quote";
import React from "react";
import BodyContent from "../bodyContent";
import SingleHero from "./single-hero";

const SinglePage = ({ pageData }) => {
  return (
    <>
      <SingleHero />
      <BodyContent />
    </>
  );
};
export default SinglePage;
