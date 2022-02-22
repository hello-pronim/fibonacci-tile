import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "@styled-system/css";
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
import { flex } from "styled-system";

const ProductCard = ({
  product,
  isSelected = false,
  toggleProductSelect,
  activeCollectionSlug = null,
  largeImage = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  let collectionSlug = activeCollectionSlug
    ? activeCollectionSlug
    : product.collections[0].slug;
  const largeImageUrl = product?.largeImage.length > 0 ? product?.largeImage[0].url : null;
  function handleModel () {
    setShowModal(!showModal);
  }
  console.log("product", product)
  return (
    <Wrapper>
      {showModal && 
        <div
        css={css({ 
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 9999
          // right: 'auto',
          // bottom: 'auto',
          // marginRight: '-50%',
          // transform: 'translate(-50%, -50%)',
        })}
        >
          <div 
          css={css({
            display: "flex"
          })}>
            <span>Close</span>
            <span
            onClick={() => handleModel()}
            css={css({
              background: "#000000",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              textAlign: "center",
              lineHeight: "30px",
              cursor: "pointer"
            })}
            ><CrossIcon /></span>
          </div>
          <Image
            placeholder="blur"
            blurDataURL={product.blurThumb[0].url}
            src={largeImageUrl}
            alt={product.title}
            width={product?.largeImage[0].width}
            height={product?.largeImage[0].height}
          />
        </div>
      }
      <Container>
        <GridCardImgContainer>
          {product?.thumbImageSingle?.[0]?.url && (
            <div
              onClick={() => handleModel()}
              css={css({ 
                cursor: "pointer"
              })}
            >
              <Image
                placeholder="blur"
                blurDataURL={product.blurThumb[0].url}
                src={product.thumbImageSingle[0].url}
                alt={product.title}
                width={product.thumbImageSingle[0].width}
                height={product.thumbImageSingle[0].height}
              />
            </div>
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
                  <AddIcon color="black" width={13} />
                </span>
              )}
              {isSelected && (
                <span className="initial">
                  <CheckMarkIcon color="white" width={14} />
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
