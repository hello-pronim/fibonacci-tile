import css from "@styled-system/css";
import Text from "@components/common/typography";
import styled from "@emotion/styled";

interface ContainerProps {
  active: boolean;
}
const Container = styled("section")(({ active }: ContainerProps) =>
  css({
    display: active ? "none" : "block",
    textAlign: "center",
    padding: "22px 55px",
    borderBottom: "1px solid #d4d4d8",
  })
);

const Title = styled(Text)(
  css({
    letterSpacing: "0.01em",
    lineHeight: "1.4",
  })
);

export { Container, Title };
