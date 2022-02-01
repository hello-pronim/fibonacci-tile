import React, { useEffect, useState, useRef, useCallback } from "react";
import client from "@utils/apolloClient";
import { useAppContext } from "@contexts/AppContext";
import { ProductsQuery } from "@gql/productGQL";
import ProductsHeader from "./Header";
import ProductFilterBar from "./blocks/FilterBar";
import CTAPanel from "./blocks/CTAPanel";
import FooterCTAPanel from "./blocks/FooterCTAPanel";
import SectionTitle from "./blocks/SectionTitle";
import ProductLists from "./blocks/ProductList";
import Slider from "./blocks/Slider";
import { Container } from "./styles";

const ProductsPage = ({
  products: initialProducts,
  colourSchemes,
  productCategories,
}) => {
  const { state } = useAppContext();
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [firstHalfProducts, setFirstHalfProducts] = useState(
    initialProducts.slice(0, 15)
  );
  const [secondHalfProducts, setSecondHalfProducts] = useState(
    initialProducts.slice(15, 15)
  );
  const [showFilterBar, setShowFilterBar] = useState(false);
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
    const filterVars: any = {
      productCategories: [],
      colourSchemes: [],
      search: state.filter.searchText ? state.filter.searchText : "",
    };
    if (state.filter.products.value && state.filter.products.value !== "all") {
      filterVars.productCategories = [state.filter.products.value];
    }
    if (state.filter.colourSchemes.length > 0) {
      filterVars.colourSchemes = state.filter.colourSchemes;
    }
    if (state.filter?.sortBy?.value) {
      switch (state.filter.sortBy.value) {
        case "asc":
          filterVars.orderBy = "title ASC";
          break;
        case "desc":
          filterVars.orderBy = "title DESC";
          break;
        case "featured":
          // todo check if we can do group by
          break;
        case "collections":
          break;
      }
    }
    async function fetchProducts() {
      setLoadingProducts(true);
      const {
        data: { entries: products },
      } = await client.query({
        query: ProductsQuery,
        variables: filterVars,
      });
      setFirstHalfProducts(products.slice(0, 15));
      setSecondHalfProducts(products.slice(15, 15));
      setLoadingProducts(false);
    }
    fetchProducts();
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
      <ProductLists
        loadingProducts={loadingProducts}
        products={firstHalfProducts}
        accentText="Be inspired"
      />
      <CTAPanel imagePosition="left" />
      {secondHalfProducts.length > 0 && (
        <ProductLists
          loadingProducts={loadingProducts}
          products={secondHalfProducts}
        />
      )}
      <CTAPanel imagePosition="right" />
      <FooterCTAPanel />
    </Container>
  );
};

export default ProductsPage;
