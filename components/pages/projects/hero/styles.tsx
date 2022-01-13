import css from "@styled-system/css";
import styled from "@emotion/styled";

const LeftCol = styled("div")(
  css({
    position: "relative",
    height: "100%",
    gridColumn: "1 / span 3",
    display: "flex",
    flexDirection: "column",
    rowGap: 160,
    pt: 56,
    pb: 104,
  })
);

const RightCol = styled("div")(
  css({
    gridColumn: "7 / span 5",
  })
);

const Pill = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: "4px",
    py: "3.5px",
    px: "12px",
    bg: "charcoal",
    width: "fit-content",
    zIndex: 99999,
    textTransform: "uppercase",
    color: "white",
    borderRadius: 32,
    fontSize: 0,
    lineHeight: 2,
  })
);

const ContentWrapper = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    rowGap: 24,
  })
);

const DetailsWrapper = styled("ul")(
  css({
    "> *:not(:last-child)": {
      borderBottom: "1px solid",
      borderColor: "warm",
      mb: 16,
      pb: 16,
    },
  })
);

const Detail = styled("li")(
  css({
    display: "flex",
    flexDirection: "column",
    rowGap: "4px",
  })
);
export { LeftCol, RightCol, Pill, ContentWrapper, DetailsWrapper, Detail };
