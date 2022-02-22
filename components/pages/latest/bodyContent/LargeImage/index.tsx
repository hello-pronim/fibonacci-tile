import Image from "next/image";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import { Wrapper } from "../styles";

const LargeImage = ({ image, blurThumb, caption }) => {
  return (
    <Wrapper>
      <Image
        alt={image.title}
        src={image.url}
        placeholder="blur"
        blurDataURL={blurThumb.url}
        width="1460"
        height="820"
        layout="responsive"
      />
      {caption && (
        <Text variant="Body-XSmall" css={css({ mt: 16, mr: 40 })}>
          {caption}
        </Text>
      )}
    </Wrapper>
  );
};

export default LargeImage;
