import { useAppContext } from "@contexts/AppContext";
import BreadCrumb from "@components/common/breadcrumb";
import SelectedProductCard from "@components/common/product/selectedCard";
import ProductsHeader from "../products/Header";
import Samples from "./components/samples";
import Details from "./components/details";
import StepItem from "./components/stepItem";
import Delivery from "./components/delivery";
import Confirm from "./components/confirm";

import {
  CheckoutStepWrapper,
  CheckoutContentWrapper,
  CheckoutContainer,
  CheckoutWrapper,
  LeftContent,
  RightContent,
  SelectionWrapper,
} from "./styles";

import Abstrakt from "public/tmp/prod/abstrakt.jpeg";
import ActThree from "public/tmp/prod/actThree.jpeg";
import Assemblage from "public/tmp/prod/assemblage.jpeg";
import Brackish from "public/tmp/prod/brackish.jpeg";
import Carmelita from "public/tmp/prod/carmelita.jpeg";
import CloudBurst from "public/tmp/prod/cloudBurst.jpeg";

const products = [
  {
    id: "1",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "abstrakt",
    subHeading: "Complex • Robust • Diverse",
    title: "Abstrakt",
    uri: "/products/abstrakt",
    img1: Abstrakt,
  },
  {
    id: "2",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "act-three",
    subHeading: "Complex • Robust • Diverse",
    title: "Act Three",
    uri: "/products/act-three",
    img1: ActThree,
  },
  {
    id: "3",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "assemblage",
    subHeading: "Complex • Robust • Diverse",
    title: "Assemblage",
    uri: "/products/assemblage",
    img1: Assemblage,
  },
  {
    id: "5",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "brackish",
    subHeading: "Complex • Robust • Diverse",
    title: "Brackish",
    uri: "/products/brackish",
    img1: Brackish,
  },
  {
    id: "6",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "carmelita",
    subHeading: "Complex • Robust • Diverse",
    title: "Carmelita",
    uri: "/products/carmelita",
    img1: Carmelita,
  },
  {
    id: "7",
    richText:
      "<p>A democratic mix of colours, shapes and sizes, displaying the great egalitarian hallmarks of robustness and diversity.</p>",
    slug: "cloudburst",
    subHeading: "Complex • Robust • Diverse",
    title: "Cloudburst",
    uri: "/products/cloudburst",
    img1: CloudBurst,
  },
];
const CheckoutPage = ({ notifications }) => {
  const { state, dispatch } = useAppContext();
  const { checkoutStep, confirmedProducts } = state;
  const crumbs = [
    { path: "/products", name: "Products" },
    { path: "/checkout", name: "Checkout" },
  ];
  return (
    <CheckoutContainer>
      <ProductsHeader mode="dark" notifications={notifications} />
      <CheckoutWrapper>
        <LeftContent
          displayRight={checkoutStep === 1 || checkoutStep === 4 ? false : true}
        >
          <BreadCrumb crumbs={crumbs} />
          <CheckoutStepWrapper>
            <StepItem step={1} />
            <StepItem step={2} />
            <StepItem step={3} />
            <StepItem step={4} />
          </CheckoutStepWrapper>
          <CheckoutContentWrapper>
            {checkoutStep === 1 && <Samples />}
            {checkoutStep === 2 && <Details />}
            {checkoutStep === 3 && <Delivery />}
            {checkoutStep === 4 && <Confirm />}
          </CheckoutContentWrapper>
        </LeftContent>
        <RightContent
          displayRight={checkoutStep === 2 || checkoutStep === 3 ? true : false}
        >
          <p>
            Selections (
            {confirmedProducts?.length > 0 ? confirmedProducts?.length : 0})
          </p>

          <SelectionWrapper>
            {confirmedProducts &&
              confirmedProducts.map((product) => (
                <SelectedProductCard
                  product={product}
                  isSelected={
                    state?.selectedProducts.findIndex(
                      (sp) => sp.id === product.id
                    ) !== -1
                  }
                  toggleProductSelect={() =>
                    dispatch({
                      type: "TOGGLE_CONFIRM_PRODUCT_SELECTION",
                      product,
                    })
                  }
                  key={`product-${product.id}`}
                  confirmSample={true}
                />
              ))}
          </SelectionWrapper>
        </RightContent>
      </CheckoutWrapper>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
