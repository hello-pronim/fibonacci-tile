import { useAppContext } from "@contexts/AppContext";
import BreadCrumb from "@components/common/breadcrumb";
import SelectedProductCard from "@components/common/product/selectedCard";
import ArrowButton from "@components/common/button/arrowButton";
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
  NoSamples,
  CheckoutFooter,
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
  const { checkoutStep, confirmedProducts, selectedProducts } = state;
  let disabled = false;
  if (
    confirmedProducts?.length === 0 ||
    confirmedProducts?.length > 6 ||
    selectedProducts?.length > 6
  ) {
    disabled = true;
  }
  const crumbs = [
    { path: "/terrazo", name: "Terrazzo" },
    { path: "/checkout", name: "Checkout" },
  ];
  const stepChange = (step) => {
    if (disabled) {
      return;
    }
    if (step === 4) {
      // Reset step to 1
      dispatch({
        type: "SET_CHECKOUT_STEP",
        value: 1,
      });
    }
    if (step !== 4) {
      dispatch({
        type: "SET_CHECKOUT_STEP",
        value: step,
      });
    }
  };
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
          {selectedProducts?.length > 0 && (
            <CheckoutContentWrapper>
              {checkoutStep === 1 && <Samples />}
              {checkoutStep === 2 && <Details />}
              {checkoutStep === 3 && <Delivery />}
              {checkoutStep === 4 && <Confirm />}
            </CheckoutContentWrapper>
          )}
          {selectedProducts?.length === 0 && (
            <NoSamples>
              <p>No selected samples</p>
              <ArrowButton
                disabled={disabled}
                mode="dark"
                title="Continue Selections"
                link="/terrazzo"
              />
            </NoSamples>
          )}
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

      {checkoutStep === 1 && selectedProducts?.length > 0 && (
        <CheckoutFooter contentAlign="right">
          <span>{`You currently have ${confirmedProducts.length} selected, you can choose up 6 samples`}</span>
          <ArrowButton
            mode="dark"
            bgColor="white"
            title="Continue to Details"
            link=""
            onClick={() => stepChange(2)}
            disabled={disabled}
          />
        </CheckoutFooter>
      )}

      {checkoutStep === 2 && (
        <CheckoutFooter contentAlign="right">
          <div className="back" onClick={() => stepChange(1)}>
            Back
          </div>
          <ArrowButton
            mode="dark"
            bgColor="white"
            title="Continue to Delivery"
            link=""
            onClick={() => stepChange(3)}
            disabled={disabled}
          />
        </CheckoutFooter>
      )}

      {checkoutStep === 3 && (
        <CheckoutFooter contentAlign="left">
          <ArrowButton
            mode="dark"
            bgColor="white"
            title="Continue to Confirmation"
            link=""
            onClick={() => stepChange(4)}
            disabled={disabled}
          />
          <div className="back" onClick={() => stepChange(2)}>
            Back
          </div>
        </CheckoutFooter>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutPage;
