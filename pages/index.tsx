import Head from "next/head";
import Homepage from "@components/pages/home";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Fibonacci</title>
        <meta name="description" content="Fibonacci Homepage" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="dark" />
      <Homepage />
      <Footer />
    </>
  );
};

export default Home;
