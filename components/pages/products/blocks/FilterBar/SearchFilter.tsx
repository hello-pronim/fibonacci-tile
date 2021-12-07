import Text from "@components/common/typography";
import SearchIcon from "@components/icons/search";
import CloseIcon from "@components/icons/close";
import {DebounceInput} from 'react-debounce-input';
import styles from "./styles.module.scss";
import { useAppContext } from "@contexts/AppContext";


export default function SearchFilter({ isMobileFilterActive }) {
  const { state, dispatch } = useAppContext();
  const handleFilter = (value) => {
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
      {!isMobileFilterActive && (
        <SearchIcon />
      )}
        <Text variant="Body-Small">Start Typing</Text>
      </div>
 
      <DebounceInput
        minLength={1}
        debounceTimeout={300}
        value={state.filter.searchText ? state.filter.searchText : ""}
        placeholder="Search by product name or colour"
        onChange={(e) => handleFilter(e.target.value)}
      />

      <div onClick={() => handleFilter("clear")} className={styles.clearFilter}>
        Clear Search <CloseIcon color={"#0D0D0D"}/>
      </div>
    </div>
  );
}
