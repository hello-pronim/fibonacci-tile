import React, { useEffect, useState, useRef, useCallback } from "react";
import ProductsHeader from "./Header";
import ProductFilterBar from "./blocks/FilterBar";
import CTAPanel from "./blocks/CTAPanel";
import FooterCTAPanel from "./blocks/FooterCTAPanel";
import SectionTitle from "./blocks/SectionTitle";
import ProductLists from "./blocks/ProductList";
import Slider from "./blocks/Slider";
import { useAppContext } from "@contexts/AppContext";
import { Container } from "./styles";

const ProductsPage = ({ products, colourSchemes, productCategories }) => {
  const { state } = useAppContext();
  const [showFilterBar, setShowFilterBar] = useState(false);
  const firstHalfProducts = products.slice(0, 15);
  const secondHalfProducts = products.slice(15, 15);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref && ref?.current?.offsetTop < window.pageYOffset + 370) {
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

  const applyFilter = useCallback(() => {
    console.log("Filter Query Data", state.filter);
  }, [state.filter]);

  useEffect(() => {
    if (!state.isMobileFilterActive) {
      applyFilter();
    }
  }, [applyFilter, state.isMobileFilterActive]);

  return (
    <Container>
      <ProductsHeader />
      <Slider />
      <SectionTitle
        show={showFilterBar}
        title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built."
      />
      <section ref={ref}>
        <ProductFilterBar
          applyFilter={applyFilter}
          show={showFilterBar}
          colourSchemes={colourSchemes}
          productCategories={productCategories}
        />
      </section>
      <ProductLists products={firstHalfProducts} accentText="Be inspired" />
      <CTAPanel imagePosition="left" />
      {secondHalfProducts.length > 0 && <ProductLists products={products} />}
      <CTAPanel imagePosition="right" />
      <FooterCTAPanel />
    </Container>
  );
};

export default ProductsPage;
