import { Container, Wrapper, ImageWrapper } from "./styles";
import Image from "next/image";
import SamplesImage from "public/assets/temp/product-guide.jpg";
import AccentText from "@components/common/accentText";
import ArrowButton from "@components/common/button/arrowButton";
import Text from "@components/common/typography";
import css from '@styled-system/css';
import theme from "@styles/theme";

const ContentWithImageModule = ({content}) => {
  const {mode, title, body, image, buttonTitle, link, orientation} = content;
  
  return (
    <Container mode={mode} orientation={orientation}>
      <Wrapper>
        <AccentText top={80}>FAQs</AccentText>
{title &&        <Text as="h4" variant="Display-Small">
          {title}
        </Text>}
        {body && <Text as="p" variant="Body-Regular" dangerouslySetInnerHTML={{ __html: body }}/>}
        {buttonTitle && <ArrowButton mode="" title="Download our product guide" link={link} />}
      </Wrapper>
      <ImageWrapper>
        {image && <Image
          alt=""
          src={image.src}
          layout="responsive"
          width={image.width}
          height={image.height}
        />}
      </ImageWrapper>
    </Container>
  );
};

export default ContentWithImageModule;
