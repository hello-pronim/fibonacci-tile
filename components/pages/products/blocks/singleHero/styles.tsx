import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import { grid } from "styled-system";

const Container = styled(Cntnr)(() =>
  css({
      alignItems: 'flex-start',
      bg: "white",
      pt: 164,
      pb: 140,
      rowGap: 40,
  })
);

const Wrapper = styled('div')(() =>
  css({
    gridColumn: '2 / span 10'
  })
);

const IntroWrapper = styled('div')(() =>
  css({
    gridRow: '1',
    gridColumn: '2 / span 7',
    pb: 80,
  })
);

const Sections = styled('div')(() =>
  css({
    gridRow: '1',
    gridColumn: '10 / span 3',
  })
);

const SectionList = styled('ul')(() =>
  css({
    mt: 20,
  })
);

const SectionItem = styled('li')(() =>
  css({
    width: '100%',
      pb: '4px',
  })
);

const Details = styled('div')(() =>
  css({
    gridRow: 2,
    gridColumn: 2,
    display: 'flex',
    flexDirection: 'column',
  })
);

const ProjectWrapper = styled('div')(() =>
  css({
    width: '100%',
  })
);

const ImageWrapper = styled('div')(() =>
  css({
    gridColumn: '1 / span 2',
    gridRow: 1,
  })
);

const Project = styled('div')(() =>
  css({
    gridRow: 2,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    rowGap: 24,
  })
);

const Bottom = styled('div')(() =>
  css({
    gridRow: 3,
    gridColumn: '9 / span 3',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  })
);

const Top = styled('div')(() =>
  css({
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    py: 40,
    borderBottom: '2px solid white',
  })
);

const Inner = styled('div')(() =>
  css({
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 40,
    '&:before': {
      position:'absolute',
      backgroundColor:'white',
      content: "' '",
      display: 'block',
      height: '2px',
      width: '100%',
      transition: 'ease all 0.3s',
      pointerEvents: 'none',
      opacity: 1,
      bottom: 0,
      left: 0,
    },
  })
);

const Toggle = styled('div')(css({
  background: 'transparent',
  border: 'none',
}));

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    svg: {
      transition: 'ease all 0.3s',
    },
    '&:hover': {
      svg: {
        transform: 'translateX(6px)',
      },
    },
    a: {
      textDecoration: "none",
      fontSize: 2,
      lineHeight: 2,
      color: "charcoal",
      '&:before': {
        position:'relative',
        backgroundColor:'charcoal',
        content: "' '",
        display: 'block',
        height: '2px',
        width: '100%',
        transform: 'translateY(40px)',
        transition: 'ease all 0.3s',
        pointerEvents: 'none',
        opacity: 0,
      },
      '&:hover': {
        '&:before': {
          transform: 'translateY(28px)',
          opacity: 1,
        },
      },
    },
  })
);

const Pill = styled('div')(css({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  columnGap: '4px',
  py: '3.5px',
  px: '12px',
  bg: 'charcoal',
  zIndex: 99999,
  textTransform: 'uppercase',
  color: 'white',
  borderRadius: 32,
  fontSize: 0,
  lineHeight: 2,
}))

export {
  Container,
  Wrapper,
  Top,
  Inner,
  Toggle,
  IntroWrapper,
  Sections,
  ProjectWrapper,
  Project,
  Bottom,
  SectionList,
  SectionItem,
  Details,
  ImageWrapper,
  LinkWrapper,
  Pill
};
