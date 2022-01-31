import classnames from "classnames";
import Text from "@components/common/typography";
import CheckMarkIcon from "@components/icons/checkmark";
import CloseIcon from "@components/icons/close";
import { useAppContext } from "@contexts/AppContext";
import styles from "./styles.module.scss";

export default function ProductFilter({ productCategories }) {
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
    <div className={classnames(styles.productsFilterContainer)}>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.products === "all",
        })}
      >
        <div
          className={classnames(styles.filterInner, {
            [styles.filterInnerMobile]: state.isMobileFilterActive,
          })}
          onClick={() => handleFilter("all")}
        >
          <div
            className={classnames({
              [styles.mobileDetails]: state.isMobileFilterActive,
            })}
          >
            <Text as="h3" variant="Body-Small">
              All products{" "}
              {!state.isMobileFilterActive &&
                state.filter.products === "all" && (
                  <CheckMarkIcon color="#141414" />
                )}
            </Text>
          </div>
          {state.isMobileFilterActive && state.filter.products === "all" && (
            <CheckMarkIcon color="#141414" />
          )}
        </div>
      </div>
      {productCategories.map((cat: any) => {
        return (
          <div
            key={`product-cat-${cat.id}`}
            className={classnames(styles.productFilterItem, {
              [styles.activeFilter]: state.filter.products === cat.slug,
            })}
          >
            <div
              className={classnames(styles.filterInner, {
                [styles.filterInnerMobile]: state.isMobileFilterActive,
              })}
              onClick={() => handleFilter(cat.slug)}
            >
              <div
                className={classnames({
                  [styles.mobileDetails]: state.isMobileFilterActive,
                })}
              >
                <Text as="h3" variant="Body-Small">
                  {cat.title}{" "}
                  {!state.isMobileFilterActive &&
                    state.filter.products === cat.slug && (
                      <CheckMarkIcon color="#141414" />
                    )}
                </Text>
                <Text
                  as="p"
                  variant={
                    state.isMobileFilterActive ? "Body-XSmall" : "Body-Small"
                  }
                >
                  {cat.description}
                </Text>
              </div>
              {state.isMobileFilterActive &&
                state.filter.products === cat.slug && (
                  <CheckMarkIcon color="#141414" />
                )}
            </div>
          </div>
        );
      })}
      <div onClick={() => handleFilter("all")} className={styles.clearFilter}>
        Clear Filter <CloseIcon color={"#0D0D0D"} />
      </div>
    </div>
  );
}
