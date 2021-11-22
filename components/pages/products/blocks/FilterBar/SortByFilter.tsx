import Text from "@components/common/typography";
import styles from "./styles.module.scss";

export default function SortByFilter({}) {
  return (
    <div className={styles.productsFilterContainer}>
      <div className={styles.productFilterItem}>
        <Text as="h3" variant="Body-Small">
          Featured
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <Text as="h3" variant="Body-Small">
          A -Z
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <Text as="h3" variant="Body-Small">
          Z - A
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <Text as="h3" variant="Body-Small">
          Collections
        </Text>
      </div>
    </div>
  );
}
