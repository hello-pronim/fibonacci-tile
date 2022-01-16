import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
export interface containerProps {
  navOpen: boolean;
  position: string;
}

export interface navItemProps {
  mode: string;
}

export interface NavIconProps {
  isOpen: boolean;
}

const Wrapper = styled("div")(() =>
  css({
    width: "100%",
    maxWidth: 2560,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 32,
    height: 80,
    "@media screen and (max-width: 768px)": {
      px: 10,
    },
  })
);


export {
  Wrapper,
};
