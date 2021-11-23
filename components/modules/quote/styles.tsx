import css from "@styled-system/css";
import styled from "@emotion/styled";
import Cntnr from "@components/common/layout/container";

const Container = styled(Cntnr)(() =>
  css({
      bg: "stone",
      py: 114,
  })
);

const Wrapper = styled("div")(() =>
  css({
      gridColumn: ['1 / span 2', '1 / span 6',  '2/ span 10'],
      rowGap: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      maxWidth: 928,
      mx: 'auto',
  })
);
export {
  Container,
  Wrapper
};
