import React, { useState, useEffect } from "react";
import { useAppContext } from "@contexts/AppContext";
import ProductCard from "@components/common/product/card";
import ArrowButton from "@componentscommon/button/arrowButton";
import CheckMarkIcon from "@components/icons/checkmark";
import Image from "next/image";
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
import { css } from "@styled-system/css";

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

const SelectionCart = ({ active, newSelection }) => {
  const { state, dispatch } = useAppContext();
  console.log(state);
  return (
    <div
      css={css({
        boxSizing: "border-box",
        position: "absolute",
        top: 80,
        right: active ? 0 : "-485px",
        width: 480,
        height: "calc(100vh - 114px)",
        background: "#fff",
        zIndex: 999,
        pb: 142,
        transition: "ease all 0.4s",
        boxShadow:
          "0px 24px 38px rgba(20, 20, 20, 0.08), 0px 9px 46px rgba(20, 20, 20, 0.08), 0px 11px 15px rgba(20, 20, 20, 0.16)",
      })}
    >
      <div css={css({ height: "100%", overflow: "scroll", py: 36, px: 24 })}>
        <div css={css({ display: "flex", alignItems: "center" })}>
          {newSelection ? (
            <>
              <Text variant="Body-Large">Selection Added</Text>
              <div
                css={css({
                  display: "flex",
                  border: "1px solid black",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  ml: "8px",
                })}
              >
                <CheckMarkIcon />
              </div>
            </>
          ) : (
            <Text variant="Body-Large">
              Selections {state && "(" + state?.selectedProducts.length + ")"}
            </Text>
          )}
        </div>
        <div
          css={css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            pt: 28,
            columnGap: 24,
            rowGap: 16,
          })}
        >
          {state &&
            state?.selectedProducts.map((product) => {
              return (
                <ProductCard
                  isSelected={
                    state?.selectedProducts.findIndex(
                      (sp) => sp.id === product.id
                    ) !== -1
                  }
                  toggleProductSelect={() => {
                    dispatch({
                      type: "TOGGLE_PRODUCT_SELECTION",
                      product,
                    });
                  }}
                  key={product.id}
                  product={product}
                  compact
                />
              );
            })}
        </div>
      </div>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          padding: 24,
          bg: "#888888",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          alignItems: "center",
          div: {
            width: "100%",
            a: {
              width: "100%",
            },
          },
        })}
      >
        <ArrowButton mode="light" title="Order Samples" link="#" />
        <a href="#" css={css({ color: "#fff", mt: 24 })}>
          <Text variant="Body-Small">Continue Selections</Text>
        </a>
      </div>
    </div>
  );
};

export default SelectionCart;
