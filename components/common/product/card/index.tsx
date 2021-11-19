import { useState } from "react";
import Image from "next/image";
import classnames from "classnames";
import Text from "@components/common/typography";
import ProductImg from "public/placeholder-product-image.jpg";
import styles from "./styles.module.scss";

const ProductCard = ({ product, isSelected = false, onProductSelect }) => {
  const [cardSelectionActive, setCardSelectionActive] = useState(false);
  const onMouseButtonHover = () => {
    setCardSelectionActive(true);
  };
  const onMouseButtonLeave = () => {
    setCardSelectionActive(false);
  };
  return (
    <div
      className={classnames(styles.wrapper, {
        [styles.cardIsActive]: cardSelectionActive,
      })}
    >
      <div className={styles.container}>
        <div className={styles.cardImg}>
          <Image src={ProductImg} alt="Product-1" />
          <button
            className={styles.addBtn}
            onClick={onProductSelect}
            onMouseEnter={onMouseButtonHover}
            onMouseLeave={onMouseButtonLeave}
          >
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.8996 7.63961H0.0996094V6.35961H12.8996V7.63961Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.13961 0.599609L7.13961 5.07961L5.85961 5.07961L5.85961 0.599609L7.13961 0.599609Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.13961 8.91961L7.13961 13.3996H5.85961L5.85961 8.91961L7.13961 8.91961Z"
                fill="white"
              />
            </svg>

            {cardSelectionActive && (
              <Text color="white" variant="Body-XSmall">
                {isSelected ? "Remove Selection" : "Add To Selection"}
              </Text>
            )}
          </button>
        </div>
        <Text as="h3" variant="Display-XSmall" altFont={true} marginTop="25px">
          Neues Grey Superfine
        </Text>
        <Text as="h4" variant="Body-Small">
          Word • Word • Word
        </Text>
      </div>
    </div>
  );
};

export default ProductCard;
