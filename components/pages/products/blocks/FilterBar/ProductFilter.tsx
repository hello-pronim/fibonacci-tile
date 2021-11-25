import Text from "@components/common/typography";
import CheckMarkIcon from "@components/icons/checkmark";
import CloseIcon from "@components/icons/close";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";

export default function ProductFilter({}) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (value) => {
    dispatch({
      type: "SELECT_PRODUCT_FILTER",
      filter: {
        type: "products",
        value,
      },
    });
  };
  return (
    <div
      className={classnames(
        styles.productsFilterContainer
      )}
    >
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.products === "all",
        })}
      >
        <div className={styles.filterInner} onClick={() => handleFilter("all")}>
          <Text as="h3" variant="Body-Small">
            All products{" "}
            {state.filter.products === "all" && (
              <CheckMarkIcon color="#141414" />
            )}
          </Text>
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.products === "tiles",
        })}
      >
        <div
          className={styles.filterInner}
          onClick={() => handleFilter("tiles")}
        >
          <Text as="h3" variant="Body-Small">
            Tiles{" "}
            {state.filter.products === "tiles" && (
              <CheckMarkIcon color="#141414" />
            )}
          </Text>
          <Text as="p" variant="Body-Small">
            Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus
            aenean.
          </Text>
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.products === "slabs",
        })}
      >
        <div
          className={styles.filterInner}
          onClick={() => handleFilter("slabs")}
        >
          <Text as="h3" variant="Body-Small">
            Slabs{" "}
            {state.filter.products === "slabs" && (
              <CheckMarkIcon color="#141414" />
            )}
          </Text>
          <Text as="p" variant="Body-Small">
            Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus
            aenean.
          </Text>
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.products === "releases",
        })}
      >
        <div
          className={styles.filterInner}
          onClick={() => handleFilter("releases")}
        >
          <Text as="h3" variant="Body-Small">
            Latest Releases{" "}
            {state.filter.products === "releases" && (
              <CheckMarkIcon color="#141414" />
            )}
          </Text>
          <Text as="p" variant="Body-Small">
            Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus
            aenean.
          </Text>
        </div>
      </div>
<<<<<<< HEAD
      <div onClick={()=> handleFilter('all')} className={styles.clearFilter}>
        Clear Filter <CloseIcon color={"#0D0D0D"}/>
=======
      <div onClick={() => handleFilter("all")} className={styles.clearFilter}>
        Clear Filter <Cross color={"#0D0D0D"} />
>>>>>>> 47e73629ac935b15bbf31d5e2bb678938f1ed1cc
      </div>
    </div>
  );
}
