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

const ProductCard = ({
  product,
  isSelected = false,
  toggleProductSelect,
  activeCollectionSlug = null,
}) => {
  let collectionSlug = activeCollectionSlug
    ? activeCollectionSlug
    : product.collections[0].slug;

  return (
    <Wrapper>
      <Container>
        <GridCardImgContainer>
          {product?.thumbImageSingle?.[0]?.url && (
            <Link href={`/terrazzo/${collectionSlug}/${product.slug}`}>
              <a>
                <Image
                  placeholder="blur"
                  blurDataURL={product.thumbImageSingle[0].url}
                  src={product.thumbImageSingle[0].url}
                  alt={product.title}
                  width={product.thumbImageSingle[0].width}
                  height={product.thumbImageSingle[0].height}
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
