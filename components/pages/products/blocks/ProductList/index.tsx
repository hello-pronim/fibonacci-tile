import classnames from "classnames";
import ProductCard from "@components/common/product/card";
import Text from "@components/common/typography";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";
import { style } from "styled-system";

function ProductLists({ items }) {
  const { state } = useAppContext();
  const onProductSelect = () => {};
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
          {items.map((item, i) => (
            <ProductCard
              displayMode="list"
              product={item}
              isSelected={false}
              onProductSelect={onProductSelect}
              key={i}
            />
          ))}
        </div>
      )}
      {state?.productDisplayMode !== "list" &&
        items.map((item, i) => (
          <ProductCard
            displayMode={state?.productDisplayMode}
            product={item}
            isSelected={false}
            onProductSelect={onProductSelect}
            key={i}
          />
        ))}
    </section>
  );
}

export default ProductLists;
