import {
  LeftCol,
  RightCol,
  ContentWrapper,
  Container,
  HeroWrapper,
  HeroTitle,
  HeroBodyText,
} from "./styles";

const Hero = ({ headingLeft, textRight }) => {
  return (
    <HeroWrapper>
      <Container>
        <LeftCol>
          <ContentWrapper>
            <HeroTitle as="h1" variant="Display-Large">
              {headingLeft}
            </HeroTitle>
          </ContentWrapper>
        </LeftCol>
        <RightCol>
          <HeroBodyText as="h4" variant="Display-Medium">
            {textRight}
          </HeroBodyText>
        </RightCol>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
