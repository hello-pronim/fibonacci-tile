import Image from "next/image";
import Link from "next/link";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import CheckMarkIcon from "@components/icons/checkmark";
import CrossIcon from "@components/icons/cross";
import {
  ActionBtnContainer,
  CardSubTitle,
  CardTitle,
  GridCardImgContainer,
} from "../card/styles";

import {
  Wrapper,
  Container,
  ActionBtn,
  ConfirmActionBtn,
  ConfirmActionBtnContainer,
} from "./styles";

const SelectedProductCard = ({
  product,
  isSelected = false,
  toggleProductSelect,
  totalSelectedProducts = 0,
  confirmSample = false,
  activeCollectionSlug = null,
}) => {
  let collectionSlug = activeCollectionSlug
    ? activeCollectionSlug
    : product.collections[0].slug;
  return (
    <Wrapper>
      <Container>
        {totalSelectedProducts > 6 && (
          <div className="overlay">
            Choose upto six, samples remove one and the confirm your choosen
            samples
          </div>
        )}
        <GridCardImgContainer>
          {product?.thumbImageList?.[0]?.url && (
            <Link href={`/terrazzo/${collectionSlug}/${product.slug}`}>
              <a>
                <Image
                  src={product?.thumbImageList?.[0].url}
                  alt={product.title}
                  width={product?.thumbImageList?.[0].width}
                  height={product?.thumbImageList?.[0].height}
                />
              </a>
            </Link>
          )}
          {!confirmSample && (
            <ActionBtnContainer>
              <ActionBtn
                checked={isSelected}
                onClick={() => toggleProductSelect(product)}
              >
                {!isSelected && (
                  <span className="hovered">
                    <AddIcon color="white" />{" "}
                    <Text color="white" variant="Body-XSmall">
                      Confirm Sample
                    </Text>
                  </span>
                )}
                {!isSelected && (
                  <span className="initial">
                    <AddIcon color="black" />
                  </span>
                )}
                {isSelected && (
                  <span className="initial">
                    <CheckMarkIcon color="white" />
                  </span>
                )}
                {isSelected && (
                  <span className="hovered">
                    <CrossIcon />{" "}
                    <Text color="white" variant="Body-XSmall">
                      Remove Sample
                    </Text>
                  </span>
                )}
              </ActionBtn>
            </ActionBtnContainer>
          )}
          {confirmSample && (
            <ConfirmActionBtnContainer>
              <ConfirmActionBtn>
                <span className="initial">
                  <CheckMarkIcon color="white" />
                </span>
              </ConfirmActionBtn>
            </ConfirmActionBtnContainer>
          )}
        </GridCardImgContainer>
        <CardTitle
          as="h3"
          variant="Display-XSmall"
          altFont={true}
          marginTop="25px"
        >
          <Link href={product.uri}>
            <a>{product.title}</a>
          </Link>
        </CardTitle>
        <CardSubTitle as="h4" variant="Body-Small">
          {product.subHeading}
        </CardSubTitle>
      </Container>
    </Wrapper>
  );
};

export default SelectedProductCard;
