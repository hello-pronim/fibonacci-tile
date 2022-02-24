import css from "@styled-system/css";
import Text from "@components/common/typography";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Wrapper = styled("div")(
  css({
    width: "100%",
  })
);

const Container = styled("div")(
  css({
    padding: "8px",
    textAlign: "center",
    transition: "background-color ease 0.3s",
    "&:hover": {
      backgroundColor: theme.colors.cold,
    },
  })
);

const GridCardImgContainer = styled("div")(
  css({
    position: "relative",
    boxShadow: "none",
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
  })
);
const ActionBtn = styled("div")(({ selected }: { selected: boolean }) =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    cursor: "pointer",
    backgroundColor: selected ? theme.colors.charcoal : theme.colors.white,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: selected ? theme.colors.charcoal : "#B0ABA7",
    transition: "ease all 0.3s",
    ".hovered": {
      alignItems: "center",
      position: "absolute",
      opacity: selected ? 1 : 0,
    },
    ".initial": {
      display: "flex",
      justifyContent: "center",
    },
    "&:hover": {
      borderColor: theme.colors.charcoal,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "167px",
      height: "inherit",
      borderRadius: "32px",
      color: theme.colors.white,
      backgroundColor: theme.colors.charcoal,
      svg: {
        path: {
          fill: 'white',
        },
      },
      ".hovered": {
        display: "flex",
        opacity: 1,
        transitionDelay: "0.4s",
        transition: "ease all 0.3s",
      },
    },
  })
);

const CardTitle = styled(Text)(
  css({
    fontSize: "18px",
    lineHeight: "21.6px",
    marginTop: "20px",
  })
);

export {
  ActionBtn,
  ActionBtnContainer,
  CardTitle,
  Container,
  GridCardImgContainer,
  Wrapper,
};
