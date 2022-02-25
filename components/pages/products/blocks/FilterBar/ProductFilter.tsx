import classnames from "classnames";
import Text from "@components/common/typography";
import CheckMarkIcon from "@components/icons/checkmark";
import CloseIcon from "@components/icons/close";
import { useAppContext } from "@contexts/AppContext";
import styles from "./styles.module.scss";

export default function ProductFilter({
  totalProducts,
  productCategories,
  productCategoryCounts,
}) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (value: String | Number, label: String) => {
    dispatch({
      type: "SELECT_PRODUCT_FILTER",
      filter: {
        type: "products",
        value,
        label,
      },
    });
  };
  return (
    <div className={classnames(styles.productsFilterContainer)}>
      <div
        className={classnames(styles.productFilterItem, {
          [styles.activeFilter]: state.filter.products.value === "all",
        })}
      >
        <div
          className={classnames(styles.filterInner, {
            [styles.filterInnerMobile]: state.isMobileFilterActive,
          })}
          onClick={() => handleFilter("all", "All")}
        >
          <div
            className={classnames({
              [styles.mobileDetails]: state.isMobileFilterActive,
            })}
          >
            <Text as="h3" variant="Body-Small">
              All products
              <Text
                variant="Body-XSmall"
                bg="stoneTints.7"
                p="2px 5px"
                ml="8px"
                color="charcoal"
              >
                {totalProducts}
              </Text>
            </Text>
          </div>
          {state.isMobileFilterActive &&
            state.filter.products.value === "all" && (
              <CheckMarkIcon color="#141414" />
            )}
        </div>
      </div>
      {productCategories.map((cat: any) => {
        return (
          <div
            key={`product-cat-${cat.id}`}
            className={classnames(styles.productFilterItem, {
              [styles.activeFilter]: state.filter.products.value === cat.id,
            })}
          >
            <div
              className={classnames(styles.filterInner, {
                [styles.filterInnerMobile]: state.isMobileFilterActive,
              })}
              onClick={() => handleFilter(cat.id, cat.title)}
            >
              <div
                className={classnames({
                  [styles.mobileDetails]: state.isMobileFilterActive,
                })}
              >
                <Text as="h3" variant="Body-Small">
                  {cat.title}
                  <Text
                    variant="Body-XSmall"
                    bg="stoneTints.7"
                    p="2px 5px"
                    ml="8px"
                    color="charcoal"
                  >
                    {productCategoryCounts[cat.slug]["entryCount"]}
                  </Text>
                </Text>
                <Text
                  style={{ paddingTop: 8 }}
                  as="h4"
                  variant={
                    state.isMobileFilterActive ? "Body-XSmall" : "Body-Small"
                  }
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: cat.descriptionText }}
                  />
                </Text>
              </div>
              {state.isMobileFilterActive &&
                state.filter.products.value === cat.id && (
                  <CheckMarkIcon color="#141414" />
                )}
            </div>
          </div>
        );
      })}
      <div
        onClick={() => handleFilter("all", "All")}
        className={styles.clearFilter}
      >
        Clear Filter <CloseIcon color={"#0D0D0D"} />
      </div>
    </div>
  );
}
