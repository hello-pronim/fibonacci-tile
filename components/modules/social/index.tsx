import css from "@styled-system/css";
import Image from "next/image";
import Text from "@components/common/typography";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import { Container, ImageWrapper, TextWrapper } from "./styles";

const SocialModule = ({ instaFeed }) => {
  return (
    <Container>
      <AccentText top={120}>Instagram</AccentText>
      <AccentTextMobile css={css({ pb: 80, gridColumn: "1/span 6" })}>
        Instagram
      </AccentTextMobile>
      <ImageWrapper>
        {instaFeed.map((ig: any) => (
          <Image
            key={`ig-${ig.shortcode}`}
            alt={ig.description}
            src={ig.image}
            width={292}
            height={292}
            layout="fixed"
          />
        ))}
      </ImageWrapper>
      <TextWrapper>
        <Text as="p" variant="Body-Small">
          Follow us on instagram{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/fibonaccistone"
          >
            @fibonaccistone
          </a>
        </Text>
      </TextWrapper>
    </Container>
  );
};

export default SocialModule;
