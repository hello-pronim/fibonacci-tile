import css from "@styled-system/css";

const DisplayXLarge = ({ ...props }) =>
  css({
    fontFamily: [1],
    fontSize: [11],
    lineHeight: [0],
    fontWeight: 0,
    letterSpacing: 2,
  });

const DisplayLarge = ({ ...props }) => 
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: props.altFont ? [9] : [10],
    lineHeight: [0],
    fontWeight: 0,
  });

const DisplayMedium = ({ ...props }) => (
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: props.altFont ? [7] : [8],
    lineHeight: props.altFont ? [2] : [1],
    fontWeight: 0,
    letterSpacing: props.altFont ? 1 : 0,
  })
);

const DisplaySmall = ({ ...props }) => (
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: [6],
    lineHeight: props.altFont ? [1] : [2],
    fontWeight: 0,
    letterSpacing: props.altFont ? 0 : 1,
  })
);

const DisplayXSmall = ({ ...props }) => (
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: props.altFont ? 4 : 5,
    lineHeight: props.altFont ? 1 : 2,
    fontWeight: 0,
    letterSpacing: 0,
  })
);

const DisplayXXSmall = ({ ...props }) => (
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: 3,
    lineHeight: props.altFont ? 4 : 2,
    fontWeight: 0,
    letterSpacing: 0,
  })
);

const DisplayOverline = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 0,
    lineHeight: 4,
    fontWeight: 0,
    color: "nero",
    letterSpacing: 3,
  });

const BodyXLarge = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 4,
    lineHeight: 4,
    fontWeight: 0,
  });

const BodyLarge = ({ ...props }) =>
  css({
    fontFamily: 1,
  fontSize: 20,
    lineHeight: 4,
    fontWeight: 0,
  });

const BodyRegular = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 2,
    lineHeight: 4,
    fontWeight: 0
  });

const BodySmall = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 1,
    lineHeight: 4,
    fontWeight: 0,
  });

const BodyXSmall = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 0,
    lineHeight: 4,
    fontWeight: 0,
  });

export {
  DisplayXLarge,
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
  DisplayXXSmall,
  DisplayOverline,
  BodyXLarge,
  BodyLarge,
  BodyRegular,
  BodySmall,
  BodyXSmall,
};
