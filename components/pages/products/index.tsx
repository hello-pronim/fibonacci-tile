import React, { useEffect, useState, useRef } from "react";
import Container from "@components/common/layout/container";
import ProductsHeader from "./Header";
import ProductFilterBar from "./blocks/FilterBar";
import CTAPanel from "./blocks/CTAPanel";
import FooterCTAPanel from "./blocks/FooterCTAPanel";
import SectionTitle from "./blocks/SectionTitle";
import ProductLists from "./blocks/ProductList";

const ProductsPage = () => {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref && ref.current.offsetTop < window.pageYOffset + 60) {
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
  const products = [
    {
      id: 1,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 2,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 3,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 4,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 5,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 6,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 7,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 8,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 9,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 10,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 11,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 12,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 13,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 14,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
    {
      id: 15,
      name: "Neues Grey Superfine",
      description: " Word • Word • Word",
    },
  ];
  return (
    <Container>
      <ProductsHeader />
      <SectionTitle title="40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built." />
      <section ref={ref}>
        <ProductFilterBar show={showFilterBar} />
      </section>
      <ProductLists items={products} />
      <CTAPanel imagePosition="left" />
      <ProductLists items={[...Array(15)]} />
      <CTAPanel imagePosition="right" />
      <FooterCTAPanel />
    </Container>
  );
};
export default ProductsPage;
