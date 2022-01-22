import ProductCard from "@components/common/product/card";
import Text from "@components/common/typography";
import { useAppContext } from "@contexts/AppContext";
import AccentText from "@components/common/accentText";
import {
  Container,
  DisplayDescription,
  DisplayInnerTable,
  DisplayListTable,
  DisplayPatternImage,
  DisplayProductName,
  DivOne,
  DivTwo,
  TableActionContainer,
  TableHeader,
  TableHeaderLeft,
  TableHeaderRight,
} from "./styles";

interface productListProps {
  products: any;
  accentText?: string;
}

function ProductLists({ products, accentText }: productListProps) {
  const { state, dispatch } = useAppContext();
  return (
    <Container listView={state?.productDisplayMode === "list"}>
      {accentText && <AccentText top={120}>Be inspired</AccentText>}
      {state?.productDisplayMode === "list" && (
        <DisplayListTable>
          <TableHeader>
            <TableHeaderLeft>
              <DisplayProductName>
                <Text variant="Display-Overline">Product Name</Text>
              </DisplayProductName>
              <DisplayInnerTable>
                <DivOne>
                  <Text variant="Display-Overline">Available In</Text>
                </DivOne>
                <DivTwo>
                  <Text variant="Display-Overline">Collection Name</Text>
                </DivTwo>
              </DisplayInnerTable>
              <DisplayDescription>
                <Text variant="Display-Overline">Description</Text>
              </DisplayDescription>
            </TableHeaderLeft>
            <TableHeaderRight>
              <DisplayPatternImage>
                <Text variant="Display-Overline">Image</Text>
              </DisplayPatternImage>
              <TableActionContainer></TableActionContainer>
            </TableHeaderRight>
          </TableHeader>
          {products.map((product: any) => {
            return (
              <ProductCard
                displayMode="list"
                product={product}
                isSelected={
                  state?.selectedProducts.findIndex(
                    (sp) => sp.id === product.id
                  ) !== -1
                }
                toggleProductSelect={() =>
                  dispatch({
                    type: "TOGGLE_PRODUCT_SELECTION",
                    product,
                  })
                }
                key={`product-${product.id}`}
              />
            );
          })}
        </DisplayListTable>
      )}
      {state?.productDisplayMode !== "list" &&
        products.map((product) => (
          <ProductCard
            displayMode={state?.productDisplayMode}
            product={product}
            isSelected={
              state?.selectedProducts.findIndex(
                (sp) => sp.id === product.id
              ) !== -1
            }
            toggleProductSelect={() =>
              dispatch({
                type: "TOGGLE_PRODUCT_SELECTION",
                product,
              })
            }
            key={`product-${product.id}`}
          />
        ))}
    </Container>
  );
}

export default ProductLists;
