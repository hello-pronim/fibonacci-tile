import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import Button from "@components/common/button";
import CheckMarkIcon from "@components/icons/checkmark";
import CrossIcon from "@components/icons/cross";
import ArrowDown from "@components/icons/arrowDown";
import ArrowUp from "@components/icons/arrowUp";
import styles from "./styles.module.scss";

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
      <div
        className={classnames(styles.tableRow, {
          [styles.detailView]: detailShown,
        })}
      >
        <div className={styles.detailsBoxLeft}>
          <div className={styles.productsInfoRow}>
            <div className={styles.productName}>
              <div>
                <Link href={product.uri}>
                  <a className={styles.productListTitle}>
                    <Text as="h3" variant="Display-XXSmall" altFont={true}>
                      {product.title}
                    </Text>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.collectionNameBox}>
              <div className={styles.displayNameBox}>
                <div className={styles.AvilableBox}>
                  <div>
                    <Text as="h4" variant="Body-Small">
                      Tiles &amp; Slabs
                    </Text>
                  </div>
                </div>
                <div className={styles.NameBox}>
                  <div>
                    <Text as="h4" variant="Body-Small">
                      Collection Name
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.descriptionBox}>
              <div>
                <Text as="h4" variant="Body-Small">
                  Description — one line truncated ...
                </Text>
              </div>
            </div>
          </div>
          <div className={styles.productsInfoDetails}>
            <div className={styles.productInfoBox}>
              <div className={styles.details}>
                <div>
                  <Text
                    color="white"
                    variant="Body-Regular"
                    className={styles.titleText}
                  >
                    # New release
                  </Text>
                </div>
                <div className={styles.description}>
                  <Text variant="Body-Regular">
                    Tincidunt amet ullamcorper et consequat male su ada. Integer
                    elit ut varius in at porttitor. Id pu rus amet feugiat non
                    porta. Commodo integer feugiat nunc, venenatis lobortis eu
                    dictum. Pellentesque sit tortor congue neque, odio ultrices
                    amet.
                  </Text>
                </div>
                <Button
                  color="dark"
                  text="View product details"
                  href="http://localhost:3000/products"
                />
              </div>
            </div>
            <div className={styles.productDescriptionBox}>
              <div className={styles.details}>
                <div className={styles.listings}>
                  <ul>
                    <li>
                      <div className={styles.headline}>
                        Material and composition
                      </div>
                      Cursus velit adipiscing suspendisse semper. Cursus velit
                      adipiscing suspendisse semper
                    </li>
                    <li>
                      <div className={styles.headline}>
                        Finish and appearance
                      </div>
                      Cursus velit adipiscing suspendisse semper
                    </li>
                    <li>
                      <div className={styles.headline}>Sizes</div>
                      Tiles 400x400x20mm & 600x600x20mm <br />
                      Slabs 400x400x20mm
                    </li>
                    <li>
                      <div className={styles.headline}>Applications</div>
                      Cursus velit adipiscing suspendisse semper
                    </li>
                  </ul>
                </div>
                <a className={styles.technicalSpecification} href="#">
                  Click here to copy technical specification{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detailsBoxRight}>
          <div className={styles.imgCell}>
            <div className={styles.cardImgContainer}>
              <div className={styles.cardImg}>
                {product?.img1 && (
                  <Link href={product.uri}>
                    <a>
                      <Image src={product?.img1} alt="Product-1" />
                    </a>
                  </Link>
                )}
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
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div
        className={classnames(
          styles.container,
          compact && styles.compactContainer
        )}
      >
        <div className={styles.cardImgContainer}>
          {product?.img1 && (
            <Link href={product.uri}>
              <a>
                <Image src={product?.img1} alt="Product-1" />
              </a>
            </Link>
          )}
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
          <Link href={product.uri}>
            <a>{product.title}</a>
          </Link>
        </Text>
        {!compact && (
          <Text as="h4" variant="Body-Small" className={styles.cardSubTitle}>
            {product.subHeading}
          </Text>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
