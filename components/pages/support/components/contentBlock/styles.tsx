import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import theme from 'styles/theme';

export interface containerProps {
}

export interface navItemProps {
  mode: string;
}

export interface NavIconProps {
  isOpen: boolean;
}

const Container = styled(Cntnr)(() =>
  css({
      bg: "white",
      overflow:'hidden',
      py: 80,
      rowGap: 40,
  })
);

const Wrapper = styled("div")(() =>
  css({
      gridColumn: ['1 / span 2', '1 / span 6', '1 / span 10', '8 / span 4'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      rowGap: 32,
      a: {
        width: '100%',
        [theme.mediaQueries.xSmall]: {
          width: 'inherit',
        },
      },
  })
);

const ImageWrapper = styled("div")(() =>
  css({
      gridRow: 1,
      gridColumn: ['1 / span 2', '1 / span 6' , '1 / span 10', '2 / span 5'],
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginRight: ['auto','auto', 'auto', -80],
      div: {
        width: '100%',
      },
  })
);

export {
  Container,
  Wrapper,
  ImageWrapper,
};
