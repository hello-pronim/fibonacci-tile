import { useState } from "react";
import Image from "next/image";
import classnames from "classnames";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import CheckMarkIcon from "@components/icons/checkmark";
import CrossIcon from "@components/icons/cross";
import ArrowDown from "@components/icons/arrowDown";
import ArrowUp from "@components/icons/arrowUp";
import ProductImg from "public/placeholder-product-image.jpg";
import styles from "./styles.module.scss";

const ProductCard = ({
  product,
  displayMode = "grid",
  isSelected = false,
  toggleProductSelect,
}) => {
  const [detailShown, setDetailShown] = useState(false);
  if (displayMode === "list") {
    return (
      <div
        className={classnames(styles.tableRow, {
          [styles.detailView]: detailShown,
        })}
      >
        <div>
          <Text as="h3" variant="Display-XSmall" altFont={true}>
            {product.name}
          </Text>
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
        <div className={styles.descCell}>
          <Text as="h4" variant="Body-Small">
            Word • Word • Word
          </Text>
        </div>
        <div className={styles.imgCell}>
          <div className={styles.cardImgContainer}>
            <div className={styles.cardImg}>
              <Image src={ProductImg} alt="Product-1" />
            </div>
            <div className={styles.actionBtnContainer}>
              <button
                className={classnames(styles.actionBtn, {
                  [styles.checkedButton]: isSelected,
                })}
                onClick={() => toggleProductSelect(product)}
              >
                {!isSelected && (
                  <span className={styles.hovered}>
                    <AddIcon color="white" />{" "}
                    <Text color="white" variant="Body-XSmall">
                      Add To Selection
                    </Text>
                  </span>
                )}
                {!isSelected && (
                  <span className={styles.initial}>
                    <AddIcon color="black" />
                  </span>
                )}
                {isSelected && (
                  <span className={styles.initial}>
                    <CheckMarkIcon color="white" />
                  </span>
                )}
                {isSelected && (
                  <span className={styles.hovered}>
                    <CrossIcon />{" "}
                    <Text color="white" variant="Body-XSmall">
                      Remove Selection
                    </Text>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rowDetailButton}>
          <button
            onClick={() => {
              setDetailShown(!detailShown);
            }}
          >
            {!detailShown && <ArrowDown />}
            {detailShown && <ArrowUp />}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cardImgContainer}>
          <Image src={ProductImg} alt="Product-1" />
          <div className={styles.actionBtnContainer}>
            <button
              className={classnames(styles.actionBtn, {
                [styles.checkedButton]: isSelected,
              })}
              onClick={() => toggleProductSelect(product)}
            >
              {!isSelected && (
                <span className={styles.hovered}>
                  <AddIcon color="white" />{" "}
                  <Text color="white" variant="Body-XSmall">
                    Add To Selection
                  </Text>
                </span>
              )}
              {!isSelected && (
                <span className={styles.initial}>
                  <AddIcon color="black" />
                </span>
              )}
              {isSelected && (
                <span className={styles.initial}>
                  <CheckMarkIcon color="white" />
                </span>
              )}
              {isSelected && (
                <span className={styles.hovered}>
                  <CrossIcon />{" "}
                  <Text color="white" variant="Body-XSmall">
                    Remove Selection
                  </Text>
                </span>
              )}
            </button>
          </div>
        </div>
        <Text
          as="h3"
          variant="Display-XSmall"
          altFont={true}
          className={styles.cardTitle}
          marginTop="25px"
        >
          {product.name}
        </Text>
        <Text as="h4" variant="Body-Small" className={styles.cardSubTitle}>
          Word • Word • Word
        </Text>
      </div>
    </div>
  );
};

export default ProductCard;
