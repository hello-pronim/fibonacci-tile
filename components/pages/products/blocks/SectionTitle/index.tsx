import { Container, Title } from "./styles";

function SectionTitle({ title, show }) {
  return (
    <Container active={show}>
      <Title as="h1" variant="Display-XSmall" color="secondary" altFont={true}>
        {title}
      </Title>
    </Container>
  );
}

export default SectionTitle;
