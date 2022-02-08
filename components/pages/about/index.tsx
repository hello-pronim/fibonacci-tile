import AboutHeader from "./Header";
import Hero from "./hero";
import BodyContent from "./bodyContent";
import { Container } from "./styles";

const AboutPage = ({ pageData, notifications }) => {
  return (
    <Container>
      <AboutHeader mode="dark" notifications={notifications} />
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
