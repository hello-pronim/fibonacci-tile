import css from "@styled-system/css";
import styled from "@emotion/styled";
import Text from "@components/common/typography";
import theme from "styles/theme";

interface ContainerProps {
  listView: boolean;
}
const Container = styled("section")(({ listView }: ContainerProps) =>
  css({
    position: "relative",
    display: listView ? "block" : "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "15px",
    gridRowGap: "15px",
    padding: "16px",
    [theme.mediaQueries.small]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      padding: "60px",
    },
    [theme.mediaQueries.medium]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      padding: "80px 120px",
    },
    [theme.mediaQueries.large]: {
      gridTemplateColumns: "repeat(5, 1fr)",
      padding: "80px 120px",
    },
    "& .zeroStateBlock": {
      marginTop: "30px",
      [theme.mediaQueries.small]: {
        minWidth: "600px",
      },
      [theme.mediaQueries.medium]: {
        minWidth: "800px",
      },
    },
  })
);

const DisplayDescription = styled("div")(
  css({
    width: "40%",
  })
);

const DisplayProductName = styled("div")(
  css({
    width: "25%",
  })
);

const DisplayInnerTable = styled("div")(
  css({
    width: "35%",
    "& > div": {
      display: "inline-block",
      verticalAlign: "middle",
    },
  })
);

const DisplayListTable = styled("div")(
  css({
    display: "block",
  })
);

const DisplayPatternImage = styled("div")(
  css({
    width: "75%",
  })
);

const DivOne = styled("div")(
  css({
    width: "40%",
  })
);

const DivTwo = styled("div")(
  css({
    width: "60%",
  })
);

const TableActionContainer = styled("div")(
  css({
    backgroundColor: "#f6f6f6",
    textAlign: "center",
    width: "25%",
  })
);

const TableHeader = styled("div")(
  css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    background: "#f6f6f6",
    textTransform: "uppercase",
    "& > div span": {
      padding: "20px",
      display: "block",
    },
  })
);

const TableHeaderLeft = styled("div")(
  css({
    width: "80%",
    display: "flex",
    alignItems: "center",
  })
);

const TableHeaderRight = styled("div")(
  css({
    display: "flex",
    width: "20%",
  })
);

const LinkWrapper = styled("div")(
  css({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    mt: 16,
    paddingRight: 14,
    svg: {
      transition: "ease all 0.3s",
    },
    "&:hover": {
      svg: {
        transform: "translateX(6px)",
      },
    },
    a: {
      textDecoration: "none",
      fontSize: 2,
      lineHeight: 2,
      color: "charcoal",
      "&:before": {
        position: "relative",
        backgroundColor: "charcoal",
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
      "&:hover": {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
  })
);

const PageTitle = styled(Text)(
  css({
    fontFamily: "Canela",
    fontSize: "42px",
    lineHeight: "110%",
    display: "block",
    marginBottom: "40px",
    [theme.mediaQueries.medium]: {
      fontSize: "48px",
    },
    [theme.mediaQueries.xMedium]: {
      fontSize: "74px",
    },
  })
);

export {
  Container,
  PageTitle,
  DisplayDescription,
  DisplayInnerTable,
  DisplayListTable,
  DisplayPatternImage,
  DisplayProductName,
  DivOne,
  DivTwo,
  TableActionContainer,
  TableHeader,
  TableHeaderLeft,
  TableHeaderRight,
  LinkWrapper,
};
