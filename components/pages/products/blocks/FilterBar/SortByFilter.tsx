import Text from "@components/common/typography";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";


export default function SortByFilter({}) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (value) => {
    dispatch({
      type: "SELECT_PRODUCT_FILTER",
      filter: {
        type: 'sortBy',
        value
      },
    });
  }
  return (
    <div className={styles.productsFilterContainer}>
      <div className={styles.productFilterItem}>
        <Text onClick={()=> handleFilter('featured')} as="h3" variant="Body-Small">
          Featured
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <Text onClick={()=> handleFilter('asc')} as="h3" variant="Body-Small">
          A -Z
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <Text onClick={()=> handleFilter('desc')} as="h3" variant="Body-Small">
          Z - A
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <Text onClick={()=> handleFilter('collections')} as="h3" variant="Body-Small">
          Collections
        </Text>
      </div>
    </div>
  );
}
