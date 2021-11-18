import { useState } from "react";

export default function ProductFilters() {
  const [activeFilter, setActiveFilter] = useState(null);
  return (
    <div>
      <div className="filters">
        <div>Search</div>
        <div>Products</div>
        <div>Colous Schemes</div>
        <div>Sort by</div>
      </div>
      <div>
          
      </div>
    </div>
  );
}
