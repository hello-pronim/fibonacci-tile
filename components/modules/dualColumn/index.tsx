import Image from "next/image";
import { css } from "@styled-system/css";
import Text from "@components/common/typography";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import ArrowButton from "@components/common/button/arrowButton";
import theme from "@styles/theme";
import {
  Container,
  ImageWrapper,
  LeftCol,
  RightCol,
  Segment,
  BottomRow,
} from "./styles";

const DualColumnModule = ({ data }) => {
  return (
    <Container>
      <AccentText top={160}>{data.sideText}</AccentText>
      <LeftCol>
        <Segment>
          {data?.left1Image?.url && (
            <Image
              alt={data.left1Image.url}
              src={data.left1Image.url}
              layout="responsive"
              width={data.left1Image.width}
              height={data.left1Image.height}
            />
          )}
          <Text css={css({color: theme.colors.charcoal})} as="h6" variant="Display-Overline">
            {data.left1Caption}
          </Text>
          <Text css={css({color: theme.colors.charcoal})} as="h3" variant="Display-Medium">
            {data.left1Text}
          </Text>
        </Segment>
        <Segment>
          {data?.left2Image?.url && (
            <Image
              alt={data.left2Image.url}
              src={data.left2Image.url}
              layout="responsive"
              width={data.left2Image.width}
              height={data.left2Image.height}
            />
          )}
          <Text css={css({color: theme.colors.charcoal})} as="h6" variant="Display-Overline">
            {data.left2Caption}
          </Text>
          <Text css={css({color: theme.colors.charcoal})} as="h3" variant="Display-Medium">
            {data.left2Text}
          </Text>
        </Segment>
      </LeftCol>
      <RightCol>
        <div>
          <AccentTextMobile css={css({ pb: 60 })}>
            {data.sideText}
          </AccentTextMobile>
          <Text
            as="h4"
            variant="Display-Small"
            altFont
            css={css({
              color: theme.colors.charcoal,
              [theme.mediaQueries.medium]: {
                fontSize: 74,
              },
            })}
          >
            {data.rightText}
          </Text>
        </div>
        <Segment>
          <ImageWrapper>
            {data?.right1Image?.url && (
              <Image
                alt={data.right1Image.url}
                src={data.right1Image.url}
                layout="responsive"
                width={data.right1Image.width}
                height={data.right1Image.height}
              />
            )}
          </ImageWrapper>
          <Text css={css({color: theme.colors.charcoal})} as="h6" variant="Display-Overline">
            {data.right1Caption}
          </Text>
          <Text css={css({color: theme.colors.charcoal})} as="h3" variant="Display-Medium">
            {data.right1Text}
          </Text>
        </Segment>
        <Segment>
          <ImageWrapper>
            {data?.right2Image?.url && (
              <Image
                alt={data.right2Image.url}
                src={data.right2Image.url}
                layout="responsive"
                width={data.right2Image.width}
                height={data.right2Image.height}
              />
            )}
          </ImageWrapper>
          <Text css={css({color: theme.colors.charcoal})} as="h6" variant="Display-Overline">
            {data.right2Caption}
          </Text>
          <Text css={css({color: theme.colors.charcoal})} as="h3" variant="Display-Medium">
            {data.right2Text}
          </Text>
        </Segment>
      </RightCol>
      <BottomRow>
        <Text css={css({color: theme.colors.charcoal})} as="h3" variant="Display-Medium">
          LIKE NO OTHER
        </Text>
        <ArrowButton title="Our design process" link="/our-story" />
      </BottomRow>
    </Container>
  );
};

export default DualColumnModule;
