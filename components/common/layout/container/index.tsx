import css from "@styled-system/css";
import styled from "@emotion/styled";

export interface containerProps {
  grid?: boolean;
}

const Container = styled("div")(({ ...props }: containerProps) =>
  css({
    maxWidth: 2560,
    margin: "0 auto"
  })
);

export default Container;
