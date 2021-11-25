import Text from "@components/common/typography";
import CheckMarkIcon from "@components/icons/checkmark";
import CloseIcon from "@components/icons/close";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";

export default function SortByFilter({}) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (value) => {
    dispatch({
      type: "SELECT_PRODUCT_FILTER",
      filter: {
        type: "sortBy",
        value,
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
          [styles.activeFilter]: state.filter.sortBy === "featured",
        })}
      >
        <div
          className={styles.filterInner}
          onClick={() => handleFilter("featured")}
        >
          <Text as="h3" variant="Body-Small">
            Featured{" "}
            {state.filter.sortBy === "featured" && (
              <CheckMarkIcon color="#141414" />
            )}
          </Text>
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.sortBy === "asc",
        })}
      >
        <div className={styles.filterInner} onClick={() => handleFilter("asc")}>
          <Text as="h3" variant="Body-Small">
            A -Z{" "}
            {state.filter.sortBy === "asc" && <CheckMarkIcon color="#141414" />}
          </Text>
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.sortBy === "desc",
        })}
      >
        <div
          className={styles.filterInner}
          onClick={() => handleFilter("desc")}
        >
          <Text as="h3" variant="Body-Small">
            Z - A{" "}
            {state.filter.sortBy === "desc" && (
              <CheckMarkIcon color="#141414" />
            )}
          </Text>
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.sortBy === "collections",
        })}
      >
        <div
          className={styles.filterInner}
          onClick={() => handleFilter("collections")}
        >
          <Text as="h3" variant="Body-Small">
            Collections{" "}
            {state.filter.sortBy === "collections" && (
              <CheckMarkIcon color="#141414" />
            )}
          </Text>
        </div>
      </div>
<<<<<<< HEAD
      <div onClick={()=> handleFilter('featured')} className={styles.clearFilter}>
        Clear Filter <CloseIcon color={"#0D0D0D"}/>
=======
      <div
        onClick={() => handleFilter("featured")}
        className={styles.clearFilter}
      >
        Clear Filter <Cross color={"#0D0D0D"} />
>>>>>>> 47e73629ac935b15bbf31d5e2bb678938f1ed1cc
      </div>
    </div>
  );
}
