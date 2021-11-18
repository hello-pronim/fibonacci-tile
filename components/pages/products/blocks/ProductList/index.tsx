import ProductCard from "@components/common/product/card";
import styles from "./styles.module.scss";

function ProductLists({ items }) {
  return (
    <section className={styles.container}>
      {items.map((item, i) => (
        <ProductCard key={i} />
      ))}
    </section>
  );
}

export default ProductLists;
