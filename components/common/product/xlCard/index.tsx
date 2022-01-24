import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import CheckMarkIcon from "@components/icons/checkmark";
import CrossIcon from "@components/icons/cross";
import ArrowDown from "@components/icons/arrowDown";
import ArrowUp from "@components/icons/arrowUp";
import ProductImg from "public/placeholder-product-image.jpg";
import {
  ActionBtn,
  ActionBtnContainer,
  CardImg,
  Container,
  DescCell,
  GridCardImgContainer,
  ImgCell,
  ListCardImgContainer,
  ProductListTitle,
  RowDetailButton,
  TableRow,
  Wrapper,
} from "./styles";

const ProductCard = ({
  product,
  displayMode = "grid",
  isSelected = false,
  toggleProductSelect,
}) => {
  const [detailShown, setDetailShown] = useState(false);
  if (displayMode === "list") {
    return (
      <TableRow detailView={detailShown}>
        <div>
          <Link href={product.uri}>
            <ProductListTitle>
              <Text as="h3" variant="Display-XSmall" altFont={true}>
                {product.title}
              </Text>
            </ProductListTitle>
          </Link>
        </div>
        <div>
          <Text as="h4" variant="Body-Small">
            Available In
          </Text>
        </div>
        <div>
          <Text as="h4" variant="Body-Small">
            Collection Name
          </Text>
        </div>
        <DescCell>
          <Text as="h4" variant="Body-Small">
            {product.subHeading}
          </Text>
        </DescCell>
        <ImgCell detailView={detailShown}>
          <ListCardImgContainer>
            <CardImg detailView={detailShown}>
              <Link href={product.uri}>
                <a>
                  <Image src={ProductImg} layout="fill" alt="Product-1" />
                </a>
              </Link>
            </CardImg>
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
                    <CheckMarkIcon color="white" />
                  </span>
                )}
                {isSelected && (
                  <span className="hovered">
                    <CrossIcon />{" "}
                    <Text color="white" variant="Body-XSmall">
                      Remove Selection
                    </Text>
                  </span>
                )}
              </ActionBtn>
            </ActionBtnContainer>
          </ListCardImgContainer>
        </ImgCell>
        <RowDetailButton detailView={detailShown}>
          <button
            onClick={() => {
              setDetailShown(!detailShown);
            }}
          >
            {!detailShown && <ArrowDown />}
            {detailShown && <ArrowUp />}
          </button>
        </RowDetailButton>
      </TableRow>
    );
  }
  return (
    <Wrapper>
      <Container>
        <GridCardImgContainer>
          <Link href={product.uri}>
            <a>
              <Image src={product.img1} alt="Product-1" />
            </a>
          </Link>
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
