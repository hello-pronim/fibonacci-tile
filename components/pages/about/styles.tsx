import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const BreadCrumbWrapper = styled("div")(
  css({
    pl: "32px",
    pt: 92,
    pb: 0,
    [theme.mediaQueries.small]: {
      maxWidth: "2560px",
      pl: "27px",
      pb: 0,
    },
  })
);

export { BreadCrumbWrapper };
