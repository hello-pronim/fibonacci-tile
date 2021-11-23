import Text from "@components/common/typography";
import CheckMarkIcon from "@components/icons/checkmark";
import Cross from "@components/icons/cross";
import classnames from "classnames";
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
    <div className={classnames(styles.productsFilterContainer, styles.firstItemBorder)}>
      <div className={classnames(styles.productFilterItem, {[styles.activeFilter] : state.filter.sortBy === "featured"})}>
        <Text onClick={()=> handleFilter('featured')} as="h3" variant="Body-Small">
          Featured {state.filter.sortBy === "featured" && <CheckMarkIcon color="#141414" />}
        </Text>
      </div>
      <div className={classnames(styles.productFilterItem, {[styles.activeFilter] : state.filter.sortBy === "asc"})}>
        <Text onClick={()=> handleFilter('asc')} as="h3" variant="Body-Small">
          A -Z {state.filter.sortBy === "asc" && <CheckMarkIcon color="#141414" />}
        </Text>
      </div>
      <div className={classnames(styles.productFilterItem, {[styles.activeFilter] : state.filter.sortBy === "desc"})}>
        <Text onClick={()=> handleFilter('desc')} as="h3" variant="Body-Small">
          Z - A {state.filter.sortBy === "desc" && <CheckMarkIcon color="#141414" />}
        </Text>
      </div>
      <div className={classnames(styles.productFilterItem, {[styles.activeFilter] : state.filter.sortBy === "collections"})}>
        <Text onClick={()=> handleFilter('collections')} as="h3" variant="Body-Small">
          Collections {state.filter.sortBy === "collections" && <CheckMarkIcon color="#141414" />}
        </Text>
      </div>
      <div onClick={()=> handleFilter('featured')} className={styles.clearFilter}>
        Clear Filter <Cross color={"#0D0D0D"}/>
      </div>
    </div>
  );
}
