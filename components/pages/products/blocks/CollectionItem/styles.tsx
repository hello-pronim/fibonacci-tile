import css from "@styled-system/css";
import styled from "@emotion/styled";

const CollectionWrapper = styled("div")(
  css({
    padding: "100px 80px",
    maxWidth: "1760px",
    margin: "0 auto",
    display: "flex",
    borderBottom: "solid 1px #ccc"
  })
);

const CollectionDetailContainer = styled("div")(
  css({
    width: "40%"
  })
);

const CollectionProductContainer = styled("div")(
  css({
    width: "60%",
    display: "grid",
    gridColumnGap: "15px",
    gridRowGap: "15px",
    gridTemplateColumns: "repeat(3, 1fr)"
  })
);

const CollectionDetail = styled("div")(
  css({
    maxWidth: "320px"
  })
);

const Title = styled("h2")( 
  css({
    fontSize: "44px",
    lineHeight: "50.6px",
    paddingBottom: "20px"
  })
);

const Details = styled("div")( 
  css({
    "p": {
      fontSize: "18px",
      lineHeight: "26px",
      paddingBottom: "20px"
    }
  })
);

export { 
  CollectionWrapper,
  CollectionDetailContainer,
  CollectionProductContainer,
  Title,
  Details,
  CollectionDetail
};
