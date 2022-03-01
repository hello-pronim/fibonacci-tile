import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import theme from "styles/theme";

export interface containerProps {}

export interface navItemProps {
  mode: string;
}

export interface NavIconProps {
  isOpen: boolean;
}

const Container = styled(Cntnr)(({ mode }: { mode: string }) =>
  css({
    bg: mode !== "dark" ? "white" : "charcoal",
    color: mode !== "dark" ? "charcoal" : "white",
    overflow: "hidden",
    py: 80,
    rowGap: 40,
  })
);

const Wrapper = styled("div")(
  ({ orientation, mode }: { orientation?: string; mode?: string }) =>
    css({
      gridColumn:
        orientation === "right"
          ? ["1 / span 2", "1 / span 6", "1 / span 10", "8 / span 4"]
          : ["1 / span 2", "1 / span 6", "1 / span 10", "2 / span 4"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      color: mode === "dark" && "white",
      rowGap: 40,
      h4: {
        fontSize: "26px",
        lineHeight: "33.8px",
        color: mode === "light" ? "charcoal" : "white",
        [theme.mediaQueries.small]: {
          fontSize: "32px",
          lineHeight: "41.6px",
        },
      },
      a: {
        width: "100%",
        [theme.mediaQueries.xSmall]: {
          width: "inherit",
        },
      },
    })
);

const EntryWrapper = styled("div")(
  ({ entries, mode }: { mode?: string; entries?: number }) =>
    css({
      display: "flex",
      flexDirection: "column",
      paddingBottom: entries > 1 && 60,
      borderBottom: entries > 1 && "solid 1px red",
      borderColor: mode === "light" ? "charcoal" : "stone",
      rowGap: 24,
      paddingTop: 0,
      [theme.mediaQueries.small]: {
        paddingTop: 55,
        paddingBottom: entries > 1 && 90,
        rowGap: 32,
      },
      h4: {
        fontSize: "18px",
        lineHeight: "23.4px",
        color: mode === "light" ? "charcoal" : theme.colors.stoneTints[7],
        [theme.mediaQueries.small]: {
          fontSize: "26px",
          lineHeight: "33.8px",
        },
      },
      p: {
        color: mode === "light" ? "charcoal" : "white",
      },
      span: {
        fontSize: "16px",
        lineHeight: "22.4px",
        color: mode === "light" ? "charcoal" : "white",
        [theme.mediaQueries.small]: {
          fontSize: "20px",
          lineHeight: "28px",
        },
      },
      "& p": {
        marginBottom: "20px",
      },
    })
);

const ImageWrapper = styled("div")(
  ({ orientation }: { orientation?: string }) =>
    css({
      gridRow: 1,
      gridColumn:
        orientation === "right"
          ? ["1 / span 2", "1 / span 6", "1 / span 10", "2 / span 5"]
          : ["1 / span 2", "1 / span 6", "1 / span 10", "7 / span 5"],
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100%",
      width: "100%",
      marginRight: ["auto", "auto", "auto", -80],
      "& > div": {
        position: "unset!important",
        [theme.mediaQueries.small]: {
          position: "relative!important",
        },
        "& >div": {
          display: "none!important",
          [theme.mediaQueries.small]: {
            display: "block!important",
          },
        },
      },
      ".image": {
        objectFit: "cover!important",
        width: "100%!important",
        position: "relative!important",
        height: "100%!important",
        [theme.mediaQueries.small]: {
          height: "0px!important",
          position: "absolute!important",
        },
      },
    })
);

export { Container, Wrapper, ImageWrapper, EntryWrapper };
