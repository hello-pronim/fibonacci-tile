import Header from "@components/common/header";
import { HeaderContainer } from "./styles";

const GenericHeader = ({
  mode = "light",
  notifications = null,
  disableSelectionCart = false,
}) => {
  return (
    <HeaderContainer>
      <Header
        mode={mode}
        position="absolute"
        notifications={notifications}
        disableSelectionCart={disableSelectionCart}
      />
    </HeaderContainer>
  );
};

export default GenericHeader;
