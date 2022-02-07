import Link from "next/link";
import Image from "next/image";
import RotatedTertiary from "public/assets/brandmarks/rotated-tertiary.svg";
import Tertiary from "public/assets/brandmarks/logo-tertiary.svg";
import SymbolWhite from "public/assets/brandmarks/symbol-secondary.svg";
import Arrow from "@components/common/icons/arrow";
import theme from "styles/theme";
import { css } from "@styled-system/css";
import {
  Container,
  FooterWrapper,
  RotatedLogo,
  SubFooterWrapper,
  FooterFlavourText,
  Segment,
  SegmentTitle,
  TextSegment,
  ItemList,
  Item,
  Signup,
  SubFooterItems,
  Symbol,
  MobileLogo,
} from "./styles";

export default function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <RotatedLogo>
          <Image
            src={RotatedTertiary}
            width="64"
            height="460"
            alt="Fibonacci"
          />
        </RotatedLogo>
        <MobileLogo>
          <Image src={Tertiary} width="287" height="40" alt="Fibonacci" />
        </MobileLogo>
        <Segment col={2} row={1} mobileRow={2}>
          <SegmentTitle>Our products</SegmentTitle>
          <ItemList>
            <Item>
              <Link href="/terrazzo">Terrazzos</Link>
            </Item>
            <Item>
              <Link href="/terrazzo/collections">Collections</Link>
            </Item>
            <Item>
              <Link href="/in-use">In use</Link>
            </Item>
            <Item>
              <Link href="/latest">Latest News</Link>
            </Item>
          </ItemList>
        </Segment>
        <Segment col={2} row={2} mobileRow={5}>
          <SegmentTitle>Tag us</SegmentTitle>
          <TextSegment>
            Use <span>#likenoother</span> and on social to tempus mi nulla
            cursus netus consequat ultrices
          </TextSegment>
        </Segment>

        <Segment col={3} row={1} mobileRow={3}>
          <SegmentTitle>Resources</SegmentTitle>
          <ItemList>
            <Item>
              <a href="#">Technical guides</a>
            </Item>
            <Item>
              <a href="#">Specifications</a>
            </Item>
            <Item>
              <a href="#">Maintenance & care guides</a>
            </Item>
            <Item>
              <a href="#">Downloads</a>
            </Item>
            <Item>
              <a href="#">FAQs</a>
            </Item>
          </ItemList>
        </Segment>
        <Segment col={3} row={2} mobileRow={6}>
          <SegmentTitle>Follow us</SegmentTitle>
          <ItemList>
            <Item>
              <a href="#">Instagram</a>
            </Item>
            <Item>
              <a href="#">Facebook</a>
            </Item>
            <Item>
              <a href="#">LinkedIn</a>
            </Item>
          </ItemList>
        </Segment>
        <Segment col={4} row={1} mobileRow={4}>
          <SegmentTitle>Samples and contact</SegmentTitle>
          <ItemList>
            <Item>
              <a href="#">Ordering Samples</a>
            </Item>
            <Item>
              <a href="#">Call 1300 342 662</a>
            </Item>
            <Item>
              <a href="#">Contact us</a>
            </Item>
          </ItemList>
        </Segment>

        <Segment col={4} row={2} mobileRow={7}>
          <SegmentTitle>Newsletter</SegmentTitle>
          <TextSegment>
            Be the first to know about season launches, exciting new products,
            and exclusive offers by joining our mailing list.
          </TextSegment>
          <Signup>
            <input type="text" placeholder="Enter your email address"></input>
            <button>
              Submit
              <Arrow color={theme.colors.white} />
            </button>
          </Signup>
        </Segment>
        <FooterFlavourText>
          <span>Like</span>
          <span>No</span>
          <span>Other</span>
        </FooterFlavourText>
      </FooterWrapper>
      <SubFooterWrapper>
        <SubFooterItems mobileOrder={1}>&#169; 2021 Fibonacci</SubFooterItems>
        <SubFooterItems
          mobileOrder={5}
          css={css({
            pt: 45,
            [theme.mediaQueries.small]: {
              pt: "initial",
            },
          })}
        >
          <Link href="#">Site Design by Traffic</Link>
        </SubFooterItems>
        <SubFooterItems mobileOrder={2}>
          <Link href="#">Terms & Conditions</Link>
        </SubFooterItems>
        <SubFooterItems mobileOrder={3}>
          <Link href="#">Privacy Policy</Link>
        </SubFooterItems>
        <SubFooterItems mobileOrder={4}>
          <Link href="#">Get Help</Link>
        </SubFooterItems>
        <Symbol>
          <Image
            src={SymbolWhite}
            width="37.25"
            height="37.25"
            alt="Fibonacci"
          />
        </Symbol>
      </SubFooterWrapper>
    </Container>
  );
}
