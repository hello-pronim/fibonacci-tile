import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SizeDisplay from "./SizeDisplay";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import ArrowButton from "@components/common/button/arrowButton";
import CheckMarkIcon from "@components/icons/checkmark";
import CrossIcon from "@components/icons/cross";
import ArrowDown from "@components/icons/arrowDown";
import ArrowUp from "@components/icons/arrowUp";
import theme from "styles/theme";
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
  ProductTitleLink,
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
import { css } from "@emotion/react";
import Arrow from "@components/common/icons/arrow";

interface CardProps {
  product: any;
  displayMode?: string;
  isSelected?: boolean;
  toggleProductSelect?: any;
  compact?: boolean;
  activeCollectionSlug?: any;
  hoverBG?: string;
}

const ProductCard = ({
  product,
  displayMode = "grid",
  isSelected = false,
  toggleProductSelect,
  compact = false,
  activeCollectionSlug = null,
  hoverBG,
}: CardProps) => {
  const [detailShown, setDetailShown] = useState(false);
  const [copyProductId, setCopyProductId] = useState(undefined);

  const getProductVariationsText = (productVariations) => {
    let text = "";
    let sizeArray = [];

    productVariations.forEach((variant: any) => {
      variant.productSize.forEach((size: any) => {
        if (!size.parent) {
          const checkIndex = sizeArray.findIndex((item) => item.id === size.id);
          if (checkIndex === -1) {
            sizeArray.push({
              ...size,
              child: [],
            });
          }
        } else {
          let parentIndex = sizeArray.findIndex(
            (item) => item.id === size.parent.id
          );
          sizeArray[parentIndex].child.push(size);
        }
      });
    });
    sizeArray.forEach((size) => {
      text += size.title + " ";
      size?.child.forEach((cSize, index) => {
        text += cSize.title;
        text +=
          size.child.length - index === 2
            ? " & "
            : size.child.length > 2 && index !== size.child.length - 1
            ? ", "
            : "";
      });
      text += "\n";
    });

    return text;
  };

  function fallbackCopyTextToClipboard(text) {
    let textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      let successful = document.execCommand("copy");
      let msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  }

  const handleTechnicalSpecificationCopy = (product) => {
    let copyText = "";
    let productVariationsText = getProductVariationsText(
      product.productVariations
    );

    copyText +=
      "Material and composition: " + product.materialsComposition + "\n";
    copyText += "Finish and appearance: " + product.finishAppearance + "\n";
    copyText += "Sizes:\n";
    copyText += productVariationsText;
    copyText += "Applications: " + product.applications + "\n";

    setCopyProductId(product.id);

    if (navigator.clipboard !== undefined) {
      // Chrome
      navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
      });
    } else {
      fallbackCopyTextToClipboard(copyText);
      return;
    }
  };

  if (displayMode === "list") {
    return (
      <TableRow detailView={detailShown}>
        <DetailsBoxLeft detailView={detailShown}>
          <ProductsInfoRow>
            <ProductName>
              <div>
                <Link href={`/terrazzo/${product.slug}`} passHref>
                  <ProductListTitle>
                    <Text as="h3" variant="Display-XSmall" altFont={true}>
                      {product.title}
                    </Text>
                  </ProductListTitle>
                </Link>
              </div>
            </ProductName>
            <CollectionNameBox
              onClick={() => {
                setDetailShown(!detailShown);
              }}
            >
              <DisplayNameBox>
                <AvailableBox>
                  <div>
                    <Text as="h4" variant="Body-Regular">
                      {product.productCategories[0].title}
                    </Text>
                  </div>
                </AvailableBox>
                <NameBox>
                  <div>
                    <Text as="h4" variant="Body-Regular">
                      {product.collections[0].title}
                    </Text>
                  </div>
                </NameBox>
              </DisplayNameBox>
            </CollectionNameBox>
            <DescriptionBox
              onClick={() => {
                setDetailShown(!detailShown);
              }}
            >
              <div>
                <Text
                  as="h4"
                  variant="Body-Regular"
                  dangerouslySetInnerHTML={{ __html: product.subline }}
                />
              </div>
            </DescriptionBox>
          </ProductsInfoRow>
          <ProductsInfoDetails>
            <ProductInfoBox>
              <Details detailView={detailShown}>
                <div>
                  {product.label && (
                    <TitleText color="white" variant="Body-Regular">
                      # {product.label}
                    </TitleText>
                  )}
                </div>
                <Description detailView={detailShown}>
                  <Text
                    variant="Body-Regular"
                    dangerouslySetInnerHTML={{
                      __html: product.projectIntroduction,
                    }}
                  />
                </Description>
                <ArrowButton
                  mode="dark"
                  title="View product details"
                  link={`/terrazzo/${product.slug}`}
                />
              </Details>
            </ProductInfoBox>

            <ProductDescriptionBox>
              <Details detailView={detailShown}>
                <Listings>
                  <ul>
                    <li>
                      <Headline>Material and composition</Headline>
                      {product.materialsComposition}
                    </li>
                    <li>
                      <Headline>Finish and appearance</Headline>
                      {product.finishAppearance}
                    </li>
                    <li>
                      <Headline>Sizes</Headline>
                      <SizeDisplay
                        productVariations={product.productVariations}
                      />
                    </li>
                    <li>
                      <Headline>Applications</Headline>
                      {product.applications}
                    </li>
                    <li>
                      <TechnicalSpecification
                        onClick={() =>
                          handleTechnicalSpecificationCopy(product)
                        }
                      >
                        <span style={{ marginRight: "12px" }}>
                          {copyProductId === product.id
                            ? "Copied to your clipboard"
                            : "Click here to copy technical specification"}
                        </span>
                      </TechnicalSpecification>
                    </li>
                  </ul>
                </Listings>
              </Details>
            </ProductDescriptionBox>
          </ProductsInfoDetails>
        </DetailsBoxLeft>
        <DetailsBoxRight>
          <ImgCell detailView={detailShown}>
            <ListCardImgContainer detailView={detailShown}>
              <CardImg detailView={detailShown}>
                {product?.thumbImageList?.[0]?.url && (
                  <Link href={`/terrazzo/${product.slug}`}>
                    <a>
                      <Image
                        placeholder="blur"
                        blurDataURL={product.blurThumb[0].url}
                        src={product.thumbImageList[0].url}
                        alt={product.title}
                        width={product.thumbImageList[0].width}
                        height={product.thumbImageList[0].height}
                        objectFit="cover"
                      />
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
      <Container compact={compact} hoverBG={hoverBG}>
        <GridCardImgContainer compact={compact}>
          {product?.thumbImageList?.[0]?.url && (
            <Link href={`/terrazzo/${product.slug}`}>
              <a css={css({ width: compact && "100%", cursor: "pointer" })}>
                <div
                  css={css({
                    position: "relative",
                    width: compact ? "100%" : 228,
                    height: compact ? "auto" : 228,
                    [theme.mediaQueries.mLarge]: {
                      width: compact ? "100%" : 228,
                      height: compact ? "auto" : 228,
                    },
                    "&::after": compact && {
                      width: "100%",
                      content: "' '",
                      display: "block",
                      paddingBottom: "100%",
                      position: "absolute",
                      bottom: "0",
                    },
                  })}
                >
                  <Image
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={product.blurThumb[0].url}
                    src={product.thumbImageList[0].url}
                    alt={product.title}
                    width="228"
                    height="228"
                    objectFit="cover"
                  />
                </div>
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
          <Link href={`/terrazzo/${product.slug}`} passHref>
            <ProductTitleLink>{product.title}</ProductTitleLink>
          </Link>
        </CardTitle>
        {!compact && (
          <CardSubTitle
            as="h4"
            variant="Body-Small"
            dangerouslySetInnerHTML={{ __html: product.subline }}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default ProductCard;
