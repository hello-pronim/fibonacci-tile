import classnames from "classnames";
import Header from "@components/common/header";
import styles from "./styles.module.scss";

const ProductsHeader = ({ mode="light" }) => {
  return (
    <section className={styles.headerContainer}>
      <Header mode={mode} position="absolute" />
    </section>
  );
};

export default ProductsHeader;
