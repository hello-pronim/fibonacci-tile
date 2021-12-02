
import ProductCard from "@components/common/product/card";
import { useAppContext } from "@contexts/AppContext";
import Text from "@components/common/typography";

import {
  RelatedProductsContainer,
  Heading,
  Container
} from "./styles";


const RelatedProducts = ({ products, title }) => {
  const { state, dispatch } = useAppContext();
  return (
    <RelatedProductsContainer>
      <Heading>
        <Text altFont={true} variant="Display-Medium">{title}</Text>
      </Heading>
      <Container>
        {products?.map((product) => {
          return(
            <ProductCard
              isSelected={
                state?.selectedProducts.findIndex((sp) => sp.id === product.id) !== -1
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
          )
        })}
      </Container>
    </RelatedProductsContainer>
  );
};

export default RelatedProducts;
