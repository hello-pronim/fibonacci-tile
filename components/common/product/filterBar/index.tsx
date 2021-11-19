import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import classnames from "classnames";
import Text from "@components/common/typography";
import Logo from "public/assets/brandmarks/symbol-primary.svg";
import SearchIcon from "@components/icons/search";
import ArrowDownIcon from "@components/icons/arrowDown";
import GridIcon from "@components/icons/grid";
import ListIcon from "@components/icons/list";
import CollectionIcon from "@components/icons/collection";
import styles from "./styles.module.scss";

export default function ProductFilters() {
  const [activeFilter, setActiveFilter] = useState(null);
  return (
    <section className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <a>
            <Image src={Logo} width="158" height="40" alt="Fibonacci" />
          </a>
        </Link>
      </div>
      <div className={styles.filters}>
        <div className={styles.searchItem}>
          <Text variant="Body-Small" mr="10px">
            Search
          </Text>
          <SearchIcon />
        </div>
        <div className={classnames(styles.filterItem, styles.productItem)}>
          <Text variant="Body-Small">Products</Text>
          <ArrowDownIcon />
        </div>
        <div className={classnames(styles.filterItem, styles.colourSchemeItem)}>
          <Text variant="Body-Small">Colour Schemes</Text>
          <ArrowDownIcon />
        </div>
        <div className={classnames(styles.filterItem, styles.sortByItem)}>
          <Text variant="Body-Small">Sort by</Text>
          <ArrowDownIcon />
        </div>
      </div>
      <div className={styles.displayOptionsContainer}>
        <div className={styles.displayOptions}>
          <div className={styles.iconContainer}>
            <GridIcon />
          </div>
          <div className={styles.iconContainer}>
            <ListIcon />
          </div>
          <div className={styles.iconContainer}>
            <CollectionIcon />
          </div>
        </div>
      </div>
      <div className={styles.selections}>
        <Text variant="Body-Small">Selections</Text>{" "}
        <span className={styles.selectionCount}>88</span>
      </div>
    </section>
  );
}
