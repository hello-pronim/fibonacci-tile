import { useState } from "react";
import Image from "next/image";
import classnames from "classnames";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import CheckIcon from "@components/icons/check";
import CrossIcon from "@components/icons/cross";
import ArrowDown from "@components/icons/arrowDown";
import ProductImg from "public/placeholder-product-image.jpg";
import styles from "./styles.module.scss";

const ProductCard = ({
  product,
  displayMode = "grid",
  isSelected = false,
  onProductSelect,
}) => {
  if (displayMode === "list") {
    return (
      <div className={classnames(styles.tableRow)}>
        <div>
          <Text as="h3" variant="Display-XSmall" altFont={true}>
            Neues Grey Superfine
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
            <button
              className={classnames(styles.addBtn, {
                [styles.checkedButton]: isSelected,
              })}
              onClick={onProductSelect}
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
                  <CheckIcon />
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
        <div className={styles.rowDetailButton}>
          <button  onClick={() => {}}>
            <ArrowDown />
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
          <button
            className={classnames(styles.addBtn, {
              [styles.checkedButton]: isSelected,
            })}
            onClick={onProductSelect}
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
                <CheckIcon />
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
