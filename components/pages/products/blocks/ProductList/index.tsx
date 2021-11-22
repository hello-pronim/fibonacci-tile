import classnames from "classnames";
import ProductCard from "@components/common/product/card";
import Text from "@components/common/typography";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";

function ProductLists({ items }) {
  const { state, dispatch } = useAppContext();
  const toggleProductSelect = (product) => {
    const checkProductSelected =
      state?.selectedProducts.findIndex((sp) => sp.id === product.id) !== -1;
    if (!checkProductSelected) {
      dispatch({
        type: "SELECT_PRODUCTS",
        products: [product],
      });
    } else {
      dispatch({
        type: "UNSELECT_PRODUCTS",
        products: [product],
      });
    }
  };
  return (
    <section
      className={classnames(styles.container, {
        [styles.list_view]: state?.productDisplayMode === "list",
      })}
    >
      {state?.productDisplayMode === "list" && (
        <div className="display-table">
          <div className={styles.tableHeader}>
            <div>
              <Text variant="Body-XSmall">Product Name</Text>
            </div>
            <div>
              <Text variant="Body-XSmall">Available In</Text>
            </div>
            <div>
              <Text variant="Body-XSmall">Collection Name</Text>
            </div>
            <div>
              <Text variant="Body-XSmall">Description</Text>
            </div>
            <div>
              <Text variant="Body-XSmall">Image</Text>
            </div>
            <div className={styles.tableActionContainer}></div>
          </div>
          {items.map((item: any) => {
            return (
              <ProductCard
                displayMode="list"
                product={item}
                isSelected={
                  state?.selectedProducts.findIndex(
                    (sp) => sp.id === item.id
                  ) !== -1
                }
                toggleProductSelect={toggleProductSelect}
                key={`product-${item.id}`}
              />
            );
          })}
        </div>
      )}
      {state?.productDisplayMode !== "list" &&
        items.map((item) => (
          <ProductCard
            displayMode={state?.productDisplayMode}
            product={item}
            isSelected={
              state?.selectedProducts.findIndex((sp) => sp.id === item.id) !==
              -1
            }
            toggleProductSelect={toggleProductSelect}
            key={`product-${item.id}`}
          />
        ))}
    </section>
  );
}

export default ProductLists;
