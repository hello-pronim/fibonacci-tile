import React from "react";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import { Container} from "./styles";
import Accordion from "./accordion";

interface accordionTypes {
  accentText: string;
}

const AccordionModule = ({ accentText }: accordionTypes) => {

  return (
    <Container id="technical-specifications">
      <AccentText top={154}>{accentText}</AccentText>
      <Accordion />
    </Container>
  );
};

export default AccordionModule;
