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
  return (
    <BottomBarInner css={css({ pt })}>
      <LinkWrapper>
        <Arrow type="short" direction="left" />
        <BackBttn onClick={() => Router.back()}>
          <span>Back</span>
        </BackBttn>
      </LinkWrapper>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <LinkWrapper key={key}>{name}</LinkWrapper>
        ) : (
          <LinkWrapper key={key}>
            <Link href={path}>Home</Link>
          </LinkWrapper>
        )
      )}
    </BottomBarInner>
  );
};

export default Breadcrumb;
