import Header from "@components/common/header";
import { HeaderContainer } from "./styles";

const ProjectsHeader = ({ mode = "light" }) => {
  return (
    <HeaderContainer>
      <Header mode={mode} position="absolute" notifications={null} />
    </HeaderContainer>
  );
};

export default ProjectsHeader;
