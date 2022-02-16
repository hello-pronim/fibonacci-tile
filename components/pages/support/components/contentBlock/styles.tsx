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
    overflow: "hidden",
    py: 80,
    rowGap: 40,
  })
);

const Wrapper = styled("div")(({ orientation, mode }: { orientation?: string, mode?: string}) =>
  css({
    gridColumn:
      orientation === "right"
        ? ["1 / span 2", "1 / span 6", "1 / span 10", "8 / span 4"]
        : ["1 / span 2", "1 / span 6", "1 / span 10", "2 / span 4"],
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    color: mode === "dark" && 'white',
    rowGap: 32,
    a: {
      width: "100%",
      [theme.mediaQueries.xSmall]: {
        width: "inherit",
      },
    },
  })
);

const EntryWrapper = styled("div")(({entries, mode}:{mode?: string, entries?: number}) => css({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 55,
  paddingBottom: entries > 1 && 90,
  borderBottom: entries > 1 && 'solid 1px red',
  borderColor: mode === "light" ? 'charcoal': 'stone',
  rowGap: 32,
  "& p": {
    marginBottom: "20px",
  },
}))

const ImageWrapper = styled("div")(
  ({ orientation }: { orientation?: string }) =>
    css({
      gridRow: 1,
      gridColumn:
        orientation === "right"
          ? ["1 / span 2", "1 / span 6", "1 / span 10", "2 / span 5"]
          : ["1 / span 2", "1 / span 6", "1 / span 10", "7 / span 5"],
      display: "flex",
      flexDirection: 'column',
      justifyContent: "flex-start",
      height: '100%',
      width: "100%",
      marginRight: ["auto", "auto", "auto", -80],
      div: {
        width: "100%",
      },
    })
);

export { Container, Wrapper, ImageWrapper, EntryWrapper };
