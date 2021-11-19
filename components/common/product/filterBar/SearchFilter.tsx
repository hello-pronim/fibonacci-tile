import Text from "@components/common/typography";
import SearchIcon from "@components/icons/search";
import styles from "./styles.module.scss";

export default function SearchFilter({}) {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchLabel}>
        <SearchIcon />
        <Text variant="Body-Small">Start Typing</Text>
      </div>
      <input placeholder="Search by product name or colour" />
    </div>
  );
}
