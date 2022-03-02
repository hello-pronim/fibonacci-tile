import css from "@styled-system/css";
import Text from "@components/common/typography";
import styled from "@emotion/styled";
import theme from "@styles/theme";

interface ContainerProps {
  active: boolean;
}
const Container = styled("section")(({ active }: ContainerProps) =>
  css({
    display: active ? "none" : "block",
    textAlign: "center",
    padding: "16px 32px",
    borderBottom: "1px solid #d4d4d8",
    [theme.mediaQueries.small]: {
      padding: "22px 55px",
    },
  })
);

const Title = styled(Text)(
  css({
    fontSize: "18px",
    lineHeight: "21.6px",
    letterSpacing: "0.01em",
    [theme.mediaQueries.small]: {
      fontSize: "24px",
      lineHeight: "33.6px",
    },
  })
);

export { Container, Title };
