import Image from "next/image";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import Container from "@components/common/layout/container";
import { Wrapper } from "../styles";

const LargeImage = ({ content, index }) => {
  const { imageThumb, blurThumb, caption } = content;
  console.log(content);
  return (
    <Container css={css({ bg: "#fffff8" })}>
      <Wrapper>
        <Image
          alt={imageThumb[0].title}
          src={imageThumb[0].url}
          placeholder="blur"
          blurDataURL={blurThumb[0].url}
          width={imageThumb[0].width}
          height={imageThumb[0].height}
          layout="responsive"
        />
        {caption && (
          <div css={css({ pt: 16, mr: 40 })}>
            <Text variant="Body-XSmall">{caption}</Text>
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default LargeImage;
