import Image from "next/image";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import { Wrapper } from "../styles";

const LargeImage = ({content}) => {
  const {imageThumb, blurThumb, caption} = content;

  return (
    <Wrapper>
      <Image
        alt={imageThumb[0].title}
        src={imageThumb[0].url}
        placeholder="blur"
        blurDataURL={blurThumb[0].url}
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
