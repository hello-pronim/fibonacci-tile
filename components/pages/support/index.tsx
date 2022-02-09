import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Hero from "@components/pages/support/components/hero";
import Sections from "@components/pages/support/components/sections";
import ContentBlock from "@components/pages/support/components/contentBlock";
import SupportModule from "@components/modules/support";
import AccordionSection from "./components/accordionSection";
import QuoteRequestForm from "./sections/forms/quoteRequestForm";
import SupportIcon from "public/assets/icons/support-icon.svg";
import SamplesIcon from "public/assets/icons/sample-icon.svg";
import QuoteIcon from "public/assets/icons/quote-icon.svg";
import EnquiryIcon from "public/assets/icons/enquiry-icon.svg";
import { HeroOverlayWrapper, FormContainer } from "./styles";

const Support = ({ pageData }) => {
  const router = useRouter();
  const { asPath } = router;
  const [activeSupport, setActiveSupport] = useState("");

  const supports = [
    {
      slug: "product-support",
      title: "Product Support",
      icon: SupportIcon,
      href: "/support#product-support",
    },
    {
      slug: "how-to-order-samples",
      title: "How to order samples",
      icon: SamplesIcon,
      href: "/support#how-to-order-samples",
    },
    {
      slug: "quote-request",
      title: "Request a quote",
      icon: QuoteIcon,
      href: "/support#quote-request",
    },
    {
      slug: "general-enquiry",
      title: "General Enquiry",
      icon: EnquiryIcon,
      href: "/support#general-enquiry",
    },
  ];

  useEffect(() => {
    const slug = asPath.split("#")[1] ?? "";
    setActiveSupport(slug);
  }, [asPath]);

  return (
    <>
      <Hero />
      <HeroOverlayWrapper>
        <SupportModule
          supports={supports}
          activeSupport={activeSupport}
          setActiveSupport={setActiveSupport}
        />
      </HeroOverlayWrapper>
      <FormContainer>
        {activeSupport === "quote-request" && <QuoteRequestForm />}
      </FormContainer>
      {pageData?.pageHeading && <Sections pageHeading={pageData.pageHeading} />}
      {pageData?.productSupportComponents?.length > 0 &&
        pageData.productSupportComponents.map((component: any) => {
          switch (component.typeHandle) {
            case "productGuide":
              return (
                <ContentBlock
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
                          link: component.rightEmphasisPdf?.url,
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
                          link: component.howToTilesGuide?.url,
                        },
                      },
                      {
                        id: "fibonacci-slabs",
                        title: component.howToSlabHeading,
                        body: component.howToSlabText,
                        button: {
                          label: component.howToSlabButton,
                          link: component.howToSlabGuide?.url,
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
                  id="faqs"
                  accentText="FAQs"
                  items={accordionItems}
                />
              );
          }
        })}
    </>
  );
};

export default Support;
