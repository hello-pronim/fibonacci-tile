import React from "react";

import Hero from "./hero";
import AboutHeader from "./Header";
import { Container } from "./styles";

const AboutPage = () => {
  return (
    <Container>
      <AboutHeader mode="dark" />
      <Hero />
    </Container>
  );
};
export default AboutPage;
