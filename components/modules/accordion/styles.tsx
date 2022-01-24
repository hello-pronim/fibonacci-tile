import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import { useSpring, animated } from 'react-spring'


const Container = styled(Cntnr)(() =>
  css({
      bg: "#E2E9EC",
      py: 114,
  })
);

const Wrapper = styled('div')(() =>
  css({
    gridColumn: ['1 / span 2', '1 / span 2','1 / span 6', '2 / span 10']
  })
);

const Item = styled('div')(() =>
  css({
    width: '100%',
  })
);

const Top = styled('div')(() =>
  css({
    position: 'relative',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: 40,
    borderBottom: '2px solid white',
    cursor: 'pointer',
  })
);

const Inner = styled(animated.div)(() =>
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

export {
  Container,
  Wrapper,
  Item,
  Top,
  Inner,
  Toggle
};
