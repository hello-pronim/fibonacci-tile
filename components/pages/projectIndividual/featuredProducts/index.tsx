import React from "react";
import Text from "@components/common/typography";
import { LeftCol, RightCol } from "./styles";
import Container from "@components/common/layout/container";
import ProductCard from "@components/common/product/card";
import { useAppContext } from "@contexts/AppContext";
import css from '@styled-system/css';
import Abstrakt from "public/tmp/prod/abstrakt.jpeg";
import ActThree from "public/tmp/prod/actThree.jpeg";
import Assemblage from "public/tmp/prod/assemblage.jpeg";
import Bloc from "public/tmp/prod/bloc.jpeg";

// const products = [
//   {
//     id: "1",
//     richText:
//       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
//     slug: "abstrakt",
//     subHeading: "Complex • Robust • Diverse",
//     title: "Abstrakt",
//     uri: "/products/abstrakt",
//     img1: Abstrakt,
//   },
//   {
//     id: "2",
//     richText:
//       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
//     slug: "act-three",
//     subHeading: "Complex • Robust • Diverse",
//     title: "Act Three",
//     uri: "/products/act-three",
//     img1: ActThree,
//   },
//   {
//     id: "3",
//     richText:
//       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
//     slug: "assemblage",
//     subHeading: "Complex • Robust • Diverse",
//     title: "Assemblage",
//     uri: "/products/assemblage",
//     img1: Assemblage,
//   },
//   {
//     id: "4",
//     richText:
//       "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
//     slug: "bloc",
//     subHeading: "Complex • Robust • Diverse",
//     title: "Bloc",
//     uri: "/products/bloc",
//     img1: Bloc,
//   },
// ];

const FeaturedProducts = ({ products }) => {
  const { state, dispatch } = useAppContext();
  return (
    <Container css={css({pt: 180, pb: 120})}>
      <LeftCol>
        <Text variant="Display-Medium" altFont>
          Featured Products
        </Text>
      </LeftCol>
      <RightCol>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                isSelected={
                  state?.selectedProducts.findIndex(
                    (sp) => sp.id === product.id
                  ) !== -1
                }
                toggleProductSelect={() => {
                  dispatch({
                    type: "TOGGLE_PRODUCT_SELECTION",
                    product,
                  });
                }}
                key={product.id}
                product={product}
              />
            );
          })}
      </RightCol>
    </Container>
  );
};
export default FeaturedProducts;
