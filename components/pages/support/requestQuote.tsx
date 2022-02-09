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

const RequestQuote = ({ pageData }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Hero pageTitle="Request a quote" />
      <HeroOverlayWrapper>
        <SupportModule activePath={asPath} supports={supports} />
      </HeroOverlayWrapper>
      <FormContainer>
        <QuoteRequestForm />
      </FormContainer>
    </>
  );
};

export default RequestQuote;
