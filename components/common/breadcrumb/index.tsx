import React from "react";
import Link from "next/link";
import Router from "next/router";
import css from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";

import { BackBttn, BottomBarInner, LinkWrapper } from "./styles";

const Breadcrumb = ({ crumbs, pt = 130 }) => {
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
    <BottomBarInner css={css({ pt })}>
      <LinkWrapper>
        <Arrow type="short" direction="left" />
        <BackBttn onClick={() => Router.back()}>
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
            {name} {renderCrumbSeperator(crumbs, index)}
          </LinkWrapper>
        );
      })}
    </BottomBarInner>
  );
};

export default Breadcrumb;
