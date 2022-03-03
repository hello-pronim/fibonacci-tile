import React from "react";
import ContentFullWidth from "./ContentFullWidth";
import HeroImageFullWidth from "./HeroImageFullWidth";
import LargeImage from "./LargeImage";
import PullQuote from "./PullQuote";
import TwoColImage from "./TwoColmages";

const Modules = new Map([
  ["heroImageFullWidth", HeroImageFullWidth],
  ["contentFullWidth", ContentFullWidth],
  ["pullQuote", PullQuote],
  ["twoColImages", TwoColImage],
  ["largeImage", LargeImage],
]);

const BodyContent = ({ pageData }) => {
  return (
    <>
      {pageData?.newsComponents?.map((component, index) => {
        const Module = Modules.get(component.typeHandle);
        if (Module === undefined) {
          return null;
        }
        return <Module key={`news-comp-${index}`} content={component} />;
      })}
    </>
  );
};

export default BodyContent;