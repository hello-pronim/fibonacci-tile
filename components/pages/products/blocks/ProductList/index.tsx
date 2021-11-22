import ProductCard from "@components/common/product/card";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { useAppContext } from "@context/AppContext";

function ProductLists({ items }) {
  const { state } = useAppContext();
  const onProductSelect = () => {};
  return (
    <section className={classnames(styles.container, state?.layoutMode === 'list' ? styles.list_view : null)}>
      {items.map((item, i) => (
        <ProductCard
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
