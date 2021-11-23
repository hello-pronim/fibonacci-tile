import Text from "@components/common/typography";
import SearchIcon from "@components/icons/search";
import Cross from "@components/icons/cross";
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";

export default function SearchFilter({}) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (event) => {
    const value =  event === "clear" ? "clear" : event.target.value;
    dispatch({
      type: "SELECT_PRODUCT_FILTER",
      filter: {
        type: 'searchText',
        value
      },
    });
  }
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchLabel}>
        <SearchIcon />
        <Text variant="Body-Small">Start Typing</Text>
      </div>
      <input onChange={evt => handleFilter(evt)} 
      value={state?.filter?.searchText ? state.filter.searchText : ''} placeholder="Search by product name or colour" />
      <div onClick={() => handleFilter("clear")} className={styles.clearFilter}>
        Clear Search <Cross color={"#0D0D0D"}/>
      </div>
    </div>
  );
}
