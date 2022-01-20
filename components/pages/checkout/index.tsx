import { useAppContext } from "@contexts/AppContext";
import BreadCrumb from "@components/common/breadcrumb";
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
    RightContent
} from "./styles";

const CheckoutPage = () => {
    const { state: { checkoutStep } } = useAppContext();
    const crumbs= [
        { path: "/products", name: "Products" },
        { path: "/checkout", name: "Checkout" },
    ]
    return (
        <CheckoutContainer>
            <ProductsHeader mode="dark"/>
            <CheckoutWrapper>
                <LeftContent displayRight={checkoutStep === 1 || checkoutStep === 4 ? false : true}>
                    <BreadCrumb crumbs={crumbs}/>
                    <CheckoutStepWrapper>
                        <StepItem step={1} />
                        <StepItem step={2} />
                        <StepItem step={3} />
                        <StepItem step={4} />
                    </CheckoutStepWrapper>
                    <CheckoutContentWrapper>
                        {checkoutStep === 1 && <Samples/>}
                        {checkoutStep === 2 && <Details/>}
                        {checkoutStep === 3 && <Delivery/>}
                        {checkoutStep === 4 && <Confirm/>}
                    </CheckoutContentWrapper>
                </LeftContent>
                <RightContent displayRight={checkoutStep === 2 || checkoutStep === 3 ? true : false}>
                    <h2>selection sidebar</h2>
                </RightContent>
            </CheckoutWrapper>
        </CheckoutContainer>
    )
}

export default CheckoutPage;