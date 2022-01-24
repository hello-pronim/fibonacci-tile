import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import ArrowButton from "@components/common/button/arrowButton";
import CheckMarkIcon from "@components/icons/checkmark";
import CrossIcon from "@components/icons/cross";
import ArrowDown from "@components/icons/arrowDown";
import ArrowUp from "@components/icons/arrowUp";
import {
  ActionBtn,
  ActionBtnContainer,
  AvailableBox,
  CardImg,
  CardSubTitle,
  CardTitle,
  CollectionNameBox,
  Container,
  Description,
  DescriptionBox,
  DisplayNameBox,
  Details,
  DetailsBoxLeft,
  DetailsBoxRight,
  GridCardImgContainer,
  Headline,
  ImgCell,
  ListCardImgContainer,
  Listings,
  NameBox,
  ProductDescriptionBox,
  ProductListTitle,
  ProductName,
  ProductInfoBox,
  ProductsInfoDetails,
  ProductsInfoRow,
  RowDetailButton,
  TableRow,
  TechnicalSpecification,
  TitleText,
  Wrapper,
} from "./styles";

const ProductCard = ({
  product,
  displayMode = "grid",
  isSelected = false,
  toggleProductSelect,
  compact = false,
}) => {
  const [detailShown, setDetailShown] = useState(false);
  if (displayMode === "list") {
    return (
      <TableRow detailView={detailShown}>
        <DetailsBoxLeft detailView={detailShown}>
          <ProductsInfoRow>
            <ProductName>
              <div>
                <Link href={product.uri}>
                  <ProductListTitle>
                    <Text as="h3" variant="Display-XXSmall" altFont={true}>
                      {product.title}
                    </Text>
                  </ProductListTitle>
                </Link>
              </div>
            </ProductName>
            <CollectionNameBox>
              <DisplayNameBox>
                <AvailableBox>
                  <div>
                    <Text as="h4" variant="Body-Small">
                      Tiles &amp; Slabs
                    </Text>
                  </div>
                </AvailableBox>
                <NameBox>
                  <div>
                    <Text as="h4" variant="Body-Small">
                      Collection Name
                    </Text>
                  </div>
                </NameBox>
              </DisplayNameBox>
            </CollectionNameBox>
            <DescriptionBox detailView={detailShown}>
              <div>
                <Text as="h4" variant="Body-Small">
                  Description — one line truncated ...
                </Text>
              </div>
            </DescriptionBox>
          </ProductsInfoRow>
          <ProductsInfoDetails>
            <ProductInfoBox>
              <Details detailView={detailShown}>
                <div>
                  <TitleText color="white" variant="Body-Regular">
                    # New release
                  </TitleText>
                </div>
                <Description detailView={detailShown}>
                  <Text variant="Body-Regular">
                    Tincidunt amet ullamcorper et consequat male su ada. Integer
                    elit ut varius in at porttitor. Id pu rus amet feugiat non
                    porta. Commodo integer feugiat nunc, venenatis lobortis eu
                    dictum. Pellentesque sit tortor congue neque, odio ultrices
                    amet.
                  </Text>
                </Description>
                <ArrowButton
                  mode="dark"
                  title="View product details"
                  link="http://localhost:3000/products"
                />
              </Details>
            </ProductInfoBox>
            <ProductDescriptionBox>
              <Details detailView={detailShown}>
                <Listings>
                  <ul>
                    <li>
                      <Headline>Material and composition</Headline>
                      Cursus velit adipiscing suspendisse semper. Cursus velit
                      adipiscing suspendisse semper
                    </li>
                    <li>
                      <Headline>Finish and appearance</Headline>
                      Cursus velit adipiscing suspendisse semper
                    </li>
                    <li>
                      <Headline>Sizes</Headline>
                      Tiles 400x400x20mm & 600x600x20mm <br />
                      Slabs 400x400x20mm
                    </li>
                    <li>
                      <Headline>Applications</Headline>
                      Cursus velit adipiscing suspendisse semper
                    </li>
                  </ul>
                </Listings>
                <TechnicalSpecification href="#">
                  Click here to copy technical specification{" "}
                </TechnicalSpecification>
              </Details>
            </ProductDescriptionBox>
          </ProductsInfoDetails>
        </DetailsBoxLeft>
        <DetailsBoxRight>
          <ImgCell detailView={detailShown}>
            <ListCardImgContainer>
              <CardImg detailView={detailShown}>
                {product?.img1 && (
                  <Link href={product.uri}>
                    <a>
                      <Image src={product?.img1} alt="Product-1" />
                    </a>
                  </Link>
                )}
              </CardImg>
              <ActionBtnContainer>
                <ActionBtn
                  checked={isSelected}
                  onClick={() => toggleProductSelect(product)}
                >
                  {!isSelected && (
                    <span className="hovered">
                      <AddIcon color="white" />{" "}
                      <Text color="white" variant="Body-XSmall">
                        Add To Selection
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
        </DetailsBoxRight>
      </TableRow>
    );
  }

  return (
    <Wrapper>
      <Container>
        <GridCardImgContainer>
          {product?.img1 && (
            <Link href={product.uri}>
              <a>
                <Image src={product?.img1} alt="Product-1" />
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
                  <AddIcon color="white" />{" "}
                  <Text color="white" variant="Body-XSmall">
                    Add To Selection
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
                    Remove Selection
                  </Text>
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

export default ProductCard;
