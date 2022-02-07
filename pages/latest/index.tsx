import React, { useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { PageQuery, NewsletterQuery } from "@gql/pageGQL";
import { NewsQuery } from "@gql/newsGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import BreadCrumb from "@components/common/breadcrumb";
import client from "@utils/apolloClient";
import Head from "next/head";
import Footer from "@components/common/footer";
import Header from "@components/common/header";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { withGlobalData } from "@hoc/withGlobalData";
import Hero from "@components/pages/latest/hero/index";
import BottomHero from "@components/pages/latest/bottom-hero";
import MobileCategory from "@components/pages/latest/mobileCategory";
import Category from "@components/pages/latest/categories/Category";
import { Card } from "@components/pages/latest/cards-container/Card";
import {
  AllCategory,
  CategorysBarInner,
  ReadMore
} from "@components/pages/latest/styles";

import styles from "./styles.module.scss";

interface LatestPageProps {
  newsItems: Array<any>;
  notifications: Array<any>;
  heroDetails: any;
  categories: any;
  newsletter: any;
  news: any
}

const LatestNews: NextPage<LatestPageProps> = ({ heroDetails, categories, news, newsletter, notifications }) => {
  const [selectedType, setSelectedType] = useState("all");
  const [displayedCategory, setDisplayedProjects] = useState(news);

  const onProjectTypeClick = (type) => {
    console.log("type", type)
    const cardsList = news.filter(
      (item) => item?.newsCategory[0]?.slug === type || type === "all"
    );

    setDisplayedProjects(cardsList);
    setSelectedType(type);
  };

  const Cards = displayedCategory.map((item, index) => {
    return (
      <Card
        key={index}
        component={item}
      />
    );
  });
  const useWidth = () => {
    if (process.browser) {
      const [width, setWidth] = useState(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [width]);
      return width;
    }
    return 0;
  };
  const windowWidth = useWidth();
  const crumbs = [
    { path: "/products", name: "Products" },
    { path: "/latest", name: "Latest" },
  ];
  return (
    <>
      <Head>
        <title>Latest | Fibonacci</title>
        <meta name="description" content="Fibonacci Latest page" />
      </Head>
      <Header mode="dark" notifications={notifications} />
      <BreadCrumb crumbs={crumbs} />
      <Hero heroDetails={heroDetails} />
      {windowWidth >= 769 ? (
        <CategorysBarInner>
          <AllCategory>
            <Category
                key={'all'}
                onClick={() => onProjectTypeClick('all')}
                active={'all' === selectedType}
                size="small"
                rounded
            >
              All
            </Category>
            {categories.map((category) => (
              <Category
                key={category.slug}
                onClick={() => onProjectTypeClick(category.slug)}
                active={category.slug === selectedType}
                size="small"
                rounded
              >
                {category.title}
              </Category>
            ))}
          </AllCategory>
        </CategorysBarInner>
      ) : (
        <MobileCategory />
      )}
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 425: 1, 767: 2, 1400: 3, 1660: 4 }}
      >
        <Masonry className={styles.container}>{Cards}</Masonry>
        {displayedCategory?.length > 5 ? (
          <ReadMore>
            {/* <ArrowButton mode="" title="Load more" link="#" size="" /> */}
          </ReadMore>
        ) : (
          <div></div>
        )}
      </ResponsiveMasonry>
      {newsletter?.length > 0 && 
        <BottomHero heading={newsletter[0].heading} subHeading={newsletter[0].subheading} />
      }
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = withGlobalData(async function () {
  const {
    data: { entry: heroDetails },
  } = await client.query({
    query: PageQuery,
    variables: { slug: "latest-news" },
  });

  const {
    data: { entry: newsletter },
  } = await client.query({
    query: NewsletterQuery,
    variables: { slug: "latest-news" },
  });

  const {
    data: { categories: categories },
  } = await client.query({
    query: CategoriesQuery,
    variables: {
      group: "newsCategories",
    },
  });

  const {
    data: { entries: news },
  } = await client.query({
    query: NewsQuery,
  });

  return {
    props: {
      heroDetails,
      categories,
      news,
      newsletter: newsletter?.newsletter
    },
    revalidate: 500,
  };
});

export default LatestNews;
