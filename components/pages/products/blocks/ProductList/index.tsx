import ProductCard from "@components/common/product/card";
import Text from "@components/common/typography";
import { useAppContext } from "@contexts/AppContext";
import AccentText from "@components/common/accentText";
import Loading from "@components/icons/loading";
import Arrow from "@components/common/icons/arrow";
import {
  Container,
  PageTitle,
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
  LinkWrapper,
} from "./styles";

interface productListProps {
  sideText: string;
  products: any;
  accentText?: string;
  loadingProducts?: boolean;
}

function ProductLists({
  sideText = "Be inspired",
  products,
  accentText,
  loadingProducts = false,
}: productListProps) {
  const { state, dispatch } = useAppContext();
  return (
    <Container listView={state?.productDisplayMode === "list"}>
      {accentText && <AccentText top={120}>{sideText}</AccentText>}
      {loadingProducts && <Loading />}
      {products.length === 0 && (
        <div className="zeroStateBlock">
          <PageTitle Base="h2" variant="Display-Large">
            We couldn&rsquo;t find any products you were looking for at this time.{" "}
          </PageTitle>
          <p>
            Try resetting your filters to find what products you are looking for.
          </p>
          <LinkWrapper
            onClick={() => {
              dispatch({ type: "RESET_PRODUCT_FILTER" });
            }}
          >
            Reset your filters
            <Arrow type="short" />
          </LinkWrapper>
        </div>
      )}
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
