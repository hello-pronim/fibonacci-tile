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
      <FwWrapper>
        {component.heading && (
          <Text
            dangerouslySetInnerHTML={{ __html: component.heading }}
            variant="Display-Medium"
            altFont
            css={css({ mb: 65, maxWidth: "50%" })}
          />
        )}
        {component?.imageThumb?.[0]?.url && (
          <div css={css({ position: "relative" })}>
            {component?.sideText && (
              <AccentText top={0} css={css({ left: "-260px" })}>
                {component.sideText}
              </AccentText>
            )}
            <Image
              layout="responsive"
              alt={component.imageThumb[0].title}
              src={component.imageThumb[0].url}
              width={component.imageThumb[0].width}
              height={component.imageThumb[0].height}
            ></Image>
          </div>
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
