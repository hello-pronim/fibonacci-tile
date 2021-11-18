import { useState } from "react";
import styles from "./styles.module.scss";

export default function ProductFilters() {
  const [activeFilter, setActiveFilter] = useState(null);
  return (
    <section className={styles.container}>
      <div className="filters">
        <div>Search</div>
        <div>Products</div>
        <div>Colous Schemes</div>
        <div>Sort by</div>
      </div>
      <div></div>
    </section>
  );
}
