import QuoteModule from "@components/modules/quote";
import SupportModule from "@components/modules/support";
import SocialModule from "@components/modules/social";
import DualColumnModule from "@components/modules/dualColumn";
import React from "react";
import Hero from "@components/pages/home/components/hero";
import ProductCarousel from "./components/productCarousel";
import InlineSlider from "./components/inlineSlider";
import CTAPanel from "../products/blocks/CTAPanel";
import SupportIcon from "public/assets/icons/support-icon.svg";
import SamplesIcon from "public/assets/icons/sample-icon.svg";
import QuoteIcon from "public/assets/icons/quote-icon.svg";
import EnquiryIcon from "public/assets/icons/enquiry-icon.svg";

const Homepage = ({ products, cta }) => {
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
      <Hero />
      <ProductCarousel products={products}></ProductCarousel>
      {cta?.CTAFields?.length > 0 &&
        <CTAPanel data={cta.CTAFields[0]} imagePosition="left" />
      }
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
