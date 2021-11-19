import Header from "@components/common/header";
import Slider from "./blocks/Slider";
import styles from "./styles.module.scss";

const ProductsHeader = () => {
  return (
    <section className={styles.headerContainer}>
      <Header position="absolute" />
      <Slider />
    </section>
  );
};

export default ProductsHeader;
