import React, { useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { css } from "@styled-system/css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PageQuery } from "@gql/pageGQL";
import { NewsQuery } from "@gql/newsGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import BreadCrumb from "@components/common/breadcrumb";
import { initializeApollo } from "@utils/apolloClient";
import Footer from "@components/common/footer";
import Header from "@components/common/header";
import { withGlobalData } from "@hoc/withGlobalData";
import Hero from "@components/pages/latest/hero/index";
import BottomHero from "@components/pages/latest/bottom-hero";
import MobileCategory from "@components/pages/latest/mobileCategory";
import Category from "@components/pages/latest/categories/Category";
import { Card } from "@components/pages/latest/cards-container/Card";
import theme from "@styles/theme";
import {
  AllCategory,
  CategorysBarInner,
  ReadMore,
} from "@components/pages/latest/styles";

import styles from "./styles.module.scss";

interface LatestPageProps {
  newsItems: Array<any>;
  notifications: Array<any>;
  pageData: any;
  categories: any;
  newsletter: any;
  news: any;
}

const LatestNews: NextPage<LatestPageProps> = ({
  pageData,
  categories,
  news,
  newsletter,
  notifications,
}) => {
  const [selectedType, setSelectedType] = useState("all");
  const [displayedCategory, setDisplayedProjects] = useState(news);

  const onProjectTypeClick = (type: string) => {
    const cardsList = news.filter(
      (item: any) => item?.newsCategory[0]?.slug === type || type === "all"
    );

    setDisplayedProjects(cardsList);
    setSelectedType(type);
  };

  const Cards = displayedCategory.map((item, index) => {
    return <Card key={index} component={item} />;
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
  const crumbs = [{ path: "/", name: "Home" }, { name: "The Latest" }];
  return (
    <>
      <Head>
        <title>Latest | Fibonacci</title>
      </Head>
      <Header mode="dark" notifications={notifications} />
      <div
        css={css({
          maxWidth: "2560px",
          [theme.mediaQueries.medium]: {
            pl: 32,
          },
          pl: 22,
          pt: 92,
          pb: 0,
        })}
      >
        <BreadCrumb crumbs={crumbs} pt={0} />
      </div>
      <Hero pageData={pageData} />
      {windowWidth >= 769 ? (
        <CategorysBarInner>
          <AllCategory>
            <Category
              key={"all"}
              onClick={() => onProjectTypeClick("all")}
              active={"all" === selectedType}
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
        css={css({
          maxWidth: "2560px",
          ml: "auto",
          mr: "auto",
        })}
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
      {newsletter?.length > 0 && (
        <BottomHero
          heading={newsletter[0].heading}
          subHeading={newsletter[0].subheading}
        />
      )}
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async function () {
  const client = initializeApollo();

  const {
    data: { entry: pageData },
  } = await client.query({
    query: PageQuery,
    variables: { slug: "the-latest" },
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
      pageData,
      categories,
      news,
      newsletter: pageData?.newsletter,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default LatestNews;
