import Header from "@components/common/header";
import Slider from "./blocks/Slider";
import styles from "./styles.module.scss";

const ProductsHeader = () => {
  return (
    <section className={styles.headerContainer}>
      <Header />
      <Slider />
    </section>
  );
};

export default ProductsHeader;
