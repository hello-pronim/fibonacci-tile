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
import CloseIcon from "@components/icons/close";
import CollectionIcon from "@components/icons/collection";
import Button from "@components/common/button";
import theme from "styles/theme";
import ProductFilter from "./ProductFilter";
import SortByFilter from "./SortByFilter";
import SearchFilter from "./SearchFilter";
import ColourSchemeFilter from "./ColourSchemeFilter";
import Logo from "public/assets/brandmarks/symbol-primary.svg";
import styles from "./styles.module.scss";

export default function ProductFilters({
  show,
  applyFilter,
  colourSchemes,
  productCategories,
}) {
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
    dispatch({
      type: "SET_MOBILE_FILTER",
      value: !isMobileFilterActive,
    });
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
          {Logo && (
            <Link href="/">
              <a>
                <Image
                  src={Logo}
                  layout="fixed"
                  width="30px"
                  height="30px"
                  alt="Fibonacci"
                />
              </a>
            </Link>
          )}
          {!Logo && (
            <Link href="/">
              <a> Fibonacci </a>
            </Link>
          )}
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
            <Text variant="Display-Overline" mr="10px">
              Search
            </Text>
            <SearchIcon />
          </div>
          <div
            className={classnames(styles.productSelection, {
              [styles.activeFilter]: activeFilter === "products",
            })}
            onClick={handleActiveFilter("products")}
          >
            <div>
              <div>
                <Text variant="Body-XSmall" mr="10px">
                  Products
                </Text>
                {state.filter?.products?.value !== "all" && (
                  <Text variant="Body-XSmall" color="#B0ABA7">{state.filter.products.label}</Text>
                )}
              </div>
              <ArrowDownIcon />
            </div>
          </div>
          <div
            className={classnames(styles.filterItem, styles.colourSchemeItem, {
              [styles.activeFilter]: activeFilter === "colour-schemes",
            })}
            onClick={handleActiveFilter("colour-schemes")}
          >
            <div>
              <div>
                <Text variant="Body-XSmall" mr="10px">
                  Colour Schemes
                </Text>
                {state.filter.colourSchemes.length > 0 && (
                  <Text variant="Body-XSmall" color="#B0ABA7">
                    {state.filter.colourSchemes.length} schemes
                  </Text>
                )}
              </div>
              <ArrowDownIcon />
            </div>
          </div>
          <div
            className={classnames(styles.filterItem, styles.sortByItem, {
              [styles.activeFilter]: activeFilter === "sort-by",
            })}
            onClick={handleActiveFilter("sort-by")}
          >
            <div>
              <div>
                <Text variant="Body-XSmall" mr="10px">
                  Sort by
                </Text>
                {state.filter?.sortBy?.value !== "featured" && (
                  <Text variant="Body-XSmall" color="#B0ABA7">{state.filter.sortBy.label}</Text>
                )}
              </div>
              <ArrowDownIcon />
            </div>
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
            <Link href="/terrazzo/collections">
              <a
                className={classnames(styles.iconContainer, {
                  [styles.active]: state?.productDisplayMode === "collection",
                })}
              >
                <CollectionIcon className={styles.displayIcon} />
              </a>
            </Link>
          </div>
        </div>
        <div
          className={styles.selections}
          onClick={() => (
            dispatch({
              type: "OPEN_DRAWER",
              value:
                state.activeDrawerTab !== "cart" ? true : !state.openDrawer,
            }),
            dispatch({
              type: "SET_ACTIVE_DRAWER_TAB",
              value: "cart",
            })
          )}
        >
          <Text variant="Display-Overline">Selections</Text> <SelectionCount />
        </div>
      </div>
      {isMobileFilterActive && (
        <div className={styles.mobileFilterContainer}>
          <button className={styles.closeBtn} onClick={toggleMobileFilter}>
            <CloseIcon />
          </button>
          <Text
            variant="Body-Large"
            as="div"
            display="block"
            mt="35px"
            mb="20px"
          >
            Filter
          </Text>
          <div>
            <div
              className={classnames(styles.filterItem, styles.productItem, {
                [styles.activeFilter]: activeFilter === "products",
              })}
              onClick={handleActiveFilter("products")}
            >
              <Text variant="Body-XSmall" mr="10px">
                Products{" "}
                <Text
                  variant="Body-XSmall"
                  color={theme.colors.concreteTints[5]}
                >
                  Selection
                </Text>
              </Text>
              <ArrowDownIcon />
            </div>
            {activeFilter === "products" && (
              <ProductFilter productCategories={productCategories} />
            )}
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
              <Text variant="Body-XSmall" mr="10px">
                Colour Schemes{" "}
                <Text
                  variant="Body-XSmall"
                  color={theme.colors.concreteTints[5]}
                >
                  Selection{" "}
                </Text>
              </Text>
              <ArrowDownIcon />
            </div>
            {activeFilter === "colour-schemes" && (
              <ColourSchemeFilter colourSchemes={colourSchemes} />
            )}
            <div
              className={classnames(styles.filterItem, styles.sortByItem, {
                [styles.activeFilter]: activeFilter === "sort-by",
              })}
              onClick={handleActiveFilter("sort-by")}
            >
              <Text variant="Body-XSmall" mr="10px">
                Sort by{" "}
                <Text
                  variant="Body-XSmall"
                  color={theme.colors.concreteTints[5]}
                >
                  Selection{" "}
                </Text>
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
              <Text variant="Body-XSmall" mr="10px">
                Search{" "}
                <Text
                  variant="Body-XSmall"
                  color={theme.colors.concreteTints[5]}
                >
                  Selection{" "}
                </Text>
              </Text>
              <SearchIcon />
            </div>
            {activeFilter === "search" && <SearchFilter />}
          </div>
          {isMobileFilterActive && (
            <button onClick={() => applyFilter()} className={styles.applyBttn}>
              Apply
            </button>
          )}
        </div>
      )}
      {!isMobileFilterActive && activeFilter && (
        <div className={styles.filterContainer}>
          {activeFilter === "search" && <SearchFilter />}
          {activeFilter === "products" && (
            <ProductFilter productCategories={productCategories} />
          )}
          {activeFilter === "sort-by" && <SortByFilter />}
          {activeFilter === "colour-schemes" && (
            <ColourSchemeFilter colourSchemes={colourSchemes} />
          )}
        </div>
      )}
    </div>
  );
}
