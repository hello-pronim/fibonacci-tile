import React, { useState } from "react";
import Image from "next/image";
import Logo from "public/assets/brandmarks/logo-primary.svg";
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

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);
  return (
    <>
      <Container navOpen={navOpen}>
        <Wrapper>
          <NavIcon isOpen={navOpen} onClick={() => setNavOpen(!navOpen)} />
          <NavLeft>
            <NavItem href="#">Our Products</NavItem>
            <NavItem href="#">In Use</NavItem>
            <NavItem href="#">Our Story</NavItem>
            <NavItem href="#">Latest</NavItem>
          </NavLeft>
          <LogoWrapper>
            <Image src={Logo} width="158" height="40" alt="Fibonacci" />
          </LogoWrapper>
          <NavRight>
            <NavItem href="#">Support</NavItem>
            <NavItem href="#">Contact</NavItem>
            <NavItem href="#">Selections</NavItem>
          </NavRight>
        </Wrapper>
      </Container>
      <Transition in={navOpen} timeout={duration} appear mountOnEnter unmountOnExit>
        {(state) => (
          <NavDrawer
            css={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <DrawerInner>
            <NavItem href="#">Our Products</NavItem>
            <NavItem href="#">In Use</NavItem>
            <NavItem href="#">Our Story</NavItem>
            <NavItem href="#">Latest</NavItem>
            </DrawerInner>
            <DrawerFooter>
              <p>footer content</p>
            </DrawerFooter>
          </NavDrawer>
        )}
      </Transition>
    </>
  );
};

export default Header;
