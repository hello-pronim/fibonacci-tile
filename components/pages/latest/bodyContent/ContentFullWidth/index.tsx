import css from "@styled-system/css";
import Container from "@components/common/layout/container";
import { TextCol } from "../styles";

const ContentFullWidth = ({ content }) => {
  const {contentText} = content;
  return (
    <Container css={css({ bg: "#FFFFF8" })}>
      <TextCol dangerouslySetInnerHTML={{ __html: contentText }} />
    </Container>
  );
};
export default ContentFullWidth;
