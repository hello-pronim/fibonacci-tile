import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";
import theme from "styles/theme";

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
      bg: "background",
      overflow:'hidden',
      alignItems: 'flex-start',
      rowGap: 120,
      [theme.mediaQueries.medium]: {
        rowGap: 60,
      },
      
      pt: 60,
      [theme.mediaQueries.medium]: {
        pt: 160,
      },
      pb: 80,
  })
);

const LeftCol = styled("div")(() =>
  css({
      gridColumn: ['1 / span 2', '1 / span 6', '1 / span 6', '2 / span 5'],
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      rowGap: [186],
      h3: {
        fontSize: 32,
        [theme.mediaQueries.medium]: {
          fontSize: 44,
        },
      },
  })
);

const RightCol = styled("div")(() =>
  css({
      gridRow: [1],
      gridColumn: ['1 / span 2', '1 / span 6', '1 / span 6', '8 / span 12'],
      display: 'flex',
      rowGap: 120,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      [theme.mediaQueries.medium]: {
        rowGap: 186,
      },
      h3: {
        fontSize: 32,
        [theme.mediaQueries.medium]: {
          fontSize: 44,
        },
      },
  })
);

const ImageWrapper = styled("div")(() =>
  css({
    position:'relative',
      display: 'flex',

      [theme.mediaQueries.medium]: {
        width: 'calc(100% + 160px)',
        marginRight: -80,
      },
      div: {
        width: '100%',
      }
  })
);

const BottomRow = styled("div")(css({
  display: 'flex',
  rowGap: 40,
  flexDirection: 'column',
  paddingTop: [20, 20, 30],
  gridColumn: ['1 / span 2', '1 / span 6', '1 / span 6', ' 2 / span 12'],
  h3: {
    fontSize: [7, 7, 7, 8, 9],
  }
}))

const Segment = styled("div")(css({
  h6: {
    pt: 16,
  },
  '& > *:not(:last-child)': {
    mb: '16px !important',
  },
}))

export {
  Container,
  LeftCol,
  RightCol,
  ImageWrapper,
  Segment,
  BottomRow,
};
