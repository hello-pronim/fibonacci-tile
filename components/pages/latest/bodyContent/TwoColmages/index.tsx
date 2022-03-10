import css from "@styled-system/css";
import Image from "next/image";
import Container from "@components/common/layout/container";
import Text from "@components/common/typography";
import { ImageLeft, ImageRight } from "../styles";

const TwoColImage = ({ content, index }) => {
  const { image1Thumb, image2Thumb, blurThumb1, blurThumb2, caption } = content;

  const myImage1 = image1Thumb?.[0];
  const myImage2 = image2Thumb?.[0];

  return (
    <div css={css({ py: 120, bg: "#FFFFF8" })}>
      <Container css={css({ bg: "#FFFFF8" })}>
        {myImage1?.url && (
          <ImageLeft>
            <Image
              alt={myImage1.title}
              src={myImage1.url}
              placeholder="blur"
              blurDataURL={blurThumb1.url}
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
              placeholder="blur"
              blurDataURL={blurThumb2.url}
              alt={myImage2.title}
              src={myImage2.url}
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
