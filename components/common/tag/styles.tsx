import css from "@styled-system/css";
import styled from "@emotion/styled";

const TagWrapper = styled("div")(
  css({
    backgroundColor: "charcoal",
    color: "white",
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 50,
    display: "inline-block",
    textTransform: "uppercase",
    marginRight: 5,
    fontSize: 12
  })
);

export {
    TagWrapper
};
