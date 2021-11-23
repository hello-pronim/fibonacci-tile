import { Container, Wrapper, ImageWrapper } from "./styles";
import Text from "@componentscommon/typography";
import Image from "next/image";
import SamplesImage from "public/assets/temp/samples.png";
import Button from "@components/common/button";

const ContentWithImageModule = () => {
  return (
    <Container>
      <Wrapper>
        <Text Base="h4" variant="Display-Medium">
          Samples right now
        </Text>
        <Text Base="p" variant="Body-Regular">
          Select your samples before 4pm for immediate dispatch and next working day delivery to Melbourne metropolitan and 1-2 days interstate.
          <br/> <br/>
          Remember, the more we know about your project, the better we can help you specify the perfect product, so feel free to overshare.
        </Text>
        <Button mode="" title="How to order samples" link="#" />   
      </Wrapper>
      <ImageWrapper>
        <Image alt="" src={SamplesImage} layout="responsive" width={1074} height={630}/>
      </ImageWrapper>
    </Container>
  );
};

export default ContentWithImageModule;
