import Head from "next/head";
import Footer from "@components/common/footer";
import AboutPage from "@components/pages/about";

const About = () => {
  return (
    <>
      <Head>
        <title>Our story | Fibonacci</title>
        <meta name="description" content="Fibonacci About page" />
      </Head>
      <AboutPage />
      <Footer />
    </>
  );
};

export default About;
