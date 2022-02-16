import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useAppContext } from "@contexts/AppContext";
import Link from "next/link";
import { Transition } from "react-transition-group";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import ProductSelectionCount from "@components/common/product/selectionCount";
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
  notifications = null,
}) => {
  const { state, dispatch } = useAppContext();
  const [navOpen, setNavOpen] = useState(false);
  const [alertActive, setAlertActive] = useState(true);
  const activeLogo = mode === "dark" ? Logo : LogoWhite;

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

  useEffect(() => {
    const alertState = sessionStorage.getItem("alert-state");
    const alertToBool = alertState === "true";
    alertState && setAlertActive(alertToBool);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("alert-state", alertActive.toString());
  }, [alertActive]);

  // select first notification in array
  const activeNotification = notifications?.[0];

  return (
    <div
      css={css({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        mx: "auto",
        width: "100%",
        maxWidth: 2560,
        zIndex: 9999999,
      })}
    >
      {activeNotification && activeNotification?.active && alertActive && (
        <AlertBar>
          <AlertLabel
            dangerouslySetInnerHTML={{
              __html: activeNotification.notificationsText,
            }}
          />
          <AlertClose onClick={() => setAlertActive(false)} />
        </AlertBar>
      )}
      <Container
        position={"relative"}
        navOpen={navOpen}
        mode={mode}
        scrollY={scrollY}
      >
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
            <NavItem href="/the-latest" mode={mode}>
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

export default Header;
