import css from "@styled-system/css";
import Text from "@components/common/typography";
import styled from "@emotion/styled";
import theme from "styles/theme";

interface ActionBtnProps {
  checked: boolean;
}

interface DetailViewProps {
  detailView: boolean;
}

const Wrapper = styled("div")(
  css({
    width: "100%",
  })
);

const Container = styled("div")(
  ({ compact, hoverBG }: { compact: boolean; hoverBG?: string }) =>
    css({
      padding: compact ? "0" : "38px 18px",
      textAlign: "center",
      transition: "ease all 0.4s",
      backgroundColor: "rgba(237, 236, 232, 0)",
      "&:hover": {
        backgroundColor: "transparent",
        [theme.mediaQueries.sSmall]: {
          backgroundColor:
          !compact && hoverBG ? hoverBG : "rgba(237, 236, 232, 1.000)",
          div: {
            boxShadow: "none",
          },
        },
      },
    })
);

const GridCardImgContainer = styled("div")(
  ({ compact }: { compact?: boolean }) =>
    css({
      width: compact ? "100% !important" : "max-content",
      mx: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      transition: "box-shadow 0.4s",
      boxShadow: !compact && theme.shadows.default,
    })
);

const TableRow = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    borderTop: "1px solid #d4d4d8",
    backgroundColor: detailView ? "#FFFFF8" : "inherit",
    "&:hover": {
      backgroundColor: "#FFFFF8",
    },
  })
);

const ImgCell = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    paddingRight: 0,
    width: "75%",
    height: "auto",
    paddingTop: detailView ? "10px" : 0,
  })
);

const RowDetailButton = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    textAlign: "center",
    width: "25%",
    paddingTop: detailView ? "25px" : 0,
    button: {
      background: "none",
      border: "none",
      cursor: "pointer",
      marginTop: "22px",
    },
  })
);

const CardImg = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    height: detailView ? "initial" : "60px",
    overflow: "hidden",
    "& a": detailView
      ? {
          height: "100%",
          display: "block",
          "& div": {
            height: "100%",
            "& img": {
              objectFit: "cover",
              objectPosition: "100% 0",
            },
          },
        }
      : "none",
  })
);

const ProductListTitle = styled("a")(
  css({
    textDecoration: "none",
    color: theme.colors.charcoal,
  })
);

const ListCardImgContainer = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    position: "relative",
    boxShadow:
      "0px 24px 38px rgba(20, 20, 20, 0.08), 0px 9px 46px rgba(20, 20, 20, 0.08), 0px 11px 15px rgba(20, 20, 20, 0.16)",
    display: "flex",
    transition: "box-shadow ease 0.3s",
    width: "auto",
    height: "auto",
  })
);

const ActionBtnContainer = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    bottom: "-20px",
    height: "39px",
    width: "39px",
    "&:hover": {
      width: "auto",
    },
  })
);
const ActionBtn = styled("button")(({ checked }: ActionBtnProps) =>
  css({
    display: "block",
    textTransform: "uppercase",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    cursor: "pointer",
    backgroundColor: checked ? theme.colors.charcoal : theme.colors.white,
    border: checked ? "none" : "1px solid #B0ABA7",
    transition: "ease all 0.3s",
    ".hovered": {
      alignItems: "center",
      position: "absolute",
      visibility: "none",
      opacity: 0,
    },
    ".initial": {
      display: "flex",
      justifyContent: "center",
    },
    "&:hover": {
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "167px",
      height: "inherit",
      borderRadius: "32px",
      color: theme.colors.white,
      backgroundColor: theme.colors.charcoal,
      ".hovered": {
        display: "flex",
        opacity: 1,
        transitionDelay: "0.4s",
        transition: "ease all 0.3s",
        span: {
          marginLeft: "5px",
        },
      },
      ".initial": {
        display: "none",
      },
    },
  })
);

const CardTitle = styled(Text)(
  css({
    fontSize: "22px",
    letterSpacing: "0.01em",
    lineHeight: "1.1",
    margin: "35px 0px 10px 0px",
    a: {
      color: theme.colors.charcoal,
      textDecoration: "none",
    },
  })
);

