import React, { useEffect, useState, useRef } from "react";
import ProductsHeader from "./Header";
import ProductFilterBar from "./blocks/FilterBar";
import CTAPanel from "./blocks/CTAPanel";
import FooterCTAPanel from "./blocks/FooterCTAPanel";
import SectionTitle from "./blocks/SectionTitle";
import ProductLists from "./blocks/ProductList";
import styles from './styles.module.scss';
import Slider from "./blocks/Slider";
import { useAppContext } from "@contexts/AppContext";

const ProductsPage = ({ products }) => {
  const { state, dispatch } = useAppContext();
  const [showFilterBar, setShowFilterBar] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (ref && ref?.current?.offsetTop < window.pageYOffset + 700) {
        setShowFilterBar(true);
      } else {
        setShowFilterBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  useEffect(() => {
    console.log("Filter state changed fetching filtered products....");
  },[state.filter]);

  return (
    <div className={styles.container}>
      <ProductsHeader />
      <Slider/>
      <SectionTitle title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built." />
      <section ref={ref}>
        <ProductFilterBar show={showFilterBar} />
      </section>
      <ProductLists products={products} accentText="Be inspired"/>
      <CTAPanel imagePosition="left" />
      <ProductLists products={products} />
      <CTAPanel imagePosition="right" />
      <FooterCTAPanel />
    </div>
  );
};
export default ProductsPage;
