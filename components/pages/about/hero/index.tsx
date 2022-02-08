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
            <HeroTitle Base="h1" variant="Display-Large">
              {headingLeft}
            </HeroTitle>
          </ContentWrapper>
        </LeftCol>
        <RightCol>
          <HeroBodyText Base="h4" variant="Display-Medium">
            {textRight}
          </HeroBodyText>
        </RightCol>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
