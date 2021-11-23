import Text from "@components/common/typography";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";

export default function ProductFilter({}) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (value) => {
    dispatch({
      type: "SELECT_PRODUCT_FILTER",
      filter: {
        type: 'products',
        value
      },
    });
  }
  return (
    <div className={styles.productsFilterContainer}>
      <div className={styles.productFilterItem}>
        <Text onClick={()=> handleFilter('all')} as="h3" variant="Body-Small">
          All products
        </Text>
      </div>
      <div className={styles.productFilterItem}>
        <div onClick={()=> handleFilter('tiles')}>
          <Text as="h3" variant="Body-Small">
            Tiles
          </Text>
          <Text as="p" variant="Body-Small">
            Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus aenean.
          </Text>
        </div>
      </div>
      <div className={styles.productFilterItem}>
        <div onClick={()=> handleFilter('slabs')}>
          <Text as="h3" variant="Body-Small">
            Slabs
          </Text>
          <Text as="p" variant="Body-Small">
            Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus aenean.
          </Text>
        </div>
      </div>
      <div className={styles.productFilterItem}>
        <div onClick={()=> handleFilter('releases')}>
          <Text as="h3" variant="Body-Small">
            Latest Releases
          </Text>
          <Text as="p" variant="Body-Small">
            Amet orci facilisi magna nunc vel, est leo adipiscing. Rhoncus aenean.
          </Text>
        </div>
      </div>
    </div>
  );
}
