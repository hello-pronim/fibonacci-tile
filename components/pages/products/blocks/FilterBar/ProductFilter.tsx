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
        <div className={classnames(styles.filterInner, {[styles.filterInnerMobile]: state.isMobileFilterActive})} 
        onClick={() => handleFilter("all")}>
          <div className={classnames({[styles.mobileDetails]: state.isMobileFilterActive})}>
            <Text as="h3" variant="Body-Small">
              All products{" "}
              {!state.isMobileFilterActive && state.filter.products === "all" && (
                <CheckMarkIcon color="#141414" />
              )}
            </Text>
          </div>
          {state.isMobileFilterActive && state.filter.products === "all" && (
            <CheckMarkIcon color="#141414" />
          )}
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.products === "tiles",
        })}
      >
        <div
          className={classnames(styles.filterInner, {[styles.filterInnerMobile]: state.isMobileFilterActive})}
          onClick={() => handleFilter("tiles")}
        >
          <div className={classnames({[styles.mobileDetails]: state.isMobileFilterActive})}>
            <Text as="h3" variant="Body-Small">
              Tiles{" "}
              {!state.isMobileFilterActive && state.filter.products === "tiles" && (
                <CheckMarkIcon color="#141414" />
              )}
            </Text>
            <Text as="p" variant={state.isMobileFilterActive? "Body-XSmall" : "Body-Small"}>
              Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus
              aenean.
            </Text>
          </div>
          {state.isMobileFilterActive && state.filter.products === "tiles" && (
            <CheckMarkIcon color="#141414" />
          )}
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.products === "slabs",
        })}
      >
        <div
          className={classnames(styles.filterInner, {[styles.filterInnerMobile]: state.isMobileFilterActive})}
          onClick={() => handleFilter("slabs")}
        >
          <div className={classnames({[styles.mobileDetails]: state.isMobileFilterActive})}>
            <Text as="h3" variant="Body-Small">
              Slabs{" "}
              {!state.isMobileFilterActive && state.filter.products === "slabs" && (
                <CheckMarkIcon color="#141414" />
              )}
            </Text>
            <Text as="p" variant={state.isMobileFilterActive? "Body-XSmall" : "Body-Small"}>
              Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus
              aenean.
            </Text>
          </div>
          {state.isMobileFilterActive && state.filter.products === "slabs" && (
            <CheckMarkIcon color="#141414" />
          )}
        </div>
      </div>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.products === "releases",
        })}
      >
        <div
          className={classnames(styles.filterInner, {[styles.filterInnerMobile]: state.isMobileFilterActive})}
          onClick={() => handleFilter("releases")}
        >
          <div className={classnames({[styles.mobileDetails]: state.isMobileFilterActive})}>
            <Text as="h3" variant="Body-Small">
              Latest Releases{" "}
              {!state.isMobileFilterActive && state.filter.products === "releases" && (
                <CheckMarkIcon color="#141414" />
              )}
            </Text>
            <Text as="p" variant={state.isMobileFilterActive? "Body-XSmall" : "Body-Small"}>
              Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus
              aenean.
            </Text>
          </div>
          {state.isMobileFilterActive && state.filter.products === "releases" && (
            <CheckMarkIcon color="#141414" />
          )}
        </div>
      </div>
      <div onClick={()=> handleFilter('all')} className={styles.clearFilter}>
        Clear Filter <CloseIcon color={"#0D0D0D"}/>
      </div>
    </div>
  );
}
