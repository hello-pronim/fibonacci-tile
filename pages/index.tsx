import Head from "next/head";
import Homepage from "@components/pages/home";
import Header from "@componentscommon/header";

const Home = () => {

  return (
    <>
      <Head>
        <title>Home | Fibonacci</title>
        <meta name="description" content="Fibonacci Homepage" />
        <meta
          name="robots"
          content="index, follow"
        />
      </Head>
      <Header />
      <Homepage/>
    </>
  );
};

export default Home;
