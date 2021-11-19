import ProductCard from "@components/common/product/card";
import styles from "./styles.module.scss";

function ProductLists({ items }) {
  const onProductSelect = () => {};
  return (
    <section className={styles.container}>
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
