import React from "react";
import HeroBlock from "./heroBlock";
import TwoColsTextBlock from "./twoColsTextBlock";
import TwoColsImageBlock from "./twoColsImageBlock";
import FullImageBlock from "./fullImageBlock";
import ImageRightTextLeft from "./imageRightTextLeft";

const BodyContent = ({ projectComponents, backgroundColor }) => {
  return (
    <>
      {projectComponents.map((component, index) => {
        switch (component.__typename) {
          case "projectComponents_heroBlock_BlockType":
            return (
              <HeroBlock key={`component${index}`} component={component} backgroundColor={backgroundColor}/>
            )
          case "projectComponents_twoColsText_BlockType":
            return (
              <TwoColsTextBlock key={`component${index}`} component={component} backgroundColor={backgroundColor}/>
            )
          case "projectComponents_twoImages_BlockType":
            return (
              <TwoColsImageBlock key={`component${index}`} component={component} backgroundColor={backgroundColor}/>
            )
          case "projectComponents_fullImage_BlockType":
            return (
              <FullImageBlock key={`component${index}`} component={component} backgroundColor={backgroundColor}/>
            )
          case "projectComponents_twoColsImage_BlockType":
            return (
              <ImageRightTextLeft key={`component${index}`} component={component} backgroundColor={backgroundColor}/>
            )
        }
      })}
    </>
  );
};
export default BodyContent;