const ProductTitleLink = styled("a")(
  css({
    fontFamily: "Canela",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "33.6px",
    color: theme.colors.charcoal,
  })
);

const CardSubTitle = styled(Text)(
  css({
    fontFamily: "Everett",
    fontSize: "14px",
    lineHeight: "19.6px",
    fontWeight: "300",
    color: theme.colors.charcoal,
    "& span": {
      color: "#9e9084",
      fontWeight: "400",
    },
  })
);

const DetailsBoxLeft = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    width: "80%",
    marginTop: detailView ? 0 : "28px",
  })
);

const ProductsInfoRow = styled("div")(
  css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    cursor: "pointer",

    width: "100%",
  })
);

const ProductName = styled("div")(
  css({
    width: "25%",
    "& div": {
      padding: "20px",
    },
  })
);

const CollectionNameBox = styled("div")(
  css({
    width: "35%",
  })
);

const DisplayNameBox = styled("div")(
  css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  })
);

const AvailableBox = styled("div")(
  css({
    width: "40%",
    "& div": {
      padding: "20px",
    },
  })
);

const NameBox = styled("div")(
  css({
    width: "60%",
    "& div": {
      padding: "20px",
    },
  })
);

const DescriptionBox = styled("div")(
  css({
    display: "block",
    width: "40%",
    "& div": {
      padding: "20px",
    },
  })
);

const ProductsInfoDetails = styled("div")(
  css({
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  })
);

const ProductInfoBox = styled("div")(
  css({
    width: "60%",
  })
);

const Details = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    display: detailView ? "block" : "none",
    padding: "20px 60px 40px 20px",
  })
);

const TitleText = styled(Text)(
  css({
    padding: "5px 12px",
    background: "#141414",
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "0.1em",
    borderRadius: "30px",
  })
);

const Description = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    maxWidth: "450px",
    padding: detailView ? "30px 0" : 0,
  })
);

const Listings = styled("div")(
  css({
    "& > ul": {
      listStyleType: "none",
      "& > li": {
        color: theme.colors.concreteTints[5],
        fontSize: "16px",
        borderBottom: "solid 1px #F4EEE9",
        lineHeight: "22.4px",
        padding: "15px 0",
        "&:first-child": {
          paddingTop: 0,
        },
        "&:last-child": {
          border: "none",
        },
      },
    },
  })
);

const Headline = styled("div")(
  css({
    color: theme.colors.charcoal,
    fontSize: "16px",
    paddingBottom: "10px",
    lineHeight: "140%",
  })
);

const TechnicalSpecification = styled("a")(
  css({
    color: theme.colors.charcoal,
    fontSize: "14px",
    lineHeight: "18.2px",
    textDecoration: "none",
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
    "&:after": {
      position: "absolute",
      top: "0px",
      right: "-35px",
      display: "block",
      width: "24px",
      height: "40px",
      content: '""',
      background:
        'url("../../../../public/assets/icons/black-arrow.svg") top right no-repeat',
    },
    span: {
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

const ProductDescriptionBox = styled("div")(
  css({
    width: "40%",
  })
);

const DetailsBoxRight = styled("div")(
  css({
    width: "20%",
    display: "flex",
    padding: "30px 0px",
  })
);

export {
  ActionBtn,
  ActionBtnContainer,
  AvailableBox,
  CardImg,
  CardSubTitle,
  CardTitle,
  CollectionNameBox,
  Container,
  Description,
  DescriptionBox,
  DisplayNameBox,
  Details,
  DetailsBoxLeft,
  DetailsBoxRight,
  GridCardImgContainer,
  Headline,
  ImgCell,
  ListCardImgContainer,
  Listings,
  NameBox,
  ProductDescriptionBox,
  ProductListTitle,
  ProductName,
  ProductInfoBox,
  ProductsInfoDetails,
  ProductsInfoRow,
  ProductTitleLink,
  RowDetailButton,
  TableRow,
  TechnicalSpecification,
  TitleText,
  Wrapper,
};
