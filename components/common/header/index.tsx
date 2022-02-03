import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { useAppContext } from "@contexts/AppContext";
import Link from "next/link";
import Logo from "public/assets/brandmarks/logo-primary.svg";
import LogoWhite from "public/assets/brandmarks/logo-secondary.svg";
import {
  Container,
  Wrapper,
  NavLeft,
  NavRight,
  NavItem,
  LogoWrapper,
  NavIcon,
  NavDrawer,
  DrawerFooter,
  DrawerInner,
  AlertBar,
  AlertLabel,
  AlertClose,
} from "./styles";
import { Transition } from "react-transition-group";
import Text from "@components/common/typography";
import ProductSelectionCount from "@components/common/product/selectionCount";
import SelectionCart from "@components/common/selectionCart";
import { withGlobalNotification } from "@hoc/withGlobalData";

import css from "@styled-system/css";

const duration = 400;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Header = ({ 
  mode = "light", 
  position = "relative", 
  notifications 
}) => {
  console.log("notifications", notifications)
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  const { state, dispatch } = useAppContext();
  const [navOpen, setNavOpen] = useState(false);
  const [newSelection, setNewSelection] = useState(false);
  const [selectionsCount, setSelectionsCount] = useState(0);
  const [alertActive, setAlertActive] = useState(true);
  const selectionsMounted = useRef(false);
  const activeLogo = mode === "dark" ? Logo : LogoWhite;
  
  useEffect(() => {
    const alertState = sessionStorage.getItem("alert-state");
    const alertToBool = alertState === "true";
    alertState && setAlertActive(alertToBool);
  }, []);

  useEffect(() => {
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
      const timerId = setTimeout(() => {
        setNewSelection(false);
        dispatch({
          type: "OPEN_DRAWER",
          value: false,
        });
      }, 4000);
      timerId;
    } else selectionsMounted.current = true;
    setSelectionsCount(state.selectedProducts.length);
  }, [state.selectedProducts]);
  useEffect(() => {
    sessionStorage.setItem("alert-state", alertActive.toString());
  }, [alertActive]);

  return (
    <div
      css={css({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        mx: 'auto',
        width: "100%",
        maxWidth: 2560,
        zIndex: 9999999,
      })}
    >
      {alertActive && (
        <AlertBar>
          <AlertLabel>
            Join Fibonacci today and save up to 20% on your order using code
            SPRING at checkout. Promotion valid for new users only.
          </AlertLabel>
          <AlertClose onClick={() => setAlertActive(false)} />
        </AlertBar>
      )}
      <Container position={"relative"} navOpen={navOpen} mode={mode} scrollY={scrollY}>
        <Wrapper>
          <NavIcon
            mode={mode}
            isOpen={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          />
          <NavLeft>
            <NavItem href="/terrazzo" mode={mode}>
              Our Products
            </NavItem>
            <NavItem href="/in-use" mode={mode}>
              In Use
            </NavItem>
            <NavItem href="/our-story" mode={mode}>
              Our Story
            </NavItem>
            <NavItem href="/latest" mode={mode}>
              Latest
            </NavItem>
          </NavLeft>
          <LogoWrapper>
            <Link href="/">
              <a>
                <Image
                  src={activeLogo}
                  width="158"
                  height="40"
                  alt="Fibonacci"
                />
              </a>
            </Link>
          </LogoWrapper>
          <NavRight>
            <NavItem
              mode={mode}
              onClick={() => (
                dispatch({
                  type: "OPEN_DRAWER",
                  value:
                    state.activeDrawerTab !== "support"
                      ? true
                      : !state.openDrawer,
                }),
                dispatch({
                  type: "SET_ACTIVE_DRAWER_TAB",
                  value: "support",
                })
              )}
            >
              Support
            </NavItem>
            <NavItem
              href="#"
              mode={mode}
              onClick={() => (
                dispatch({
                  type: "OPEN_DRAWER",
                  value:
                    state.activeDrawerTab !== "contact"
                      ? true
                      : !state.openDrawer,
                }),
                dispatch({
                  type: "SET_ACTIVE_DRAWER_TAB",
                  value: "contact",
                })
              )}
            >
              Contact
            </NavItem>
            <NavItem
              mode={mode}
              onClick={() => (
                dispatch({
                  type: "OPEN_DRAWER",
                  value:
                    state.activeDrawerTab !== "cart" ? true : !state.openDrawer,
                }),
                dispatch({
                  type: "SET_ACTIVE_DRAWER_TAB",
                  value: "cart",
                })
              )}
            >
              Selections <ProductSelectionCount />
            </NavItem>
          </NavRight>
        </Wrapper>
        <SelectionCart
          tab={state.activeDrawerTab}
          active={state.openDrawer}
          newSelection={newSelection}
        />
        <Transition
          in={navOpen}
          timeout={duration}
          appear
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <NavDrawer
              css={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <DrawerInner>
                <NavItem mode={mode} href="/terrazzo">
                  Our Products
                </NavItem>
                <NavItem mode={mode} href="/in-use">
                  In Use
                </NavItem>
                <NavItem mode={mode} href="/our-story">
                  Our Story
                </NavItem>
                <NavItem mode={mode} href="/latest">
                  Latest
                </NavItem>
                <NavItem mode={mode} href="/support">
                  Support
                </NavItem>
                <NavItem mode={mode} href="#">
                  Contact
                </NavItem>
              </DrawerInner>
              <DrawerFooter>
                <Text as="h4" variant="Body-Regular">
                  Follow Us
                </Text>
                <NavItem mode={mode} href="#">
                  Instagram
                </NavItem>
                <NavItem mode={mode} href="#">
                  Facebook
                </NavItem>
                <NavItem mode={mode} href="#">
                  LinkedIn
                </NavItem>
              </DrawerFooter>
            </NavDrawer>
          )}
        </Transition>
      </Container>
    </div>
  );
};


// export const getStaticProps: GetStaticProps = async function () {
//   // const {
//   //   data: { globalSet: notifications },
//   // } = await client.query({
//   //   query: GlobalNotificationQuery,
//   // });
//   // const data =  await client.query({
//   //   query: GlobalNotificationQuery,
//   // });
//   // console.log("data", data)
//   return {
//     props: {
//       notifications: null
//     },
//     revalidate: 60,
//   };
// };

export default Header;
