import css from '@styled-system/css';
import styled from '@emotion/styled';
import Cnt from '@components/common/layout/container';
import theme from 'styles/theme';

const Container = styled(Cnt)(() =>
  css({
    py: '0px',
    [theme.mediaQueries.small]: {
      paddingTop: 0,
      paddingBottom: '240px',
    },
  })
);

const Wrapper = styled('div')(() =>
  css({
    gridColumn: ['1 / span 2', '1 / span 6', '1 / span 6', '2 / span 10'],
    // gridColumn: ['2 / span 10'],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 999,
  })
);

const FormHeader = styled('div')(
  css({
    display: 'block',
    width: '100%',
    paddingBottom: '80px',
    [theme.mediaQueries.small]: {
      paddingBottom: '160px',
    },
  })
);

const FormHeaderWrapper = styled('div')(
  css({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    alignItems: 'center',
  })
);

const FormHeaderLeft = styled('div')(
  css({
    gridColumn: '1/span 12',
    py: '40px',
    [theme.mediaQueries.small]: {
      gridColumn: '1/span 4',
      py: 0,
    },
  })
);

const FormTitle = styled('div')(
  css({
    fontFamily: 'Canela',
    fontSize: '24px',
    lineHeight: '33.6px',
    [theme.mediaQueries.small]: {
      fontSize: '42px',
      lineHeight: '54.6px',
    },
    color: theme.colors.charcoal,
  })
);

const FormHeaderRight = styled('div')(
  css({
    gridColumn: '1/span 12',
    [theme.mediaQueries.small]: {
      gridColumn: '9/span 4',
    },
  })
);

const FormDescription = styled('div')(
  css({
    fontFamily: 'Everett',
    fontSize: '16px',
    lineHeight: '22.4px',
    [theme.mediaQueries.small]: {
      fontSize: '20px',
      lineHeight: '28px',
    },
    color: theme.colors.charcoal,
  })
);

const FormBody = styled('div')(
  css({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  })
);

const Form = styled('form')(
  css({
    gridColumn: '1/span 12',
    [theme.mediaQueries.small]: {
      gridColumn: '1/span 8',
    },
  })
);

const FormGroup = styled('div')(
  css({
    width: '100%',
    paddingTop: '16px',
    paddingBottom: '40px',
    [theme.mediaQueries.small]: {
      paddingBottom: '80px',
    },
    "& .bttnArrow": {
      width: "100%",
      textAlign: "left",
      [theme.mediaQueries.sSmall]: {
        width: "auto",
        textAlign: "unset",
      },
    },
  })
);

const FormGroupTitle = styled('div')(
  css({
    fontFamily: 'Canela',
    fontSize: '24px',
    lineHeight: '33.6px',
    [theme.mediaQueries.small]: {
      fontSize: '42px',
      lineHeight: '54.6px',
    },
    color: theme.colors.charcoal,
    marginBottom: '40px',
  })
);

const Row = styled('div')(
  ({ borderBottom = false }: { borderBottom?: boolean }) =>
    css({
      width: '100%',
      borderBottom: borderBottom ? '1px solid #D6CEC5' : '',
      paddingTop: borderBottom ? 15 : 0,
      mb: borderBottom ? 10 : 0,
      [theme.mediaQueries.small]: {
        display: 'flex',
        gap: '16px',
      },
    })
);

const Col = styled('div')(
  css({
    width: '100%',
    [theme.mediaQueries.small]: {
      flex: 1,
    },
  })
);

const AddProductButton = styled('div')(
  css({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  })
);

const AddProductButtonText = styled('span')(
  css({
    fontSize: '14px',
    lineHeight: '18.2px',
  })
);

const FormSubmitDetails = styled('div')(() =>
  css({
    background: theme.colors.stoneTints[8],
    padding: '35px',
    maxWidth: '650px',
    marginBottom: '15px',
  })
);

export {
  AddProductButton,
  AddProductButtonText,
  Col,
  Container,
  Form,
  FormBody,
  FormDescription,
  FormGroup,
  FormGroupTitle,
  FormHeader,
  FormHeaderLeft,
  FormHeaderRight,
  FormHeaderWrapper,
  FormTitle,
  Row,
  Wrapper,
  FormSubmitDetails,
};
