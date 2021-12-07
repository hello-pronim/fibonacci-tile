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
import CloseIcon from "@componentsicons/close";
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
  const [isMobileFilterActive, setIsMobileFilterActive] = useState(false);
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

  const toggleMobileFilter = () => {
    if (!isMobileFilterActive) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setIsMobileFilterActive(!isMobileFilterActive);
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
              <Image
                src={Logo}
                layout="fixed"
                width="36px"
                height="36px"
                alt="Fibonacci"
              />
            </a>
          </Link>
        </div>
        <div className={styles.mobileFilter} onClick={toggleMobileFilter}>
          <Text variant="Body-Small" mr="10px">
            Filter by
          </Text>
          <ArrowDownIcon />
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
            <Text variant="Body-Small" mr="10px">
              Products
            </Text>
            <ArrowDownIcon />
          </div>
          <div
            className={classnames(styles.filterItem, styles.colourSchemeItem, {
              [styles.activeFilter]: activeFilter === "colour-schemes",
            })}
            onClick={handleActiveFilter("colour-schemes")}
          >
            <Text variant="Body-Small" mr="10px">
              Colour Schemes
            </Text>
            <ArrowDownIcon />
          </div>
          <div
            className={classnames(styles.filterItem, styles.sortByItem, {
              [styles.activeFilter]: activeFilter === "sort-by",
            })}
            onClick={handleActiveFilter("sort-by")}
          >
            <Text variant="Body-Small" mr="10px">
              Sort by
            </Text>
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
      {isMobileFilterActive && (
        <div className={styles.mobileFilterContainer}>
          <button className={styles.closeBtn} onClick={toggleMobileFilter}>
            <CloseIcon />
          </button>
          Filter here
          <div>
            <div
              className={classnames(styles.filterItem, styles.productItem, {
                [styles.activeFilter]: activeFilter === "products",
              })}
              onClick={handleActiveFilter("products")}
            >
              <Text variant="Body-Small" mr="10px">
                Products
              </Text>
              <ArrowDownIcon />
            </div>
            {activeFilter === "products" && <ProductFilter />}
            <div
              className={classnames(
                styles.filterItem,
                styles.colourSchemeItem,
                {
                  [styles.activeFilter]: activeFilter === "colour-schemes",
                }
              )}
              onClick={handleActiveFilter("colour-schemes")}
            >
              <Text variant="Body-Small" mr="10px">
                Colour Schemes
              </Text>
              <ArrowDownIcon />
            </div>
            {activeFilter === "colour-schemes" && <ColourSchemeFilter />}
            <div
              className={classnames(styles.filterItem, styles.sortByItem, {
                [styles.activeFilter]: activeFilter === "sort-by",
              })}
              onClick={handleActiveFilter("sort-by")}
            >
              <Text variant="Body-Small" mr="10px">
                Sort by
              </Text>
              <ArrowDownIcon />
            </div>
            {activeFilter === "sort-by" && <SortByFilter />}
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
            {activeFilter === "search" && <SearchFilter />}
          </div>
        </div>
      )}
      {!isMobileFilterActive && activeFilter && (
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
