import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import useOnClickOutside from "use-onclickoutside";
import { useAppContext } from "@contexts/AppContext";
import SelectionCount from "@components/common/product/selectionCount";
import Text from "@components/common/typography";
import SearchIcon from "@components/icons/search";
import ArrowDownIcon from "@components/icons/arrowDown";
import GridIcon from "@components/icons/grid";
import ListIcon from "@components/icons/list";
import CloseIcon from "@components/icons/close";
import CollectionIcon from "@components/icons/collection";
import theme from "styles/theme";
import ProductFilter from "./ProductFilter";
import SortByFilter from "./SortByFilter";
import SearchFilter from "./SearchFilter";
import ColourSchemeFilter from "./ColourSchemeFilter";
import Logo from "public/assets/brandmarks/symbol-primary.svg";
import {
  ApplyButton,
  ColorSchemeItem, //
  ColorSchemes, //
  CloseButton,
  Container,
  DisplayIcon,
  DisplayOptions,
  DisplayOptionsContainer,
  FilterContainer,
  Filters,
  IconContainer,
  LogoWrapper,
  MobileFilter,
  MobileFilterContainer,
  ProductItem, //
  ProductSelection,
  SearchItem,
  Selections,
  SortByItem, //
  TopBar,
} from "./styles";

export default function ProductFilters({ show, applyFilter }) {
  const { state, dispatch } = useAppContext();
  const [activeFilter, setActiveFilter] = useState(null);
  const [isMobileFilterActive, setIsMobileFilterActive] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setActiveFilter(null);
  });

  const changeDisplayMode = (mode) => {
    dispatch({
      type: "PRODUCT_DISPLAY_MODE",
      value: mode,
    });
  };

  const handleActiveFilter = (filterType) => {
    return () => {
      if (activeFilter === filterType) {
        setActiveFilter(null);
      } else {
        setActiveFilter(filterType);
      }
    };
  };

  const toggleMobileFilter = () => {
    if (!isMobileFilterActive) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setIsMobileFilterActive(!isMobileFilterActive);
    dispatch({
      type: "SET_MOBILE_FILTER",
      value: !isMobileFilterActive,
    });
  };

  return (
    <Container ref={ref} active={show}>
      <TopBar>
        <LogoWrapper>
          {Logo && (
            <Link href="/">
              <a>
                <Image
                  src={Logo}
                  layout="fixed"
                  width="36px"
                  height="36px"
                  alt="Fibonacci"
                />
              </a>
            </Link>
          )}
          {!Logo && (
            <Link href="/">
              <a> Fibonacci </a>
            </Link>
          )}
        </LogoWrapper>
        <MobileFilter onClick={toggleMobileFilter}>
          <Text variant="Body-Small" mr="10px">
            Filter by
          </Text>
          <ArrowDownIcon />
        </MobileFilter>
        <Filters>
          <SearchItem
            active={activeFilter === "search"}
            onClick={handleActiveFilter("search")}
          >
            <Text variant="Display-Overline" mr="10px">
              Search
            </Text>
            <SearchIcon />
          </SearchItem>
          <ProductSelection
            active={activeFilter === "products"}
            onClick={handleActiveFilter("products")}
          >
            <Text variant="Body-Small" mr="10px">
              Products
            </Text>
            <ArrowDownIcon />
          </ProductSelection>
          <ColorSchemes
            active={activeFilter === "colour-schemes"}
            onClick={handleActiveFilter("colour-schemes")}
          >
            <Text variant="Body-Small" mr="10px">
              Colour Schemes
            </Text>
            <ArrowDownIcon />
          </ColorSchemes>
          <SortByItem
            active={activeFilter === "sort-by"}
            onClick={handleActiveFilter("sort-by")}
          >
            <Text variant="Body-Small" mr="10px">
              Sort by
            </Text>
            <ArrowDownIcon />
          </SortByItem>
        </Filters>
        <DisplayOptionsContainer>
          <DisplayOptions>
            <IconContainer
              active={state?.productDisplayMode === "grid"}
              onClick={() => changeDisplayMode("grid")}
            >
              <DisplayIcon>
                <GridIcon />
              </DisplayIcon>
            </IconContainer>
            <IconContainer
              active={state?.productDisplayMode === "list"}
              onClick={() => changeDisplayMode("list")}
            >
              <DisplayIcon>
                <ListIcon />
              </DisplayIcon>
            </IconContainer>
            <IconContainer
              active={state?.productDisplayMode === "collection"}
              onClick={() => changeDisplayMode("collection")}
            >
              <DisplayIcon>
                <CollectionIcon />
              </DisplayIcon>
            </IconContainer>
          </DisplayOptions>
        </DisplayOptionsContainer>
        <Selections>
          <Text variant="Display-Overline">Selections</Text> <SelectionCount />
        </Selections>
      </TopBar>
      {isMobileFilterActive && (
        <MobileFilterContainer>
          <CloseButton onClick={toggleMobileFilter}>
            <CloseIcon />
          </CloseButton>
          <Text
            variant="Body-Large"
            as="div"
            display="block"
            mt="35px"
            mb="20px"
          >
            Filter
          </Text>
          <div>
            <ProductItem
              active={activeFilter === "products"}
              onClick={handleActiveFilter("products")}
            >
              <Text variant="Body-XSmall" mr="10px">
                Products{" "}
                <Text
                  variant="Body-XSmall"
                  color={theme.colors.concreteTints[5]}
                >
                  Selection
                </Text>
              </Text>
              <ArrowDownIcon />
            </ProductItem>
            {activeFilter === "products" && <ProductFilter />}
            <ColorSchemeItem
              active={activeFilter === "colour-schemes"}
              onClick={handleActiveFilter("colour-schemes")}
            >
              <Text variant="Body-XSmall" mr="10px">
                Colour Schemes{" "}
                <Text
                  variant="Body-XSmall"
                  color={theme.colors.concreteTints[5]}
                >
                  Selection{" "}
                </Text>
              </Text>
              <ArrowDownIcon />
            </ColorSchemeItem>
            {activeFilter === "colour-schemes" && <ColourSchemeFilter />}
            <SortByItem
              active={activeFilter === "sort-by"}
              onClick={handleActiveFilter("sort-by")}
            >
              <Text variant="Body-XSmall" mr="10px">
                Sort by{" "}
                <Text
                  variant="Body-XSmall"
                  color={theme.colors.concreteTints[5]}
                >
                  Selection{" "}
                </Text>
              </Text>
              <ArrowDownIcon />
            </SortByItem>
            {activeFilter === "sort-by" && <SortByFilter />}
            <SearchItem
              active={activeFilter === "search"}
              onClick={handleActiveFilter("search")}
            >
              <Text variant="Body-XSmall" mr="10px">
                Search{" "}
                <Text
                  variant="Body-XSmall"
                  color={theme.colors.concreteTints[5]}
                >
                  Selection{" "}
                </Text>
              </Text>
              <SearchIcon />
            </SearchItem>
            {activeFilter === "search" && <SearchFilter />}
          </div>
          {isMobileFilterActive && (
            <ApplyButton onClick={() => applyFilter()}>Apply</ApplyButton>
          )}
        </MobileFilterContainer>
      )}
      {!isMobileFilterActive && activeFilter && (
        <FilterContainer>
          {activeFilter === "search" && <SearchFilter />}
          {activeFilter === "products" && <ProductFilter />}
          {activeFilter === "sort-by" && <SortByFilter />}
          {activeFilter === "colour-schemes" && <ColourSchemeFilter />}
        </FilterContainer>
      )}
    </Container>
  );
}
