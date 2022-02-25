import Text from "@components/common/typography";
import CheckMarkIcon from "@components/icons/checkmark";
import CloseIcon from "@components/icons/close";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";

export default function SortByFilter({}) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (value, label) => {
    dispatch({
      type: "SELECT_PRODUCT_FILTER",
      filter: {
        type: "sortBy",
        value,
        label,
      },
    });
  };
  return (
    <div
      className={classnames(
        styles.productsFilterContainer,
        styles.firstItemBorder
      )}
    >
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.sortBy.value === "featured",
        })}
      >
        <div
          className={classnames(styles.filterInner, {
            [styles.filterInnerMobile]: state.isMobileFilterActive,
          })}
          onClick={() => handleFilter("featured", "Featured")}
        >
          <div
            className={classnames({
              [styles.mobileDetails]: state.isMobileFilterActive,
            })}
          >
            <Text as="h3" textAlign="center" variant="Body-Small">
              Featured{" "}
              {/* {!state.isMobileFilterActive &&
                state.filter.sortBy.value === "featured" && (
                  <CheckMarkIcon color="#141414" />
                )} */}
            </Text>
          </div>
          {/* {state.isMobileFilterActive &&
            state.filter.sortBy.value === "featured" && (
              <CheckMarkIcon color="#141414" />
            )} */}
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.sortBy.value === "asc",
        })}
      >
        <div
          className={classnames(styles.filterInner, {
            [styles.filterInnerMobile]: state.isMobileFilterActive,
          })}
          onClick={() => handleFilter("asc", "a-z")}
        >
          <div
            className={classnames({
              [styles.mobileDetails]: state.isMobileFilterActive,
            })}
          >
            <Text as="h3" variant="Body-Small">
              A -Z{" "}
              {/* {!state.isMobileFilterActive &&
                state.filter.sortBy.value === "asc" && (
                  <CheckMarkIcon color="#141414" />
                )} */}
            </Text>
          </div>
          {state.isMobileFilterActive &&
            state.filter.sortBy.value === "asc" && (
              <CheckMarkIcon color="#141414" />
            )}
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.sortBy.value === "desc",
        })}
      >
        <div
          className={classnames(styles.filterInner, {
            [styles.filterInnerMobile]: state.isMobileFilterActive,
          })}
          onClick={() => handleFilter("desc", "z-a")}
        >
          <div
            className={classnames({
              [styles.mobileDetails]: state.isMobileFilterActive,
            })}
          >
            <Text as="h3" variant="Body-Small">
              Z - A{" "}
              {/* {!state.isMobileFilterActive &&
                state.filter.sortBy.value === "desc" && (
                  <CheckMarkIcon color="#141414" />
                )} */}
            </Text>
          </div>
          {state.isMobileFilterActive &&
            state.filter.sortBy.value === "desc" && (
              <CheckMarkIcon color="#141414" />
            )}
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.sortBy.value === "collections",
        })}
      >
        <div
          className={classnames(styles.filterInner, {
            [styles.filterInnerMobile]: state.isMobileFilterActive,
          })}
          onClick={() => handleFilter("collections", "collections")}
        >
          <div
            className={classnames({
              [styles.mobileDetails]: state.isMobileFilterActive,
            })}
          >
            <Text as="h3" variant="Body-Small">
              Collections{" "}
              {/* {!state.isMobileFilterActive &&
                state.filter.sortBy.value === "collections" && (
                  <CheckMarkIcon color="#141414" />
                )} */}
            </Text>
          </div>
          {state.isMobileFilterActive &&
            state.filter.sortBy.value === "collections" && (
              <CheckMarkIcon color="#141414" />
            )}
        </div>
      </div>
      <div
        onClick={() => handleFilter("featured", "Featured")}
        className={styles.clearFilter}
      >
        Clear Filter <CloseIcon color={"#0D0D0D"} />
      </div>
    </div>
  );
}
