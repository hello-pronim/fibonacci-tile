import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "@components/common/footer";
import SinglePage from "./[slug]";
import Header from "@components/common/header";
import Hero from "../../components/pages/latest/hero/index";
import Arrow from "@components/common/icons/arrow";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./styles.module.scss";

import {
  AllCategory,
  BottomBarInner,
  CategorysBarInner,
  ReadMore,
} from "@components/pages/latest/styles";
import { LinkWrapper } from "@components/pages/latest/styles";
import Link from "next/link";
import BottomHero from "@components/pages/latest/bottom-hero";
import MobileCategory from "@components/pages/latest/mobileCategory";
import Category from "@components/pages/latest/categories/Category";
import { Card } from "@components/pages/latest/cards-container/Card";
import CardImg from "public/assets/latest-news/cardImg.png";
import CardImg1 from "public/assets/latest-news/image1.png";
import CardImg2 from "public/assets/latest-news/image2.png";
import ArrowButton from "@components/common/button/arrowButton";
interface CardsListType {
  cards: Array<any>;
}

export default function LatestNews() {
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
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Product Release",
      CardImg: CardImg,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Press",
      CardImg: CardImg2,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Product Release",
      CardImg: CardImg,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Awards",
      CardImg: CardImg,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "Colaborations",
      CardImg: CardImg2,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "collaborations",
      CardImg: CardImg1,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "inspiration",
      CardImg: CardImg,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "collaborations",
      CardImg: CardImg2,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "awards",
      CardImg: CardImg,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "tips + tricks",
      CardImg: CardImg2,
    },
    {
      title:
        "Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin",
      description:
        "Description two to three lines, sed in sit semper in non nec potenti urna. Eget arcu a malesuada aliquet. Augue venenatis.",
      category: "inspiration",
      CardImg: CardImg2,
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
        <title>Projects | Fibonacci</title>
        <meta name="description" content="Fibonacci Projects page" />
      </Head>
      <Header mode="dark" />
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
}
