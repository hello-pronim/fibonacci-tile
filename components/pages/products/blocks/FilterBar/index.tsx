import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import useOnClickOutside from "use-onclickoutside";
import { useAppContext } from "@contexts/AppContext";
import SelectionCount from "@components/common/product/selectionCount";
import Text from "@components/common/typography";
import SearchIcon from "@components/icons/search";
import ArrowDownIcon from "@components/icons/arrowDown";
import GridIcon from "@components/icons/grid";
import ListIcon from "@components/icons/list";
import CollectionIcon from "@components/icons/collection";
import ProductFilter from "./ProductFilter";
import SortByFilter from "./SortByFilter";
import SearchFilter from "./SearchFilter";
import ColourSchemeFilter from "./ColourSchemeFilter";
import Logo from "public/assets/brandmarks/symbol-primary.svg";
import styles from "./styles.module.scss";

export default function ProductFilters({ show }) {
  const { state, dispatch } = useAppContext();
  const [activeFilter, setActiveFilter] = useState(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setActiveFilter(null);
  });
  const changeDisplayMode = (mode) => {
    dispatch({
      type: "PRODUCT_DISPLAY_MODE",
      value: mode,
    });
  };
  const handleActiveFilter = (filterType) => {
    return () => {
      if (activeFilter === filterType) {
        setActiveFilter(null);
      } else {
        setActiveFilter(filterType);
      }
    };
  };

  return (
    <div
      ref={ref}
      className={classnames(styles.container, {
        [styles.active]: show,
      })}
    >
      <div className={styles.topBar}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <a>
              <Image src={Logo} width="158" height="40" alt="Fibonacci" />
            </a>
          </Link>
        </div>
        <div className={styles.filters}>
          <div
            className={classnames(styles.searchItem, {
              [styles.activeFilter]: activeFilter === "search",
            })}
            onClick={handleActiveFilter("search")}
          >
            <Text variant="Body-Small" mr="10px">
              Search
            </Text>
            <SearchIcon />
          </div>
          <div
            className={classnames(styles.filterItem, styles.productItem, {
              [styles.activeFilter]: activeFilter === "products",
            })}
            onClick={handleActiveFilter("products")}
          >
            <Text variant="Body-Small">Products</Text>
            <ArrowDownIcon />
          </div>
          <div
            className={classnames(styles.filterItem, styles.colourSchemeItem, {
              [styles.activeFilter]: activeFilter === "colour-schemes",
            })}
            onClick={handleActiveFilter("colour-schemes")}
          >
            <Text variant="Body-Small">Colour Schemes</Text>
            <ArrowDownIcon />
          </div>
          <div
            className={classnames(styles.filterItem, styles.sortByItem, {
              [styles.activeFilter]: activeFilter === "sort-by",
            })}
            onClick={handleActiveFilter("sort-by")}
          >
            <Text variant="Body-Small">Sort by</Text>
            <ArrowDownIcon />
          </div>
        </div>
        <div className={styles.displayOptionsContainer}>
          <div className={styles.displayOptions}>
            <div
              className={classnames(styles.iconContainer, {
                [styles.active]: state?.productDisplayMode === "grid",
              })}
              onClick={() => changeDisplayMode("grid")}
            >
              <GridIcon className={styles.displayIcon} />
            </div>
            <div
              className={classnames(styles.iconContainer, {
                [styles.active]: state?.productDisplayMode === "list",
              })}
              onClick={() => changeDisplayMode("list")}
            >
              <ListIcon className={styles.displayIcon} />
            </div>
            <div
              className={classnames(styles.iconContainer, {
                [styles.active]: state?.productDisplayMode === "collection",
              })}
              onClick={() => changeDisplayMode("collection")}
            >
              <CollectionIcon className={styles.displayIcon} />
            </div>
          </div>
        </div>
        <div className={styles.selections}>
          <Text variant="Body-Small">Selections</Text> <SelectionCount />
        </div>
      </div>
      {activeFilter && (
        <div className={styles.filterContainer}>
          {activeFilter === "search" && <SearchFilter />}
          {activeFilter === "products" && <ProductFilter />}
          {activeFilter === "sort-by" && <SortByFilter />}
          {activeFilter === "colour-schemes" && <ColourSchemeFilter />}
        </div>
      )}
    </div>
  );
}
