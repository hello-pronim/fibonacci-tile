import Hero from "./hero";
import BodyContent from "./bodyContent";
import Header from "../generic/Header";
import { Container } from "../generic/styles";

const AboutPage = ({ pageData, notifications }) => {
  return (
    <Container>
      <Header mode="dark" notifications={notifications} />
      <Hero
        headingLeft={pageData.pageHeading}
        textRight={pageData.rightHeader}
      />
      {pageData?.ourStoryComponents?.length > 0 && (
        <BodyContent pageComponents={pageData?.ourStoryComponents} />
      )}
    </Container>
  );
};

export default AboutPage;
