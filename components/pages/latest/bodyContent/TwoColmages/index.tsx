import css from "@styled-system/css";
import Image from "next/image";
import Container from "@components/common/layout/container";
import Text from "@components/common/typography";
import { ImageLeft, ImageRight } from "../styles";

const TwoColImage = ({ image1, image2, caption }) => {
  const myImage1 = image1?.[0];
  const myImage2 = image2?.[0];

  return (
    <div css={css({ py: 120 })}>
      <Container css={css({ bg: "#FFFFF8" })}>
        {myImage1?.url && (
          <ImageLeft>
            <Image
              alt={image1.title}
              src={image1.url}
              objectFit="cover"
              layout="intrinsic"
              width="710"
              height="820"
            />
          </ImageLeft>
        )}
        {myImage2?.url && (
          <ImageRight>
            <Image
              alt={image2.title}
              src={image2.url}
              width="710"
              height="820"
            />
          </ImageRight>
        )}
      </Container>
      <Container css={css({ bg: "#FFFFF8" })}>
        <ImageLeft css={css({ alignItems: "center", display: "flex" })}>
          <Text variant="Body-Small" css={css({ mt: 16, mr: 40 })} altFont>
            {caption}
          </Text>
        </ImageLeft>
      </Container>
    </div>
  );
};
export default TwoColImage;
