import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Transition } from 'react-transition-group';
import css from '@styled-system/css';
import { useAppContext } from '@contexts/AppContext';
import Text from '@components/common/typography';
import ProductSelectionCount from '@components/common/product/selectionCount';
import Logo from 'public/assets/brandmarks/logo-primary.svg';
import LogoWhite from 'public/assets/brandmarks/logo-secondary.svg';
import {
  Container,
  Wrapper,
  NavLeft,
  NavRight,
  NavItem,
  SubNavItem,
  LogoWrapper,
  NavIcon,
  NavDrawer,
  DrawerFooter,
  DrawerInner,
  AlertBar,
  AlertLabel,
  AlertClose,
} from './styles';

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
  mode = 'light',
  notifications = null,
  hideBorderOnScroll = false,
  disableSelectionCart = false,
}) => {
  const { state, dispatch } = useAppContext();
  const [navOpen, setNavOpen] = useState(false);
  const [alertActive, setAlertActive] = useState(true);
  const [scrolledActive, setScrolledActive] = useState(false);
  const activeLogo = mode === 'dark' ? Logo : LogoWhite;
  let navRightMode = mode;
  if (state.openDrawer) {
    if (state.activeDrawerTab === 'support' && !scrolledActive) {
      navRightMode = 'light';
    } else {
      navRightMode = 'dark';
    }
    if (scrolledActive && mode !== 'dark') {
      navRightMode = 'light';
    }
  }

  function checkScroll() {
    setScrolledActive(window.pageYOffset >= 5);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', checkScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  });

  useEffect(() => {
    const alertState = sessionStorage.getItem('alert-state');
    const alertToBool = alertState === 'true';
    alertState && setAlertActive(alertToBool);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('alert-state', alertActive.toString());
  }, [alertActive]);

  // select first notification in array
  const activeNotification = notifications?.[0];
  return (
    <div
      css={css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        mx: 'auto',
        width: '100%',
        maxWidth: 2560,
        zIndex: 99999,
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
        position={'relative'}
        navOpen={navOpen}
        mode={mode}
        scrolledActive={scrolledActive}
        hideBorderOnScroll={hideBorderOnScroll}
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
              mode={navRightMode}
              onClick={() => {
                dispatch({
                  type: 'OPEN_DRAWER',
                  value:
                    state.activeDrawerTab !== 'support'
                      ? true
                      : !state.openDrawer,
                });
                dispatch({
                  type: 'SET_ACTIVE_DRAWER_TAB',
                  value: 'support',
                });
              }}
            >
              Support
            </NavItem>
            <NavItem
              mode={navRightMode}
              onClick={() => {
                dispatch({
                  type: 'OPEN_DRAWER',
                  value:
                    state.activeDrawerTab !== 'contact'
                      ? true
                      : !state.openDrawer,
                });
                dispatch({
                  type: 'SET_ACTIVE_DRAWER_TAB',
                  value: 'contact',
                });
              }}
            >
              Contact
            </NavItem>
            {!disableSelectionCart && (
              <NavItem
                mode={navRightMode}
                onClick={() => {
                  dispatch({
                    type: 'OPEN_DRAWER',
                    value:
                      state.activeDrawerTab !== 'cart'
                        ? true
                        : !state.openDrawer,
                  });
                  dispatch({
                    type: 'SET_ACTIVE_DRAWER_TAB',
                    value: 'cart',
                  });
                }}
              >
                Selections <ProductSelectionCount />
              </NavItem>
            )}
          </NavRight>
        </Wrapper>
        <Transition
          in={navOpen}
          timeout={duration}
          appear
          mountOnEnter
          unmountOnExit
        >
          {(state: any) => (
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
                <SubNavItem mode={mode} href="/terrazzo">
                  Terrazzo
                </SubNavItem>
                <SubNavItem mode={mode} href="/terrazzo/collections">
                  Collections
                </SubNavItem>
                <NavItem mode={mode} href="/in-use">
                  In Use
                </NavItem>
                <NavItem mode={mode} href="/our-story">
                  Our Story
                </NavItem>
                <NavItem mode={mode} href="/the-latest">
                  Latest
                </NavItem>
                <NavItem mode={mode} href="/support">
                  Support
                </NavItem>
                <NavItem
                  mode={mode}
                  onClick={() => {
                    dispatch({
                      type: 'OPEN_DRAWER',
                      value:
                        state.activeDrawerTab !== 'contact'
                          ? true
                          : !state.openDrawer,
                    });
                    dispatch({
                      type: 'SET_ACTIVE_DRAWER_TAB',
                      value: 'contact',
                    });
                  }}
                >
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
