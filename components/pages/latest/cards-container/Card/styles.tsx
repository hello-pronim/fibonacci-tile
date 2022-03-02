import styled from "@emotion/styled";
import css from "@styled-system/css";
import theme from "@styles/theme";

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledRoot = styled.div`
  padding: 50px 12px;
`;

const StyledContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1024px) and (min-width: 426px) {
    padding: 16px;
  }
  a {
    text-decoration: none;
  }
`;

const Title = styled.h2`
    padding-top: 12px;
    width:100%  
    font-family: Everett;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 130%;
    letter-spacing: -0.01em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: ${theme.colors.charcoal};
  `;

const Description = styled.p`
  padding-top: 12px;
  color: ${theme.colors.charcoal};
  font-weight: 300;
  width: 100%;
`;

const CardPill = styled("div")(
  css({
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    columnGap: "4px",
    pl: "17.5px",
    py: "11px",
    pr: "17.5px",
    bg: "charcoal",
    mt: "20px",
    textTransform: "uppercase",
    color: "white",
    width: "fit-content",
    borderRadius: 32,
    fontSize: 0,
    lineHeight: "2px",
  })
);

const ImageWrapper = styled("div")(({ imageType }: { imageType: number }) =>
  css({
    height:
      (imageType === 1 && 248) ||
      (imageType === 2 && 586) ||
      (imageType === 3 && 440),
    overflow: "hidden",
    div: {
      height: "100%",
    },
  })
);

export {
  StyledRoot,
  StyledPhoto,
  StyledContainer,
  Title,
  CardPill,
  Description,
  ImageWrapper,
};
