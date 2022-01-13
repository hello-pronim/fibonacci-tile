import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import classnames from "classnames";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import CheckMarkIcon from "@components/icons/checkmark";
import CrossIcon from "@components/icons/cross";
import ArrowDown from "@components/icons/arrowDown";
import ArrowUp from "@components/icons/arrowUp";
import ProductImg from "public/placeholder-product-image.jpg";
import styles from "./styles.module.scss";
import { css } from "@emotion/react";

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
          <Link href={product.uri}>
            <a className={styles.productListTitle}>
              <Text as="h3" variant="Display-XSmall" altFont={true}>
                {product.title}
              </Text>
            </a>
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
        <div className={styles.descCell}>
          <Text as="h4" variant="Body-Small">
            {product.subHeading}
          </Text>
        </div>
        <div className={styles.imgCell}>
          <div className={styles.cardImgContainer}>
            <div className={styles.cardImg}>
              <Link href={product.uri}>
                <a>
                  <Image src={ProductImg} layout="fill" alt="Product-1" />
                </a>
              </Link>
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
                    <AddIcon color="white"/>
                    <Text color="white" variant="Body-XSmall">
                      Add To Selection
                    </Text>
                  </span>
                )}
                {!isSelected && (
                  <span className={styles.initial}>
                    <AddIcon color="black" width={38}/>
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
          <Link href={product.uri}>
            <a>
              <Image src={product.img1} alt="Product-1" />
            </a>
          </Link>
          <div className={styles.actionBtnContainer}>
            <button
              className={classnames(styles.actionBtn, {
                [styles.checkedButton]: isSelected,
              })}
              onClick={() => toggleProductSelect(product)}
            >
              {!isSelected && (
                <span className={styles.hovered}>
                  <AddIcon color="white" />
                  <Text color="white" variant="Body-XSmall">
                    Add To Selection
                  </Text>
                </span>
              )}
              {!isSelected && (
                <span className={styles.initial}>
                  <AddIcon color="black" width={38} />
                </span>
              )}
              {isSelected && (
                <span className={styles.initial}>
                  <CheckMarkIcon color="white" width={38} />
                </span>
              )}
              {isSelected && (
                <span className={styles.hovered}>
                  <CrossIcon />
                  <Text color="white" variant="Body-XSmall">
                    Remove Selection
                  </Text>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
