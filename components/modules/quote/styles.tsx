import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
import Cntnr from "@components/common/layout/container";
import Text from "@components/common/typography";

const Container = styled(Cntnr)(() =>
  css({
    bg: "stone",
    py: 114,
  })
);

const Wrapper = styled("div")(() =>
  css({
    gridColumn: ["1 / span 2", "1 / span 6", "2/ span 10"],
    rowGap: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: 928,
    mx: "auto",
  })
);

const PrimaryText = styled(Text)(
  css({
    fontSize: "32px",
    lineHeight: "43.2px",
    [theme.mediaQueries.small]: {
      fontSize: "42px",
      lineHeight: "54.6px",
    },
  })
);

const SecondaryText = styled(Text)(
  css({
    fontSize: "16px",
    lineHeight: "22.4px",
  })
);

export { Container, Wrapper, PrimaryText, SecondaryText };
