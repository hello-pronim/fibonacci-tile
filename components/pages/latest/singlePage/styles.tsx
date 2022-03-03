import React from "react";
import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import Cont from "@components/common/layout/container";
import { justifyContent } from "styled-system";
import Text from "@components/common/typography";

const Left = styled("div")(
  css({
    gridColumn: '1 / span 7'
  })
);
const Container = styled(Cont)(css({
  pt: 60,
}))
const SingleCategory = styled(Text)(
  css({
    display: 'inline-flex',
    color: 'white',
    background: theme.colors.charcoal,
    px: '12px',
    py: '3.5px',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    borderRadius: '32px',
    columnGap: '4px',
    fontWeight: 500,
  })
);
const Right = styled("div")(
  css({
    alignSelf: 'flex-end',
    width: 'fit-content',
    gridColumn: '12',
    gridRow: 2,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 24,
  })
);

const Categories = styled("div")(
  css({
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridColumnGap: "8px",
    gridRowGap: "8px",
  })
);
const Date = styled(Text)(
  css({
  })
);
const Row = styled("div")(
  css({
    [theme.mediaQueriesMaxWidth.small]: {
      padding: "0 50px",
      pt: "44px",
      pb: "138",
    },
    [theme.mediaQueriesMaxWidth.xSmall]: {
      padding: "0 14px",
      pt: "44px",
      pb: "138",
    },

    padding: "0 56px",
    pt: "64px",
    maxWidth: "2560px",
    mr: "auto",
    ml: "auto",
  })
);

export { Left, Right, Container, SingleCategory, Categories, Date };
