import css from "@styled-system/css";
import styled from "@emotion/styled";
import Text from "@components/common/typography";
import theme from "styles/theme";

const CollectionWrapper = styled("div")(
  css({
    maxWidth: "1760px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    borderBottom: "solid 1px #ccc",
    padding: "80px 16px",
    [theme.mediaQueries.small]: {
      flexDirection: "row",
      padding: "100px 80px",
    },
  })
);

const CollectionDetailContainer = styled("div")(
  css({
    width: "100%",
    [theme.mediaQueries.small]: {
      width: "40%",
    },
  })
);

const CollectionProductContainer = styled("div")(
  css({
    width: "100%",
    gridTemplateColumns: "repeat(1, 1fr)",
    [theme.mediaQueries.small]: {
      width: "60%",
      display: "grid",
      gridColumnGap: "15px",
      gridRowGap: "15px",
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  })
);

const CollectionDetail = styled("div")(
  css({
    width: "100%",
    marginBottom: "80px",
    [theme.mediaQueries.small]: {
      maxWidth: "320px",
    },
  })
);

const Title = styled(Text)(
  css({
    paddingBottom: "20px",
    fontSize: "32px",
    lineHeight: "41.6px",
    [theme.mediaQueries.small]: {
      fontSize: "44px",
      lineHeight: "50.6px",
    },
  })
);

const Details = styled(Text)(
  css({
    p: {
      fontSize: "20px",
      lineHeight: "28px",
      paddingBottom: "20px",
    },
  })
);

export {
  CollectionWrapper,
  CollectionDetailContainer,
  CollectionProductContainer,
  Title,
  Details,
  CollectionDetail,
};
