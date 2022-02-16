import { useRouter } from "next/router";
import Hero from "@components/pages/support/components/hero";
import SupportModule from "@components/modules/support";
import QuoteRequestForm from "./sections/forms/quoteRequestForm";
import { supports } from "./constants";
import { HeroOverlayWrapper, FormContainer } from "./styles";

const RequestQuote = ({ pageData, products }) => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <>
      <Hero pageTitle={pageData.pageHeading} />
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
