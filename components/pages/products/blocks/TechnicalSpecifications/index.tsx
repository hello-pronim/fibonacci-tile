import { css } from "@styled-system/css";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import Accordion from "@components/modules/accordion";
import { Container, Wrapper } from "@components/modules/accordion/styles";

interface accordionTypes {
  accentText: string;
  items: any;
  backgroundColor: string;
}

const TechnicalSpecifications = ({
  accentText,
  items,
  backgroundColor,
}: accordionTypes) => {
  const accordionItems: Array<any> = items.map((item: any) => ({
    title: item.specificationsTitle,
    content: item.specifications,
  }));
  return (
    <Container
      id="technical-specifications"
      css={css({ bg: backgroundColor ? backgroundColor : "#E2E9EC" })}
    >
      <AccentText top={154}>{accentText}</AccentText>
      <Wrapper>
        <Accordion items={accordionItems} />
      </Wrapper>
    </Container>
  );
};

export default TechnicalSpecifications;
