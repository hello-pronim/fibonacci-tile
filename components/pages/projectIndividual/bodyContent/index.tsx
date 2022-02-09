import React from "react";
import HeroBlock from "./heroBlock";
import TwoColsTextBlock from "./twoColsTextBlock";
import TwoColsImageBlock from "./twoColsImageBlock";
import FullImageBlock from "./fullImageBlock";
import ImageRightTextLeft from "./imageRightTextLeft";

const BodyContent = ({ projectComponents, backgroundColor }) => {
  let hasPadding = false;
  let hasBottomPadding = false;
  return (
    <>
      {projectComponents.map((component: any, index: number) => {
        if (!hasPadding) {
          hasPadding = true;
        } else {
          hasPadding = false;
        }
        if (index === projectComponents.length - 1) {
          hasBottomPadding = true;
        }
        switch (component.typeHandle) {
          case "heroBlock":
            return (
              <HeroBlock
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                hasPadding={hasPadding}
                hasBottomPadding={hasBottomPadding}
              />
            );
          case "fullImage":
            return (
              <FullImageBlock
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                hasPadding={hasPadding}
                hasBottomPadding={hasBottomPadding}
              />
            );
          case "twoColsText":
            return (
              <TwoColsTextBlock
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                hasPadding={hasPadding}
                hasBottomPadding={hasBottomPadding}
              />
            );
          case "twoImages":
            return (
              <TwoColsImageBlock
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                hasPadding={hasPadding}
                hasBottomPadding={hasBottomPadding}
              />
            );
          case "twoColsImage":
            return (
              <ImageRightTextLeft
                key={`component${index}`}
                component={component}
                backgroundColor={backgroundColor}
                hasPadding={hasPadding}
                hasBottomPadding={hasBottomPadding}
              />
            );
        }
      })}
    </>
  );
};
export default BodyContent;
