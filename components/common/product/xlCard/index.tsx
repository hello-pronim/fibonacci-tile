import Image from "next/image";
import Link from "next/link";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import CheckMarkIcon from "@components/icons/checkmark";
import CrossIcon from "@components/icons/cross";
import {
  ActionBtn,
  ActionBtnContainer,
  Container,
  GridCardImgContainer,
  Wrapper,
} from "./styles";

const ProductCard = ({ product, isSelected = false, toggleProductSelect }) => {
  return (
    <Wrapper>
      <Container>
        <GridCardImgContainer>
          {product.thumbImage?.[0].url && (
            <Link href={`/products/${product.slug}`}>
              <a>
                <Image
                  src={product.thumbImage[0].url}
                  alt="Product-1"
                  width="288"
                  height="288"
                />
              </a>
            </Link>
          )}
          <ActionBtnContainer>
            <ActionBtn
              checked={isSelected}
              onClick={() => toggleProductSelect(product)}
            >
              {!isSelected && (
                <span className="hovered">
                  <AddIcon color="white" />
                  <Text color="white" variant="Body-XSmall">
                    Add To Selection
                  </Text>
                </span>
              )}
              {!isSelected && (
                <span className="initial">
                  <AddIcon color="black" width={38} />
                </span>
              )}
              {isSelected && (
                <span className="initial">
                  <CheckMarkIcon color="white" width={38} />
                </span>
              )}
              {isSelected && (
                <span className="hovered">
                  <CrossIcon />
                  <Text color="white" variant="Body-XSmall">
                    Remove Selection
                  </Text>
                </span>
              )}
            </ActionBtn>
          </ActionBtnContainer>
        </GridCardImgContainer>
      </Container>
    </Wrapper>
  );
};

export default ProductCard;
