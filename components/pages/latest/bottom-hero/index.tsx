import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Text from "@components/common/typography";
import { Container, Left, ReadMore, Right, Row } from "../styles";
import css from "@styled-system/css";
import styles from "./styles.module.scss";
import ArrowButton from "@components/common/button/arrowButton";

const BottomHero = () => {
  return (
    <Row>
      <Left>
        <Text
          Base="h1"
          variant="Display-Large"
          altFont={true}
          className={styles.title}
        >
          Want Fibonacci updates sent straight to your inbox?
        </Text>
        <Text
          as="h4"
          variant="Display-XSmall"
          altFont={false}
          className={styles.bodyText}
        >
          Want Fibonacci updates sent straight to your inbox?
        </Text>
      </Left>
      <Right>
        <input type="text" placeholder="Enter your email address"></input>
        <ArrowButton mode="" title="Submit" link="#" size={"Large"} />
      </Right>
    </Row>
  );
};
export default BottomHero;
