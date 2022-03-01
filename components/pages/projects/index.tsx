import { css } from "@styled-system/css";
import BreadCrumb from "@components/common/breadcrumb";
import Hero from "./hero";
import ProjectList from "./ProjectList";
import ProjectsHeader from "./Header";
import { Container } from "./styles";

const ProjectPage = ({ heroDetails, projects, types, notifications }) => {
  const crumbs = [{ path: "/", name: "Home" }, { name: "In Use" }];
  return (
    <Container>
      <ProjectsHeader mode="dark" notifications={notifications} />
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
      <Hero heroDetails={heroDetails} />
      <ProjectList projects={projects} types={types} />
    </Container>
  );
};

export default ProjectPage;
