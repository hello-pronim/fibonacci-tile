import Image from "next/image";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import Container from "@components/common/layout/container";
import AccentText from "@components/common/accentText";
import { FwWrapper } from "./styles";

const HeroBlock = ({ component, backgroundColor, pt = 60, pb = 60 }) => {
  const cssProps: any = {
    position: "relative",
    bg: backgroundColor ? backgroundColor : "#FFFFF8",
    pt,
    pb,
  };
  return (
    <Container css={css(cssProps)}>
      {component?.sideText && (
        <AccentText
          top={0}
          css={css({ top: pt + (component.heading ? 174 : 0) })}
        >
          {component.sideText}
        </AccentText>
      )}
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
          <Image
            layout="responsive"
            placeholder="blur"
            blurDataURL={component.blurThumb[0].url}
            alt={component.imageThumb[0].title}
            src={component.imageThumb[0].url}
            width={component.imageThumb[0].width}
            height={component.imageThumb[0].height}
          />
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
