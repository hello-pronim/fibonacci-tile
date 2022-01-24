import css from "@styled-system/css";
import styled from "@emotion/styled";

const BreacrumbWrapper = styled("div")(() =>
  css({
    display: "flex",
    alignItems: "center",
    px: 35,
    pb: 35,
    pt: 100,
    "@media screen and (max-width: 768px)": {
      px: 10,
    },
  })
);

const BackBttn = styled("div")(() =>
  css({
   position: "relative",
   color: "charcoal",
   fontSize: 12,
   cursor: "pointer",
   "&:after": {
    content: "' '",
     display: "block",
     position: "absolute",
     top: "2px",
     left: "-12px",
     backgroundImage: `url("assets/icons/arrow-icon.svg")`,
     backgroundRepeat: "no-repeat",
     width: "10px",
     height: "9px"
   }
  })
);

const ListItem = styled("a")(() =>
  css({
   position: "relative",
   color: "charcoal",
   fontSize: 12,
   cursor: "pointer",
   ml: 3,
   textDecoration: "none",
   "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      top: "6px",
      left: "-9px",
      width: "5px",
      height: "5px",
      backgroundImage: `url("assets/icons/dot.svg")`,
      backgroundRepeat: "no-repeat",
   }
  })
);


const ActiveListItem = styled("span")(() =>
  css({
   position: "relative",
   color: "charcoal",
   fontSize: 12,
   ml: 3,
   textDecoration: "none",
   "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      top: "6px",
      left: "-9px",
      width: "5px",
      height: "5px",
      backgroundImage: `url("assets/icons/dot.svg")`,
      backgroundRepeat: "no-repeat",
   }
  })
);

export {
  BreacrumbWrapper,
  BackBttn,
  ListItem,
  ActiveListItem
};
