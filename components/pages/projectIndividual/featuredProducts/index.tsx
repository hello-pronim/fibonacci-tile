import css from "@styled-system/css";
import { useAppContext } from "@contexts/AppContext";
import Text from "@components/common/typography";
import Container from "@components/common/layout/container";
import ProductCard from "@components/common/product/card";
import { LeftCol, RightCol } from "./styles";

const FeaturedProducts = ({ products }) => {
  const { state, dispatch } = useAppContext();
  return (
    <Container css={css({ pt: 180, pb: 120 })}>
      <LeftCol>
        <Text variant="Display-Medium" altFont>
          Featured Products
        </Text>
      </LeftCol>
      <RightCol>
        {products.length > 0 &&
          products.map((product: any) => {
            return (
              <ProductCard
                key={`fproduct-${product.slug}`}
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
                product={product}
              />
            );
          })}
      </RightCol>
    </Container>
  );
};
export default FeaturedProducts;
