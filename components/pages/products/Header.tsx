import Header from "@components/common/header";
import { HeaderContainer } from "./styles";

const ProductsHeader = ({ mode = "light" }) => {
  return (
    <HeaderContainer>
      <Header mode={mode} position="absolute" />
    </HeaderContainer>
  );
};

export default ProductsHeader;
