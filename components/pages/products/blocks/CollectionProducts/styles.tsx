import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import { grid } from "styled-system";

const Container = styled(Cntnr)(() =>
  css({
    alignItems: "flex-start",
    bg: "white",
    pt: 164,
    pb: 140,
    rowGap: 40,
  })
);

export {
  Container,
};
