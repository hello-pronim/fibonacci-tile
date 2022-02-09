import Image from "next/image";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import Container from "@components/common/layout/container";
import { FwWrapper } from "./styles";

const FullImageBlock = ({
  component,
  backgroundColor,
  hasPadding = false,
  hasBottomPadding = false,
}) => {
  const cssProps: any = {
    bg: backgroundColor ? backgroundColor : "#FFFFF8",
  };
  if (hasPadding) {
    cssProps.py = 120;
  }
  if (hasBottomPadding) {
    cssProps.pb = 120;
  }

  return (
    <Container css={css(cssProps)}>
      <FwWrapper>
        {component?.imageThumb?.[0]?.url > 0 && (
          <Image
            layout="responsive"
            alt={component.imageThumb[0].title}
            src={component.imageThumb[0].url}
            width={component.imageThumb[0].width}
            height={component.imageThumb[0].height}
          />
        )}
        {component.imageCaption && (
          <Text
            variant="Body-XSmall"
            css={css({ mt: 16 })}
            dangerouslySetInnerHTML={{ __html: component.imageCaption }}
          />
        )}
      </FwWrapper>
    </Container>
  );
};
export default FullImageBlock;
