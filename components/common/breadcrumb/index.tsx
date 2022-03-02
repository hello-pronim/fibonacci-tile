import React from "react";
import Link from "next/link";
import Router from "next/router";
import css from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import theme from "@styles/theme";
import { BackBttn, BottomBarInner, LinkWrapper } from "./styles";

const Breadcrumb = ({
  crumbs,
  pt = 130,
  pb = 0,
  pl = 0,
  color = theme.colors.charcoal,
}) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }
  const renderCrumbSeperator = (crumbs: any, index: number) => {
    return (
      <>
        {index !== crumbs.length - 1 ? (
          <span css={css({ color: color, opacity: 0.3 })}> • </span>
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <BottomBarInner css={css({ pt, pb, pl })}>
      <LinkWrapper
        color={color}
        css={css({ cursor: "pointer" })}
        onClick={() => {
          if (true) {
            Router.back();
          } else {
            // router.pop("/")
          }
        }}
      >
        <Arrow color={color} type="breadcrumb" direction="left" />
        <BackBttn>
          <a href="">Back</a>
        </BackBttn>
      </LinkWrapper>
      {crumbs.map(({ name, path, mobileHide }, index: number) => {
        if (path) {
          return (
            <LinkWrapper color={color} key={`crumb-${index}`}>
              <Link href={path}>
                <a className={mobileHide ? "crumbHideOnMobile" : ""}>{name}</a>
              </Link>{" "}
              {renderCrumbSeperator(crumbs, index)}
            </LinkWrapper>
          );
        }
        return (
          <LinkWrapper color={color} key={`crumb-${index}`}>
            <span>
              {name} {renderCrumbSeperator(crumbs, index)}
            </span>
          </LinkWrapper>
        );
      })}
    </BottomBarInner>
  );
};

export default Breadcrumb;
