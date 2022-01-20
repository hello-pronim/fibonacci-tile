import {
    TopBar,
    ProductContainer,
    ButtonWrapper,
    BttnLeftPadding
} from "./styles";
import Text from "@componentscommon/typography";
import { css } from "@styled-system/css";
import ProductCard from "@components/common/product/card";
import Abstrakt from 'public/tmp/prod/abstrakt.jpeg';
import ActThree from 'public/tmp/prod/actThree.jpeg';
import Assemblage from 'public/tmp/prod/assemblage.jpeg';
import Bloc from 'public/tmp/prod/bloc.jpeg';
import Brackish from 'public/tmp/prod/brackish.jpeg';
import Carmelita from 'public/tmp/prod/carmelita.jpeg';
import CloudBurst from 'public/tmp/prod/cloudBurst.jpeg';
import CoolStream from 'public/tmp/prod/coolStream.jpeg';
import { useAppContext } from "@contexts/AppContext";
import Button from "@componentscommon/button";


const products = [
    {
      id: "1",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "abstrakt",
      subHeading: "Complex • Robust • Diverse",
      title: "Abstrakt",
      uri: "/products/abstrakt",
      img1: Abstrakt,
    },
    {
      id: "2",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "act-three",
      subHeading: "Complex • Robust • Diverse",
      title: "Act Three",
      uri: "/products/act-three",
      img1: ActThree,
    },
    {
      id: "3",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "assemblage",
      subHeading: "Complex • Robust • Diverse",
      title: "Assemblage",
      uri: "/products/assemblage",
      img1: Assemblage,
    },
    {
      id: "5",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "brackish",
      subHeading: "Complex • Robust • Diverse",
      title: "Brackish",
      uri: "/products/brackish",
      img1: Brackish,
    },
    {
      id: "6",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "carmelita",
      subHeading: "Complex • Robust • Diverse",
      title: "Carmelita",
      uri: "/products/carmelita",
      img1: Carmelita,
    },
    {
      id: "7",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "cloudburst",
      subHeading: "Complex • Robust • Diverse",
      title: "Cloudburst",
      uri: "/products/cloudburst",
      img1: CloudBurst,
    },
    {
      id: "8",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "coolstream",
      subHeading: "Complex • Robust • Diverse",
      title: "CoolStream",
      uri: "/products/coolstream",
      img1: CoolStream,
    },
    {
      id: "9",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "abstrakt",
      subHeading: "Complex • Robust • Diverse",
      title: "Abstrakt",
      uri: "/products/abstrakt",
      img1: Abstrakt,
    },
    {
      id: "10",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "act-three",
      subHeading: "Complex • Robust • Diverse",
      title: "Act Three",
      uri: "/products/act-three",
      img1: ActThree,
    },
    {
      id: "11",
      richText: "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
      slug: "assemblage",
      subHeading: "Complex • Robust • Diverse",
      title: "Assemblage",
      uri: "/products/assemblage",
      img1: Assemblage,
    },
]
const Samples = () => {
  const { state, dispatch } = useAppContext();

    return (
        <>
          <TopBar>
          <Text
                variant="Display-Large"
                altFont
                css={css({
                    fontSize: 32,
                })}
            >
                Confirm your six Fibonacci samples
            </Text>
            <ButtonWrapper>
              <Button mode="dark" title="Share my selections" link="http://localhost:3000/products" />
              <BttnLeftPadding>
              <Button mode="dark" title="Need more than six samples " link="http://localhost:3000/products" />
              </BttnLeftPadding>
            </ButtonWrapper>
          </TopBar>
          <ProductContainer>
          {products.map((product) => (
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
          </ProductContainer>  
        </>
    )
}

export default Samples;