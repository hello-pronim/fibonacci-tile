import { css } from "@styled-system/css";
import BreadCrumb from "@components/common/breadcrumb";
import Hero from "./hero";
import BodyContent from "./bodyContent";
import Header from "../generic/Header";
import { Container } from "../generic/styles";

const AboutPage = ({ pageData, notifications }) => {
  const crumbs = [{ path: "/", name: "Home" }, { name: "Our Story" }];
  return (
    <Container>
      <Header mode="dark" notifications={notifications} />
      <div
        css={css({
          maxWidth: "2560px",
          pl: "32px",
          pt: 92,
          pb: 0,
        })}
      >
        <BreadCrumb crumbs={crumbs} pt={0} />
      </div>
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
