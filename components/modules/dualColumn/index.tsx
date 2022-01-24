import {
  Container,
  ImageWrapper,
  LeftCol,
  RightCol,
  Segment,
  BottomRow,
} from "./styles";
import Text from "@componentscommon/typography";
import Image from "next/image";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import InspireRight from "public/assets/temp/inspire-right.jpg";
import InspireLeft from "public/assets/temp/inspire-left.jpg";
import ArrowButton from "@components/common/button/arrowButton";
import { css } from "@styled-system/css";
import theme from "@styles/theme";

const DualColumnModule = () => {
  return (
    <Container>
      <AccentText top={160}>Get inspired</AccentText>
      <LeftCol>
        <Segment>
          <Image
            alt=""
            src={InspireLeft}
            layout="responsive"
            width={560}
            height={560}
          />
          <Text as="h6" variant="Display-Overline">
            INTUITIVE EVOCATIVE CREATIONS
          </Text>
          <Text as="h3" variant="Display-Medium">
            The Fibonacci design aesthetic creates confident, intuitive and
            evocative environments across commercial, retail, and residential
            applications.
          </Text>
        </Segment>
        <Segment>
          <Image
            alt=""
            src={InspireLeft}
            layout="responsive"
            width={560}
            height={560}
          />
          <Text as="h6" variant="Display-Overline">
            FLAWLESS STANDARDS ALWAYS
          </Text>
          <Text as="h3" variant="Display-Medium">
            Our product design optimises tonal consistency, enhances stability,
            improves scratch resistance, and eliminates risk of long-term
            shrinkage.
          </Text>
        </Segment>
      </LeftCol>
      <RightCol>
        <div>
          <AccentTextMobile css={css({ pb: 60 })}>
            Get inspired
          </AccentTextMobile>
          <Text
            as="h4"
            variant="Display-Small"
            altFont
            css={css({
              [theme.mediaQueries.medium]: {
                fontSize: 74,
              },
            })}
          >
            From design
            <br />
            to delivery.
          </Text>
        </div>
        <Segment>
          <ImageWrapper>
            <Image
              alt=""
              src={InspireRight}
              layout="responsive"
              width={1715}
              height={1221}
            />
          </ImageWrapper>
          <Text as="h6" variant="Display-Overline">
            REVOLUTIONARY PRODUCT CALIBER
          </Text>
          <Text as="h3" variant="Display-Medium">
            Fibonacci controls the chain of custody from design to manufacture,
            guaranteeing unparalleled product quality and ongoing accessible
            supply.
          </Text>
        </Segment>
        <Segment>
          <ImageWrapper>
            <Image
              alt=""
              src={InspireRight}
              layout="responsive"
              width={1715}
              height={1221}
            />
          </ImageWrapper>
          <Text as="h6" variant="Display-Overline">
            READY RIGHT NOW
          </Text>
          <Text as="h3" variant="Display-Medium">
            You don’t have to wait whilst we ‘make your order’. We continually
            replenish our inventory, diminishing our lead times. And you can
            order as many, or as few as you’d like.
          </Text>
        </Segment>
      </RightCol>
      <BottomRow>
        <Text as="h3" variant="Display-Medium">
          LIKE NO OTHER
        </Text>
        <ArrowButton mode="" title="Our design process" link="#" />
      </BottomRow>
    </Container>
  );
};

export default DualColumnModule;
