import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Hero from "@components/pages/support/components/hero";
import Sections from "@components/pages/support/components/sections";
import ContentBlock from "@components/pages/support/components/contentBlock";
import SupportModule from "@components/modules/support";
import AccordionSection from "./components/accordionSection";
import QuoteRequestForm from "./sections/forms/quoteRequestForm";
import { supports } from "./constants";
import { HeroOverlayWrapper, FormContainer } from "./styles";

const Support = ({ pageData }) => {
  const router = useRouter();
  const { asPath } = router;
  const [activeSupport, setActiveSupport] = useState("");

  useEffect(() => {
    const slug = asPath.split("#")[1] ?? "";
    setActiveSupport(slug);
  }, [asPath]);

  return (
    <>
      <Hero pageTitle="Product Support" />
      <HeroOverlayWrapper>
        <SupportModule activePath={asPath} supports={supports} />
      </HeroOverlayWrapper>
      <FormContainer>
        {activeSupport === "quote-request" && <QuoteRequestForm />}
      </FormContainer>
      {pageData?.pageHeading && <Sections pageHeading={pageData.pageHeading} />}
      {pageData?.productSupportComponents?.length > 0 &&
        pageData.productSupportComponents.map(
          (component: any, index: number) => {
            switch (component.typeHandle) {
              case "productGuide":
                return (
                  <ContentBlock
                    key={`content-block-${index}`}
                    id="product-guide"
                    content={{
                      sectionTitle: "Product Guide",
                      image: component?.imageLeftThumb?.[0],
                      entries: [
                        {
                          title: component.rightHeading,
                          body: component.rightText,
                          emphasisText: component.rightEmphasisText,
                          button: {
                            label: component.rightEmphasisButton,
                            link: component.rightEmphasisPdf?.[0]?.url,
                          },
                        },
                      ],
                      mode: "light",
                      orientation: "right",
                    }}
                  />
                );
              case "installation":
                return (
                  <ContentBlock
                    key={`content-block-${index}`}
                    id="installation-guide"
                    content={{
                      sectionTitle: "Installation Guides",
                      image: component?.imageRightThumb?.[0],
                      entries: [
                        {
                          id: "fibonacci-tiles",
                          title: component.howToTilesHeading,
                          body: component.howToTilesText,
                          button: {
                            label: component.howToTilesButton,
                            link: component.howToTilesGuide?.[0]?.url,
                          },
                        },
                        {
                          id: "fibonacci-slabs",
                          title: component.howToSlabHeading,
                          body: component.howToSlabText,
                          button: {
                            label: component.howToSlabButton,
                            link: component.howToSlabGuide?.[0]?.url,
                          },
                        },
                      ],
                      mode: "dark",
                      orientation: "left",
                    }}
                  />
                );
              case "imageLeftTextRight":
                return (
                  <ContentBlock
                    key={`content-block-${index}`}
                    id="care-maintenance"
                    content={{
                      sectionTitle: "Care and Maintenance",
                      image: component?.imageLeftThumb?.[0],
                      entries: [
                        {
                          title: component.rightHeading,
                          body: component.rightText,
                          button: {
                            label: component.rightButton,
                            link: component.rightButtonLink?.url,
                          },
                        },
                      ],
                      mode: "light",
                      orientation: "right",
                    }}
                  />
                );
              case "faqs":
                const accordionItems: Array<any> = component.faqList.map(
                  (item: any) => ({
                    title: item.question,
                    content: item.text,
                  })
                );
                return (
                  <AccordionSection
                    key={`content-block-${index}`}
                    id="faqs"
                    accentText="FAQs"
                    items={accordionItems}
                  />
                );
            }
          }
        )}
    </>
  );
};

export default Support;
