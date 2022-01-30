import Image from "next/image";
import AddIcon from "@components/icons/add";
import CheckMarkIcon from "@components/icons/checkmark";
import {
  ActionBtn,
  ActionBtnContainer,
  CardTitle,
  Container,
  GridCardImgContainer,
  Wrapper,
} from "./styles";

const ProductSelectItem = ({
  product,
  selected = false,
  handleProductSelect,
}) => {
  return (
    <Wrapper>
      <Container>
        <GridCardImgContainer>
          {product?.img1 && <Image src={product?.img1} alt={product.title} />}
          <ActionBtnContainer>
            <ActionBtn
              selected={selected}
              onClick={() => handleProductSelect(product.id)}
            >
              {!selected && (
                <span className="initial">
                  <AddIcon color="black" />
                </span>
              )}
              {selected && (
                <span className="hovered">
                  <CheckMarkIcon color="white" />
                </span>
              )}
            </ActionBtn>
          </ActionBtnContainer>
        </GridCardImgContainer>
        <CardTitle
          as="h3"
          variant="Display-XSmall"
          altFont={true}
          marginTop="25px"
        >
          {product.title}
        </CardTitle>
      </Container>
    </Wrapper>
  );
};

export default ProductSelectItem;
