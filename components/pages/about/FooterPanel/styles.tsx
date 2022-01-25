import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Panel = styled("section")(
  css({
    paddingTop: "80px",
    paddingBottom: "80px",
    backgroundColor: theme.colors.stoneTints[7],
  })
);

const Container = styled("div")(
  css({
    margin: "auto",
    maxWidth: "320px",
    [theme.mediaQueries.small]: {
      maxWidth: "960px",
    },
  })
);

const PanelTitle = styled("div")(
  css({
    fontFamily: "Canela",
    fontSize: "32px",
    lineHeight: "43.2px",
    textAlign: "center",
    color: theme.colors.charcoal,
    paddingBottom: "16px",
    [theme.mediaQueries.small]: {
      fontSize: "42px",
      lineHeight: "54.6px",
    },
  })
);

const PanelSubTitle = styled("div")(
  css({
    fontFamily: "Everett",
    fontSize: "16px",
    lineHeight: "22.4px",
    textAlign: "center",
    color: theme.colors.charcoal,
  })
);

export { Panel, Container, PanelTitle, PanelSubTitle };
