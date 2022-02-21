import QuoteModule from "@components/modules/quote";
import HeroImage from "./heroImage";
import StoryPanel from "../StoryPanel";
import MainStoryPanel from "../MainStoryPanel";

const BodyContent = ({ pageComponents }) => {
  return (
    <>
      {pageComponents?.length > 0 &&
        pageComponents.map((component: any, index: number) => {
          switch (component.typeHandle) {
            case "heroImage":
              return (
                <HeroImage key={`component-${index}`} component={component} />
              );
            case "sideBySideImage":
              break;
            case "headingLeftTextRight":
              return (
                <StoryPanel
                  key={`component-${index}`}
                  titleClassName={`story-${index}`}
                  story={{
                    accentText: component.sideText,
                    title: component.headingLeft,
                    content: component.textRight,
                  }}
                />
              );
            case "headingLeftImageRight":
              return (
                <StoryPanel
                  key={`component-${index}`}
                  story={{
                    accentText: component.sideText,
                    title: component.headingLeft,
                    content: component.textRight,
                    thumbnail: component.imageRight,
                    blurThumb: component.blurThumb,
                  }}
                />
              );
            case "featurePanel":
              return (
                <MainStoryPanel
                  key={`component-${index}`}
                  bgColor={component.panelBackgroundColor}
                  story={{
                    accentText: component.sideText,
                    title: component.heading1,
                    subtitle: component.heading2,
                    thumbnail: component.heroImage,
                    caption: component.heroImageDescription,
                    content: component.textRight,
                  }}
                />
              );
            case "quote":
              return (
                <QuoteModule
                  key={`component-${index}`}
                  source={component.subLine}
                >
                  ‘{component.heading}’
                </QuoteModule>
              );
          }
        })}
    </>
  );
};
export default BodyContent;
