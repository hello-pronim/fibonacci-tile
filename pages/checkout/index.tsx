import Head from "next/head";
import Footer from "@components/common/footer";
import CheckoutPage from "@components/pages/checkout";


function Checkout () {
    return (
        <>
            <Head>
                <title>Checkout | Fibonacci</title>
                <meta name="description" content="Fibonacci Checkout page" />
            </Head>
            <CheckoutPage />
            <Footer />
        </>
    )
}
export default Checkout;
