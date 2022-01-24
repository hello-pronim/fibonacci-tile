import Masonry from "react-masonry-css";
import theme from "styles/theme";
import { grid } from "styled-system";
import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";

const Container = styled(Cntnr)(
  css({
    alignItems: "flex-start",
    px: 16,
    [theme.mediaQueries.small]: {
      px: 80,
    },
  })
);
const Wrapper = styled("div")(() =>
  css({
    gridColumn: "2 / span 10",
  })
);

const IntroWrapper = styled("div")(() =>
  css({
    gridRow: "1",
    gridColumn: "2 / span 7",
    pb: 80,
  })
);

const Sections = styled("div")(() =>
  css({
    gridRow: "1",
    gridColumn: "10 / span 3",
    pl: 16,
    borderLeft: `1px solid #c4c4c4`,
  })
);

const SectionList = styled("ul")(() =>
  css({
    mt: 20,
  })
);

const SectionItem = styled("li")(() =>
  css({
    width: "100%",
    pb: "4px",
  })
);

const Details = styled("div")(() =>
  css({
    gridRow: 2,
    gridColumn: 2,
    display: "flex",
    flexDirection: "column",
  })
);

const ProjectWrapper = styled("div")(() =>
  css({
    width: "100%",
  })
);

const ImageWrapper = styled("div")(() =>
  css({
    position: "relative",
    gridColumn: "1 / span 2",
    gridRow: 1,
  })
);

const Project = styled("div")(() =>
  css({
    gridRow: 2,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: 24,
    pt: 40,
    pb: 40,
    "&:first-child": {
      pt: 0,
    },
    "&:last-child": {
      pb: 0,
    },
    [theme.mediaQueries.small]: {
      pt: 100,
      pb: 100,
    },
  })
);

const Bottom = styled("div")(() =>
  css({
    gridRow: 3,
    gridColumn: "9 / span 3",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  })
);

const Top = styled("div")(() =>
  css({
    position: "relative",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    py: 40,
    borderBottom: "2px solid white",
  })
);

const Inner = styled("div")(() =>
  css({
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 40,
    "&:before": {
      position: "absolute",
      backgroundColor: "white",
      content: "' '",
      display: "block",
      height: "2px",
      width: "100%",
      transition: "ease all 0.3s",
      pointerEvents: "none",
      opacity: 1,
      bottom: 0,
      left: 0,
    },
  })
);

const Toggle = styled("div")(
  css({
    background: "transparent",
    border: "none",
  })
);

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    fontWeight: 700,
    mt: 16,
    svg: {
      transition: "ease all 0.3s",
    },
    "&:hover": {
      svg: {
        transform: "translateX(6px)",
      },
    },
    a: {
      textDecoration: "none",
      fontSize: 2,
      lineHeight: 2,
      color: "charcoal",
      "&:before": {
        position: "relative",
        backgroundColor: "charcoal",
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
      "&:hover": {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
  })
);

const FilterWrapperDesktop = styled("div")(
  css({
    display: "none",
    [theme.mediaQueries.small]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      paddingTop: "32px",
      paddingBottom: "32px",
    },
  })
);

const FilterWrapperMobile = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "32px",
    paddingBottom: "32px",
    px: "16px",
    [theme.mediaQueries.small]: {
      display: "none",
    },
  })
);

const LoadMoreWrapper = styled("div")(
  css({
    gridColumn: "1 / span 12",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "128px",
    paddingBottom: "128px",
    [theme.mediaQueries.small]: {
      paddingTop: "180px",
      paddingBottom: "180px",
    },
  })
);

const MasonryGrid = styled(Masonry)(
  css({
    display: "flex",
    gridColumn: "1 / span 12",
    "& .masonry-grid-column": {
      padding: "0px",
      [theme.mediaQueries.small]: {
        padding: "0px 80px",
      },
    },
  })
);

export {
  Bottom,
  Container,
  Details,
  FilterWrapperDesktop,
  FilterWrapperMobile,
  ImageWrapper,
  Inner,
  IntroWrapper,
  LinkWrapper,
  LoadMoreWrapper,
  ProjectWrapper,
  Project,
  SectionItem,
  SectionList,
  Sections,
  Toggle,
  Top,
  Wrapper,
  MasonryGrid,
};
