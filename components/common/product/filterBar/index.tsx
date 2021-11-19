import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import classnames from "classnames";
import Text from "@components/common/typography";
import Logo from "public/assets/brandmarks/symbol-primary.svg";
import SearchIcon from "public/assets/icons/search.svg";
import styles from "./styles.module.scss";

export default function ProductFilters() {
  const [activeFilter, setActiveFilter] = useState(null);
  return (
    <section className={styles.container}>
      <Link href="/">
        <a>
          <Image src={Logo} width="158" height="40" alt="Fibonacci" />
        </a>
      </Link>
      <div className={styles.filters}>
        <div className={styles.searchItem}>
          <Text variant="Body-Small">Search</Text>
          <Image src={SearchIcon} width="20" height="20" alt="Search" />
        </div>
        <div className={classnames(styles.filterItem, styles.productItem)}>
          <Text variant="Body-Small">Products</Text>
        </div>
        <div className={classnames(styles.filterItem, styles.colourSchemeItem)}>
          <Text variant="Body-Small">Colour Schemes</Text>
        </div>
        <div className={classnames(styles.filterItem, styles.sortByItem)}>
          <Text variant="Body-Small">Sort by</Text>
        </div>
      </div>
      <div className={styles.displayOptionsContainer}>
        <div className={styles.displayOptions}>
          
        </div>
      </div>
      <div className={styles.selections}>Selections</div>
    </section>
  );
}
