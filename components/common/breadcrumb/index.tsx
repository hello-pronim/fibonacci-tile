import React from "react";
import Link from "next/link";
import Router from 'next/router'


import {
  BreacrumbWrapper,
  BackBttn,
  ListItem,
  ActiveListItem
} from "./styles";

const Breadcrumb = ({ crumbs }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <BreacrumbWrapper>
      {/* Link back to any previous steps of the breadcrumb. */}
      <BackBttn onClick={() => Router.back()}>
        Back
      </BackBttn>
      <ListItem href="/">
        Home 
      </ListItem>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <ActiveListItem key={key}>
            {name}
          </ActiveListItem>
        ) : (
          <ListItem key={key} href={path}>
            {name}
          </ListItem>
        )
      )}
    </BreacrumbWrapper>
  );
};

export default Breadcrumb;
