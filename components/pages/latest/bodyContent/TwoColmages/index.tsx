import css from "@styled-system/css";
import Image from "next/image";
import Container from "@components/common/layout/container";
import Text from "@components/common/typography";
import { ImageLeft, ImageRight } from "../styles";

const TwoColImage = ({ content, index }) => {
  const { image1Thumb, image2Thumb, blurThumb1, blurThumb2, caption } = content;
  return (
    <div css={css({ bg: "#FFFFF8" })}>
      <Container>
        {image1Thumb[0]?.url && (
          <ImageLeft>
            <Image
              alt={image1Thumb[0]?.title}
              src={image1Thumb[0]?.url}
              placeholder="blur"
              blurDataURL={blurThumb1[0]?.url}
              objectFit="cover"
              layout="intrinsic"
              width={image1Thumb[0]?.width}
              height={image1Thumb[0]?.height}
            />
          </ImageLeft>
        )}
        {image2Thumb[0]?.url && (
          <ImageRight>
            <Image
              alt={image2Thumb[0]?.title}
              src={image2Thumb[0]?.url}
              placeholder="blur"
              blurDataURL={blurThumb2[0]?.url}
              objectFit="cover"
              layout="intrinsic"
              width={image2Thumb[0]?.width}
              height={image2Thumb[0]?.height}
            />
          </ImageRight>
        )}
      </Container>
      {caption && (
        <Container css={css({ bg: "#FFFFF8" })}>
          <ImageLeft css={css({ alignItems: "center", display: "flex" })}>
            <Text variant="Body-Small" css={css({ mt: 16, mr: 40 })} altFont>
              {caption}
            </Text>
          </ImageLeft>
        </Container>
      )}
    </div>
  );
};
export default TwoColImage;
