import Header from "@components/common/header";
import { HeaderContainer } from "./styles";

const GenericHeader = ({ mode = "light", notifications = null }) => {
  return (
    <HeaderContainer>
      <Header mode={mode} position="absolute" notifications={notifications} />
    </HeaderContainer>
  );
};

export default GenericHeader;
