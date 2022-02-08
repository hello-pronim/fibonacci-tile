import React, { useEffect, useState } from "react";
import Hero from "@components/pages/support/components/hero";
import Sections from "@components/pages/support/components/sections";
import ContentBlock from "@components/pages/support/components/contentBlock";
import {
  productGuide,
  installationGuides,
  careGuide,
} from "./components/contentBlock/constants";
import AccordionSection from "./components/accordionSection";
import { useRouter } from "next/router";
import SupportModule from "@components/modules/support";

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
      <Sections />
      <ContentBlock content={productGuide} />
      <ContentBlock content={installationGuides} />
      <ContentBlock content={careGuide} />
      <AccordionSection />
    </>
  );
};
export default Support;
