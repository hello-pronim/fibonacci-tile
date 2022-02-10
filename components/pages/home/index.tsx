import React from "react";
import QuoteModule from "@components/modules/quote";
import SupportModule from "@components/modules/support";
import SocialModule from "@components/modules/social";
import DualColumnModule from "@components/modules/dualColumn";
import Hero from "@components/pages/home/components/hero";
import ProductCarousel from "./components/productCarousel";
import InlineSlider from "./components/inlineSlider";
import CTAPanel from "../products/blocks/CTAPanel";
import SupportIcon from "public/assets/icons/support-icon.svg";
import SamplesIcon from "public/assets/icons/sample-icon.svg";
import QuoteIcon from "public/assets/icons/quote-icon.svg";
import EnquiryIcon from "public/assets/icons/enquiry-icon.svg";

const Homepage = ({ pageData }) => {
  const supports = [
    {
      slug: "product-support",
      title: "Product Support",
      icon: SupportIcon,
      href: "/support",
    },
    {
      slug: "how-to-order-samples",
      title: "How to order samples",
      icon: SamplesIcon,
      href: "/ordering-samples",
    },
    {
      slug: "quote-request",
      title: "Request a quote",
      icon: QuoteIcon,
      href: "/request-quote",
    },
    {
      slug: "general-enquiry",
      title: "General Enquiry",
      icon: EnquiryIcon,
    },
  ];
  // populate banners from homePageComponents
  const banners = [];
  pageData.homePageComponents.forEach((component: any) => {
    if (
      ["bannerType1", "bannerType2", "bannerType3"].indexOf(
        component.typeHandle
      ) !== -1
    ) {
      banners.push(component);
    }
  });
  return (
    <>
      {banners.length > 0 && <Hero banners={banners} />}
      {pageData?.homePageComponents?.length > 0 &&
        pageData.homePageComponents.map((component: any) => {
          switch (component.typeHandle) {
            case "featuredProducts":
              return (
                <ProductCarousel
                  key={`component-${component.id}`}
                  products={component.products}
                ></ProductCarousel>
              );
            case "samples":
              return (
                <CTAPanel
                  key={`component-${component.id}`}
                  data={{
                    samplesImage: component.image,
                    samplesHeading: component.heading,
                    samplesIntro: component.intro,
                    samplesButton: component.button,
                  }}
                  imagePosition="left"
                />
              );
            case "beInspired":
              return (
                <DualColumnModule
                  key={`component-${component.id}`}
                  data={{
                    sideText: component.sideText,
                    left1Image: {
                      url: component?.left1ImageThumb?.[0]?.url,
                      width: component?.left1ImageThumb?.[0]?.width,
                      height: component?.left1ImageThumb?.[0]?.height,
                    },
                    left1Caption: component.left1Caption,
                    left1Text: component.left1Text,
                    left2Image: {
                      url: component?.left2ImageThumb?.[0]?.url,
                      width: component?.left2ImageThumb?.[0]?.width,
                      height: component?.left2ImageThumb?.[0]?.height,
                    },
                    left2Caption: component.left2Caption,
                    left2Text: component.left2Text,
                    right1Image: {
                      url: component?.right1ImageThumb?.[0]?.url,
                      width: component?.right1ImageThumb?.[0]?.width,
                      height: component?.right1ImageThumb?.[0]?.height,
                    },
                    right1Caption: component.right1Caption,
                    right1Text: component.right1Text,
                    rightText: component.rightText,
                    right2Image: {
                      url: component?.right2ImageThumb?.[0]?.url,
                      width: component?.right2ImageThumb?.[0]?.width,
                      height: component?.right2ImageThumb?.[0]?.height,
                    },
                    right2Caption: component.right2Caption,
                    right2Text: component.right2Text,
                  }}
                />
              );
            case "featuredProjects":
              return (
                <React.Fragment key={`component-${component.id}`}>
                  <SupportModule title="HOW CAN WE HELP?" supports={supports} />
                  <InlineSlider projects={component.projects}></InlineSlider>
                </React.Fragment>
              );
          }
        })}
      <SocialModule></SocialModule>
      <QuoteModule source="Rebeka Morgan, Build Her Collective">
        ‘It certainly helps from a planning and ordering perspective that
        Fibonacci carry so much stock.’
      </QuoteModule>
    </>
  );
};

export default Homepage;
