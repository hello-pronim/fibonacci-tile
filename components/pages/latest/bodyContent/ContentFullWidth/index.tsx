import React from 'react';
import css from "@styled-system/css";
import Container from "@components/common/layout/container";
import { TextCol } from "../styles";
import richTextRenderer from "@utils/richTextRenderer";

const ContentFullWidth = ({ content }) => {  
  const { contentText } = content;

  return (
    <Container css={css({ bg: "#FFFFF8", py: 120 })}>
      <TextCol>{richTextRenderer(contentText)}</TextCol>
    </Container>
  );
};
export default ContentFullWidth;
