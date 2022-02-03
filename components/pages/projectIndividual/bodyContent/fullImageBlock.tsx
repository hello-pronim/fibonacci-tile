import React from "react";
import Text from "@components/common/typography";
import { FwWrapper } from "./styles";
import Image from "next/image";
import Bench from "public/assets/temp/bench.jpg";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const FullImageBlock = ({ component, backgroundColor }) => {
  return (
      <Container css={css({ py: 120, bg: backgroundColor ? backgroundColor : "#FFFFF8" })}>
        <FwWrapper>
          {component?.image?.length > 0 &&
          <Image
            alt="image"
            src={component.image[0].url}
            layout="responsive"
            width={component.image[0].width}
            height={component.image[0].height}
          ></Image>
          }
          {component.imageCaption &&
          <Text variant="Body-XSmall" css={css({ mt: 16 })} dangerouslySetInnerHTML={{__html: component.imageCaption}} />
          }
        </FwWrapper>
      </Container>
  );
};
export default FullImageBlock;
