import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@contexts/AppContext";
import RotatedTertiary from "public/assets/brandmarks/rotated-tertiary.svg";
import Tertiary from "public/assets/brandmarks/logo-tertiary.svg";
import SymbolWhite from "public/assets/brandmarks/symbol-secondary.svg";
import FacebookIcon from "@components/icons/facebook";
import InstagramIcon from "@components/icons/instagram";
import LinkedInIcon from "@components/icons/linkedin";
import Arrow from "@components/common/icons/arrow";
import SelectionCart from "@components/common/selectionCart";
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
  SocialIconLink,
  SubFooterItems,
  Symbol,
  MobileLogo,
} from "./styles";

export default function Footer({ disableSelectionCart = false }) {
  const { state, dispatch } = useAppContext();
  const [newSelection, setNewSelection] = useState(false);
  const [newletterSubmit, setNewletterSubmit] = useState(false);
  const [selectionsCount, setSelectionsCount] = useState(0);
  const selectionsMounted = useRef(false);
  function handleNewsletterSubmit (submit) {
    setNewletterSubmit(submit)
  }
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (
      selectionsMounted.current &&
      state.selectedProducts.length > selectionsCount &&
      state.openDrawer !== true
    ) {
      dispatch({
        type: "OPEN_DRAWER",
        value: true,
      });
      setNewSelection(true);
      timerId = setTimeout(() => {
        setNewSelection(false);
        dispatch({
          type: "OPEN_DRAWER",
          value: false,
        });
      }, 4000);
    } else {
      selectionsMounted.current = true;
    }
    setSelectionsCount(state.selectedProducts.length);

    return () => {
      if (timerId) clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {" "}
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
                <Link href="/the-latest">Latest News</Link>
              </Item>
            </ItemList>
          </Segment>
          {/* <Segment col={2} row={2} mobileRow={5}>
            <SegmentTitle>Tag us</SegmentTitle>
            <TextSegment>
              Use <span>#likenoother</span> and on social to tempus mi nulla
              cursus netus consequat ultrices
            </TextSegment>
          </Segment> */}

          <Segment col={3} row={1} mobileRow={3}>
            <SegmentTitle>Resources</SegmentTitle>
            <ItemList>
              <Item>
                <Link href="/support#product-guide">Product Guide</Link>
              </Item>
              <Item>
                <Link href="/support#installation-guide">
                  Installation Guides
                </Link>
              </Item>
              <Item>
                <Link href="/support#care-maintenance">
                  Care and Maintenance
                </Link>
              </Item>
              {/* <Item>
                <a href="#">Downloads</a>
              </Item>
              <Item>
                <a href="#">FAQs</a>
              </Item> */}
            </ItemList>
          </Segment>
          <Segment col={3} row={2} mobileRow={6}>
            <SegmentTitle>Follow us</SegmentTitle>
            <ItemList>
              <Item>
                <SocialIconLink
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/fibonaccistone/"
                >
                  <InstagramIcon />
                  Instagram
                </SocialIconLink>
              </Item>
              <Item>
                <SocialIconLink
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/FibonacciStone/"
                >
                  <FacebookIcon />
                  Facebook
                </SocialIconLink>
              </Item>
              <Item>
                <SocialIconLink
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/fibonacci-stone/"
                >
                  <LinkedInIcon />
                  LinkedIn
                </SocialIconLink>
              </Item>
            </ItemList>
          </Segment>
          <Segment col={4} row={1} mobileRow={4}>
            <SegmentTitle>Samples and contact</SegmentTitle>
            <ItemList>
              <Item>
                <Link href="/ordering-samples">Ordering Samples</Link>
              </Item>
              <Item>
                <a href="tel:1300342662">Call 1300 342 662</a>
              </Item>
              <Item>
                <Link href="/support">Contact us</Link>
              </Item>
            </ItemList>
          </Segment>

          <Segment col={4} row={2} mobileRow={7}>
            <SegmentTitle>Newsletter</SegmentTitle>
            <TextSegment>
              Be the first to know about season launches, exciting new products,
              and exclusive offers by joining our mailing list.
            </TextSegment>
            <Signup action="/thank-you">
              <input type="text" placeholder="Enter your email address"></input>
              {!newletterSubmit &&
              <button
                onClick={() => handleNewsletterSubmit(true)}
              >
                Submit
                <Arrow color={theme.colors.white} />
              </button>
              }
              {newletterSubmit &&
              <TextSegment>
                Thank you for registering.
              </TextSegment>
              }
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
            <Link href="https://traffic.com.au">Site Design by Traffic</Link>
          </SubFooterItems>
          <SubFooterItems mobileOrder={2}>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </SubFooterItems>
          <SubFooterItems mobileOrder={3}>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </SubFooterItems>
          <SubFooterItems mobileOrder={4}>
            <Link href="/support">Get Help</Link>
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
      <SelectionCart
        tab={state.activeDrawerTab}
        active={state.openDrawer}
        newSelection={newSelection}
      />
    </>
  );
}
