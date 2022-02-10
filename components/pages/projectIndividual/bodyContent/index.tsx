import React from "react";
import HeroBlock from "./heroBlock";
import TwoColsTextBlock from "./twoColsTextBlock";
import TwoColsImageBlock from "./twoColsImageBlock";
import FullImageBlock from "./fullImageBlock";
import ImageRightTextLeft from "./imageRightTextLeft";

const BodyContent = ({ projectComponents, backgroundColor }) => {
  return (
    <>
      {projectComponents.map((component: any, index: number) => {
        switch (component.typeHandle) {
          case "heroBlock":
            return (
              <HeroBlock
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                pt={index === 0 ? 120 : 60}
                pb={index === projectComponents.length - 1 ? 120 : 60}
              />
            );
          case "fullImage":
            return (
              <FullImageBlock
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                pt={index === 0 ? 120 : 60}
                pb={index === projectComponents.length - 1 ? 120 : 60}
              />
            );
          case "twoColsText":
            return (
              <TwoColsTextBlock
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                pt={index === 0 ? 120 : 60}
                pb={index === projectComponents.length - 1 ? 120 : 60}
              />
            );
          case "twoImages":
            return (
              <TwoColsImageBlock
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                pt={index === 0 ? 120 : 60}
                pb={index === projectComponents.length - 1 ? 120 : 60}
              />
            );
          case "twoColsImage":
            return (
              <ImageRightTextLeft
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                pt={index === 0 ? 120 : 60}
                pb={index === projectComponents.length - 1 ? 120 : 60}
              />
            );
        }
      })}
    </>
  );
};
export default BodyContent;
