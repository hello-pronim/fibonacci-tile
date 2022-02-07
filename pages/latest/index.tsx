import React, { useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import client from "@utils/apolloClient";
import { NewsListQuery } from "@gql/newsGQL";
import { withGlobalData } from "@hoc/withGlobalData";
import Footer from "@components/common/footer";
import Header from "@components/common/header";
import Arrow from "@components/common/icons/arrow";
import Hero from "@components/pages/latest/hero/index";
import BottomHero from "@components/pages/latest/bottom-hero";
import MobileCategory from "@components/pages/latest/mobileCategory";
import Category from "@components/pages/latest/categories/Category";
import { Card } from "@components/pages/latest/cards-container/Card";
import {
  AllCategory,
  BottomBarInner,
  CategorysBarInner,
  ReadMore,
  LinkWrapper,
  BreadCrumbContainer,
} from "@components/pages/latest/styles";
import styles from "./styles.module.scss";
import CardImg from "public/assets/latest-news/cardImg.png";
import CardImg1 from "public/assets/latest-news/image1.png";
import CardImg2 from "public/assets/latest-news/image2.png";
import ArrowButton from "@components/common/button/arrowButton";

interface LatestPageProps {
  newsItems: Array<any>;
  notifications: Array<any>;
}
const LatestNews: NextPage<LatestPageProps> = ({
  newsItems,
  notifications,
}) => {
  const categorys = [
    "all",
    "product release",
    "press",
    "awards",
    "collaborations",
    "tips + tricks",
    "inspiration",
  ];

  const data = [
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "CAtegory",
      CardImg: CardImg1,
      slug: "latest-news-1",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Product Release",
      CardImg: CardImg,
      slug: "latest-news-2",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Press",
      CardImg: CardImg2,
      slug: "latest-news-3",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Product Release",
      CardImg: CardImg,
      slug: "latest-news-4",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Awards",
      CardImg: CardImg,
      slug: "latest-news-5",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Colaborations",
      CardImg: CardImg2,
      slug: "latest-news-6",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "collaborations",
      CardImg: CardImg1,
      slug: "latest-news-7",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "inspiration",
      CardImg: CardImg,
      slug: "latest-news-8",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "collaborations",
      CardImg: CardImg2,
      slug: "latest-news-9",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "awards",
      CardImg: CardImg,
      slug: "latest-news-10",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "tips + tricks",
      CardImg: CardImg2,
      slug: "latest-news-11",
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "inspiration",
      CardImg: CardImg2,
      slug: "latest-news-12",
    },
  ];
  const [selectedType, setSelectedType] = useState("all");
  const [displayedCategory, setDisplayedProjects] = useState(data);

  const onProjectTypeClick = (type) => {
    const types = type.toLowerCase();
    const cardsList = data.filter(
      (item) => item.category.toLowerCase() === types || types === "all"
    );

    setDisplayedProjects(cardsList);
    setSelectedType(type);
  };

  const Cards = displayedCategory.map((item, index) => {
    return (
      <Card
        key={index}
        title={item.title}
        description={item.description}
        category={"# " + item.category}
        cardImg={item.CardImg}
        slug={item.slug}
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

  return (
    <>
      <Head>
        <title>Latest | Fibonacci</title>
        <meta name="description" content="Fibonacci Latest page" />
      </Head>
      <Header mode="dark" notifications={notifications} />
      <BreadCrumbContainer>
        <BottomBarInner>
          <LinkWrapper>
            <Arrow type="short" direction="left" />
            <Link href="#">Back</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="/">Home</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="#">Page 1</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="#">Page 2</Link>
          </LinkWrapper>
        </BottomBarInner>
      </BreadCrumbContainer>
      <Hero />
      {windowWidth >= 769 ? (
        <CategorysBarInner>
          <AllCategory>
            {categorys.map((item) => (
              <Category
                key={item}
                onClick={() => onProjectTypeClick(item)}
                active={item === selectedType}
                size="small"
                rounded
              >
                {item}
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
        {displayedCategory.length > 5 ? (
          <ReadMore>
            <ArrowButton mode="" title="Load more" link="#" size="" />
          </ReadMore>
        ) : (
          <div></div>
        )}
      </ResponsiveMasonry>
      <BottomHero />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(
  async () => {
    const {
      data: { entries: newsItems },
    } = await client.query({
      query: NewsListQuery,
    });
    return {
      props: {
        newsItems,
      },
      revalidate: 500,
    };
  }
);

export default LatestNews;
