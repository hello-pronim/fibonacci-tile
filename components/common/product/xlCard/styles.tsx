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
    ".popupBlock": {
      "& div": {
        width: "100%",
        height: "100%",
        "& img": {
          objectFit: "cover",
        },
      },
      ".popupBlockClose": {
        width: "auto",
        height: "auto",
      },
    },
  })
);

const Container = styled("div")(
  css({
    textAlign: "center",
    transition: "background-color ease 0.3s",
  })
);

const GridCardImgContainer = styled("div")(
  css({
    position: "relative",
    display: "flex",
    transition: "box-shadow ease 0.3s",
    a: {
      width: "100%",
    },
    "& > a > div": {
      display: "block",
    },
  })
);

const TableRow = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    borderTop: "1px solid #d4d4d8",
    "& > div": {
      padding: detailView ? "30px 25px 10px 10px" : "10px 25 10px 10px",
    },
  })
);

const DescCell = styled("div")(
  css({
    width: "400px",
  })
);

const ImgCell = styled("div")(({ detailView }: DetailViewProps) =>
  css({
    paddingRight: 0,
    width: "350px",
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
    height: detailView ? "inherit" : "60px",
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

const ListCardImgContainer = styled("div")(
  css({
    position: "relative",
    display: "flex",
    transition: "box-shadow ease 0.3s",
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
      width: "inherit",
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
    color: checked ? theme.colors.white : theme.colors.charcoal,
    backgroundColor: checked ? theme.colors.charcoal : theme.colors.white,
    border: checked ? "none" : "1px solid #B0ABA7",
    transition: "ease all 0.3s",
    ".hovered": {
      position: "absolute",
      visibility: "none",
      opacity: 0,
      alignItems: "center",
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

export {
  ActionBtn,
  ActionBtnContainer,
  CardImg,
  Container,
  DescCell,
  GridCardImgContainer,
  ImgCell,
  ListCardImgContainer,
  ProductListTitle,
  RowDetailButton,
  TableRow,
  Wrapper,
};
