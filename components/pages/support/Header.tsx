import Header from "@components/common/header";
import { HeaderContainer } from "./styles";

const SupportHeader = ({ mode = "light" }) => {
  return (
    <HeaderContainer>
      <Header mode={mode} position="absolute" />
    </HeaderContainer>
  );
};

export default SupportHeader;
