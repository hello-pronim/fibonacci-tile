import React from "react";
import Link from "next/link";
import Router from "next/router";
import css from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";

import { BackBttn, BottomBarInner, LinkWrapper } from "./styles";
import router from "next/router";

const Breadcrumb = ({ crumbs, pt = 130, pb = 0, pl = 19 }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }
  const renderCrumbSeperator = (crumbs: any, index: number) => {
    return (
      <>
        {index !== crumbs.length - 1 ? (
          <span css={css({ color: "#B0ABA7" })}> • </span>
        ) : (
          ""
        )}
      </>
    );
  };
  return (
    <BottomBarInner css={css({ pt, pb, pl })}>
      <LinkWrapper>
        <Arrow type="short" direction="left" />
        <BackBttn
          onClick={() => {
            if (true) {
              Router.back();
            } else {
              // router.pop("/")
            }
          }}
        >
          <span>Back</span>
        </BackBttn>
      </LinkWrapper>
      {crumbs.map(({ name, path }, index: number) => {
        if (path) {
          return (
            <LinkWrapper key={`crumb-${index}`}>
              <Link href={path}>{name}</Link>{" "}
              {renderCrumbSeperator(crumbs, index)}
            </LinkWrapper>
          );
        }
        return (
          <LinkWrapper key={`crumb-${index}`}>
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
