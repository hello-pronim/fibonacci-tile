import React, { useEffect, useState, useRef, useCallback } from "react";
import { initializeApollo } from "@utils/apolloClient";
import { useAppContext } from "@contexts/AppContext";
import { ProductsQuery } from "@gql/productGQL";
import CustomSolutionsCTAPanel from "@components/common/customSolutionsCtaPanel";
import ProductsHeader from "./Header";
import ProductFilterBar from "./blocks/FilterBar";
import CTAPanel from "./blocks/CTAPanel";
import SectionTitle from "./blocks/SectionTitle";
import ProductLists from "./blocks/ProductList";
import Slider from "./blocks/Slider";
import { Container } from "./styles";

const ProductsPage = ({
  pageData,
  collectionPageData,
  products: initialProducts,
  colourSchemes,
  productCategories,
  cta1,
  cta2,
  customSolutionsCta,
  notifications,
}) => {
  const client = initializeApollo();
  const { state } = useAppContext();
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [firstHalfProducts, setFirstHalfProducts] = useState(
    initialProducts.slice(0, 15)
  );
  const [secondHalfProducts, setSecondHalfProducts] = useState(
    initialProducts.slice(15)
  );
  const [showFilterBar, setShowFilterBar] = useState(false);
  const ref = useRef(null);
  const banners = [];
  if (pageData?.bannerImage?.length > 0) {
    banners.push({
      bannerImage: pageData.bannerImage[0],
      bannerIntro: pageData.bannerIntro,
      bannerHeading: pageData.bannerHeading,
      bannerSubline: pageData.bannerInnerSubline,
      bannerCTA: pageData.bannerCTA,
    });
  }
  if (collectionPageData?.bannerImage?.length > 0) {
    banners.push({
      bannerImage: collectionPageData.bannerImage[0],
      bannerIntro: collectionPageData.bannerIntro,
      bannerHeading: collectionPageData.bannerHeading,
      bannerSubline: collectionPageData.bannerInnerSubline,
      bannerCTA: collectionPageData.bannerCTA,
      bannerLinkTo: "/terrazzo/collections",
    });
  }

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
      setSecondHalfProducts(products.slice(15));
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
      {!showFilterBar && <ProductsHeader notifications={notifications} />}
      <Slider items={banners} />
      <SectionTitle show={showFilterBar} title={pageData.bannerSubline} />
      <section ref={ref}>
        <ProductFilterBar
          applyFilter={applyFilter}
          show={showFilterBar}
          colourSchemes={colourSchemes}
          productCategories={productCategories}
        />
      </section>
      <ProductLists
        sideText={pageData.productsSideText}
        loadingProducts={loadingProducts}
        products={firstHalfProducts}
        accentText="Be inspired"
      />
      {cta1?.CTAFields?.length > 0 && (
        <CTAPanel data={cta1.CTAFields[0]} imagePosition="left" />
      )}
      {secondHalfProducts.length > 0 && (
        <ProductLists
          sideText=""
          loadingProducts={loadingProducts}
          products={secondHalfProducts}
        />
      )}
      {cta2?.CTAFields?.length > 0 && (
        <CTAPanel data={cta2.CTAFields[0]} imagePosition="right" />
      )}
      {customSolutionsCta?.length > 0 && (
        <CustomSolutionsCTAPanel data={customSolutionsCta[0]} />
      )}
    </Container>
  );
};

export default ProductsPage;
