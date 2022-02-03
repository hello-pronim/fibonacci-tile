import React from "react";
import Text from "@components/common/typography";
import { FwWrapper } from "./styles";
import Image from "next/image";
import ZunicaFull from "public/assets/temp/nelsons-1.jpg";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";
import AccentText from "@components/common/accentText";

const HeroBlock = ({ component, backgroundColor }) => {
  return (
    <Container css={css({ py: 120, bg: backgroundColor ? backgroundColor : "#FFFFF8" })}>
    {component?.sideText && <AccentText top={300}>{component.sideText}</AccentText>}
    <FwWrapper>
        {component.heading && 
        <Text dangerouslySetInnerHTML={{__html: component.heading}} 
        variant="Display-Medium" altFont css={css({ mb: 65 })} />
        }
        {component?.image?.length > 0 &&
        <Image
        alt=""
        src={component.image[0].url}
        layout="responsive"
        width={component.image[0].width}
        height={component.image[0].height}
        ></Image>
        }
        {component?.imageCaption && 
            <Text dangerouslySetInnerHTML={{__html: component.imageCaption}} 
            variant="Body-XSmall" css={css({ mt: 16 })} />
        }
    </FwWrapper>
    </Container>
  );
};
export default HeroBlock;
