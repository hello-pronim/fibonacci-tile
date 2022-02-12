import QuoteModule from "@components/modules/quote";
import React from "react";
import BodyContent from "../bodyContent";
import SingleHero from "./single-hero";

const SinglePage = ({ pageData }) => {
  return (
    <>
      <SingleHero pageData={pageData} />
      <BodyContent pageData={pageData} />
    </>
  );
};
export default SinglePage;
