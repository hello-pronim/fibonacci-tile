import ProductCard from "@components/common/product/card";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { useAppContext } from "@context/AppContext";
import { setItem, getItem } from "../../../../../utils";


function ProductLists({ items }) {
  const { state, dispatch } = useAppContext();
  const onProductSelect = (product) => {
    dispatch({
      type: "SELECT_PRODUCTS", 
      products: [product]
    });
    setItem('SELECT_PRODUCTS', product);
  };
  console.log("state", state)
  return (
    <section className={classnames(styles.container, state?.layoutMode === 'list' ? styles.list_view : null)}>
      {items.map((item, i) => (
        <ProductCard
          product={item}
          isSelected={false}
          onProductSelect={onProductSelect}
          key={i}
        />
      ))}
    </section>
  );
}

export default ProductLists;
