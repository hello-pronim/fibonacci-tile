import React, { useEffect, useState, useRef } from "react";
import Container from "@components/common/layout/container";
import ProductFilterBar from "@components/common/product/filterBar";
import ProductsHeader from "./Header";
import CTAPanel from "./blocks/CTAPanel";
import FooterCTAPanel from "./blocks/FooterCTAPanel";
import SectionTitle from "./blocks/SectionTitle";
import ProductLists from "./blocks/ProductList";

const ProductsPage = () => {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref && ref.current.offsetTop < window.pageYOffset) {
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
  return (
    <Container>
      <ProductsHeader />
      <SectionTitle title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built." />
      <section ref={ref}>
        <ProductFilterBar show={showFilterBar} />
      </section>
      <ProductLists items={[...Array(15)]} />
      <CTAPanel imagePosition="left" />
      <ProductLists items={[...Array(15)]} />
      <CTAPanel imagePosition="right" />
      <FooterCTAPanel />
    </Container>
  );
};
export default ProductsPage;
