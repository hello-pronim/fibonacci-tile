import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/brandmarks/logo-primary.svg";
import LogoWhite from "public/assets/brandmarks/logo-secondary.svg";
import styles from "./styles.module.scss";
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
} from "./styles";
import { Transition } from "react-transition-group";

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

const Header = ({ mode = "light" }) => {
  const [navOpen, setNavOpen] = useState(false);
  const activeLogo = mode === "dark" ? Logo : LogoWhite;
  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.navLeft}>
            <Link href="/products">
              <a className={styles.navItem}>Our Products</a>
            </Link>
            <NavItem href="#" mode={mode}>
              In Use
            </NavItem>
            <NavItem href="#" mode={mode}>
              Our Story
            </NavItem>
            <NavItem href="#" mode={mode}>
              Latest
            </NavItem>
          </div>
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
            <NavItem href="#" mode={mode}>
              Support
            </NavItem>
            <NavItem href="#" mode={mode}>
              Contact
            </NavItem>
            <NavItem href="#" mode={mode}>
              Selections
            </NavItem>
          </NavRight>
        </div>
      </section>
      {/* <Transition
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
              <NavItem mode={mode} href="/products">
                Our Products
              </NavItem>
              <NavItem mode={mode} href="#">
                In Use
              </NavItem>
              <NavItem mode={mode} href="#">
                Our Story
              </NavItem>
              <NavItem mode={mode} href="#">
                Latest
              </NavItem>
            </DrawerInner>
            <DrawerFooter>
              <p>footer content</p>
            </DrawerFooter>
          </NavDrawer>
        )}
      </Transition> */}
    </>
  );
};

export default Header;
