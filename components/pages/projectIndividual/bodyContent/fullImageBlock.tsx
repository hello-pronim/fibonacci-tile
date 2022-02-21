import Image from "next/image";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import Container from "@components/common/layout/container";
import { FwWrapper } from "./styles";

const FullImageBlock = ({ component, backgroundColor, pt = 60, pb = 60 }) => {
  const cssProps: any = {
    bg: backgroundColor ? backgroundColor : "#FFFFF8",
    pt,
    pb,
  };

  return (
    <Container css={css(cssProps)}>
      <FwWrapper>
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
