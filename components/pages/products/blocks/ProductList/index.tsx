import classnames from "classnames";
import ProductCard from "@components/common/product/card";
import Text from "@components/common/typography";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";
import AccentText, {AccentTextMobile} from "@components/common/accentText";

interface productListProps {
  products: any;
  accentText?: string;
}

function ProductLists({ products, accentText }:productListProps) {
  const { state, dispatch } = useAppContext();
  return (
    <section
      className={classnames(styles.container, {
        [styles.list_view]: state?.productDisplayMode === "list",
      })}
    >
      {accentText && <AccentText top={120}>
        Be inspired
      </AccentText>}
      {state?.productDisplayMode === "list" && (
        <div className="display-table">
          <div className={styles.tableHeader}>
            <div>
              <Text variant="Display-Overline">Product Name</Text>
            </div>
            <div className={styles.displayInnerTable}>
              <div>
                <Text variant="Display-Overline">Available In</Text>
              </div>
              <div>
                <Text variant="Display-Overline">Collection Name</Text>
              </div>
            </div>
            <div>
              <Text variant="Display-Overline">Image</Text>
            </div>
            <div className={styles.tableActionContainer}></div>
          </div>
          {products.map((product: any) => {
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
        products.map((product) => (
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
