import Image from "next/image";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import Container from "@components/common/layout/container";
import AccentText from "@components/common/accentText";
import { FwWrapper } from "./styles";

const HeroBlock = ({
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
      {component?.sideText && (
        <AccentText top={300}>{component.sideText}</AccentText>
      )}
      <FwWrapper>
        {component.heading && (
          <Text
            dangerouslySetInnerHTML={{ __html: component.heading }}
            variant="Display-Medium"
            altFont
            css={css({ mb: 65 })}
          />
        )}
        {component?.imageThumb?.length > 0 && (
          <Image
            layout="responsive"
            alt={component.imageThumb[0].title}
            src={component.imageThumb[0].url}
            width={component.imageThumb[0].width}
            height={component.imageThumb[0].height}
          ></Image>
        )}
        {component?.imageCaption && (
          <Text
            dangerouslySetInnerHTML={{ __html: component.imageCaption }}
            variant="Body-XSmall"
            css={css({ mt: 16 })}
          />
        )}
      </FwWrapper>
    </Container>
  );
};
export default HeroBlock;
