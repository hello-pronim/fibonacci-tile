import Text from "@components/common/typography";
import styles from "./styles.module.scss";

export default function ColourSchemeFilter({}) {
  return (
    <div className={styles.productsFilterContainer}>
      <div className={styles.productFilterItem}>
        <Text as="h3" variant="Body-Small">
          Refine your colour schemes
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        
      </div>
    </div>
  );
}
