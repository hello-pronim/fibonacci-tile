import classnames from "classnames";
import ProductCard from "@components/common/product/card";
import Text from "@components/common/typography";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";

function ProductLists({ products }) {
  const { state, dispatch } = useAppContext();
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
          {products?.map((product: any) => {
            return (
              <ProductCard
                displayMode="list"
                product={product}
                isSelected={
                  state?.selectedProducts.findIndex(
                    (sp) => sp.id === product.id
                  ) !== -1
                }
                toggleProductSelect={() =>
                  dispatch({
                    type: "TOGGLE_PRODUCT_SELECTION",
                    product,
                  })
                }
                key={`product-${product.id}`}
              />
            );
          })}
        </div>
      )}
      {state?.productDisplayMode !== "list" &&
        products?.map((product) => (
          <ProductCard
            displayMode={state?.productDisplayMode}
            product={product}
            isSelected={
              state?.selectedProducts.findIndex(
                (sp) => sp.id === product.id
              ) !== -1
            }
            toggleProductSelect={() =>
              dispatch({
                type: "TOGGLE_PRODUCT_SELECTION",
                product,
              })
            }
            key={`product-${product.id}`}
          />
        ))}
    </section>
  );
}

export default ProductLists;
