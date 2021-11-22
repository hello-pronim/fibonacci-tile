import Text from "@components/common/typography";
import styles from "./styles.module.scss";

export default function ProductFilter({}) {
  return (
    <div className={styles.productsFilterContainer}>
      <div className={styles.productFilterItem}>
        <Text as="h3" variant="Body-Small">
          All products
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <Text as="h3" variant="Body-Small">
          Tiles
        </Text>
        <Text as="p" variant="Body-Small">
          Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus aenean.
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <Text as="h3" variant="Body-Small">
          Slabs
        </Text>
        <Text as="p" variant="Body-Small">
          Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus aenean.
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <Text as="h3" variant="Body-Small">
          Latest Releases
        </Text>
        <Text as="p" variant="Body-Small">
          Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus aenean.
        </Text>
      </div>
    </div>
  );
}
