import css from '@styled-system/css';
import Text from '@components/common/typography';
import styled from '@emotion/styled';
import theme from 'styles/theme';

interface ActionBtnProps {
  checked: boolean;
}

const Wrapper = styled('div')(
  css({
    width: '100%',
    position: 'relative',
  })
);

const Container = styled('div')(
  ({ compact, hoverBG }: { compact: boolean; hoverBG?: string }) =>
    css({
      padding: compact ? '0' : '38px 18px',
      textAlign: 'center',
      transition: 'ease all 0.4s',
      backgroundColor: 'rgba(237, 236, 232, 0)',
      '&:hover': {
        backgroundColor:
          !compact && hoverBG ? hoverBG : 'rgba(237, 236, 232, 1.000)',
        div: {
          boxShadow: 'none',
        },
      },
    })
);

// const Container = styled('div')(
//   css({
//     padding: '38px',
//     textAlign: 'center',
//     transition: 'background-color ease 0.3s',
//     '.overlay': {
//       visibility: 'hidden',
//       opacity: 0,
//       height: '100%',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       zIndex: '9999',
//       margin: '0 30px',
//       position: 'absolute',
//       transition: 'background-color ease 0.3s',
//     },
//     '&:hover': {
//       backgroundColor: theme.colors.cold,
//       '.overlay': {
//         visibility: 'visible',
//         opacity: 0.8,
//         backgroundColor: theme.colors.cold,
//       },
//     },
//   })
// );

const ActionBtn = styled('button')(({ checked }: ActionBtnProps) =>
  css({
    display: 'block',
    textTransform: 'uppercase',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    cursor: 'pointer',
    backgroundColor: checked ? theme.colors.charcoal : theme.colors.white,
    // border: checked ? "none" : "1px solid #B0ABA7",
    border: checked
      ? `1px solid ${theme.colors.charcoal}`
      : '1px solid #B0ABA7',
    transition: 'ease all 0.3s',
    '.hovered': {
      position: 'absolute',
      visibility: 'none',
      opacity: 0,
    },
    '.initial': {
      display: 'flex',
      justifyContent: 'center',
    },
    '&:hover': {
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '167px',
      height: 'inherit',
      borderRadius: '32px',
      color: theme.colors.white,
      backgroundColor: theme.colors.charcoal,
      '.hovered': {
        display: 'flex',
        opacity: 1,
        transitionDelay: '0.4s',
        transition: 'ease all 0.3s',
        span: {
          marginLeft: '5px',
        },
      },
      '.initial': {
        display: 'none',
      },
    },
  })
);

const ConfirmActionBtn = styled('button')(
  css({
    display: 'block',
    textTransform: 'uppercase',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    cursor: 'pointer',
    backgroundColor: theme.colors.charcoal,
  })
);

const ConfirmActionBtnContainer = styled('div')(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    bottom: '-20px',
    height: '39px',
    width: '39px',
  })
);

export {
  Wrapper,
  Container,
  ActionBtn,
  ConfirmActionBtnContainer,
  ConfirmActionBtn,
};
