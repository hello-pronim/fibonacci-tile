import QuoteModule from "@components/modules/quote";
import SupportModule from "@components/modules/support";
import ContentWithImageModule from "@components/modules/contentWithImage";
import SocialModule from "@components/modules/social";
import DualColumnModule from "@components/modules/dualColumn";
import React from "react";
import FullImageSlider from "@components/common/slider/fullImageSlider";
import TextSlider from "@components/common/slider/textSlider";
import ProductCarousel from "./components/productCarousel";
import InlineSlider from "./components/inlineSlider";

import SupportIcon from "public/assets/icons/support-icon.svg";
import SamplesIcon from "public/assets/icons/sample-icon.svg";
import QuoteIcon from "public/assets/icons/quote-icon.svg";
import EnquiryIcon from "public/assets/icons/enquiry-icon.svg";

const Homepage = ({ products }) => {
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
  return (
    <>
      <FullImageSlider /> {/* full image slider */}
      {/* <TextSlider /> text slider */}
      <ProductCarousel products={products}></ProductCarousel>
      <ContentWithImageModule></ContentWithImageModule>
      <DualColumnModule />
      <SupportModule title="HOW CAN WE HELP?" supports={supports} />
      <InlineSlider></InlineSlider>
      <SocialModule></SocialModule>
      <QuoteModule source="Rebeka Morgan, Build Her Collective">
        ‘It certainly helps from a planning and ordering perspective that
        Fibonacci carry so much stock.’
      </QuoteModule>
    </>
  );
};

export default Homepage;
