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
            
            {cardSelectionActive && (
              <Text color="white" variant="Body-XSmall">
                {isSelected ? "Remove Selection": "Add To Selection"}
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
