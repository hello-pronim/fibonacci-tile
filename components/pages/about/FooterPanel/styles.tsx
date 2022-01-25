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
    maxWidth: "960px",
    margin: "auto",
  })
);

const PanelTitle = styled("div")(
  css({
    fontFamily: "Canela",
    fontSize: "42px",
    lineHeight: "54.6px",
    textAlign: "center",
    color: theme.colors.charcoal,
    paddingBottom: "16px",
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
