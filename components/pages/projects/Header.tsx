import Header from "@components/common/header";
import { HeaderContainer } from "./styles";

const ProjectsHeader = ({ mode = "light", notifications }) => {
  return (
    <HeaderContainer>
      <Header mode={mode} notifications={notifications} />
    </HeaderContainer>
  );
};

export default ProjectsHeader;
