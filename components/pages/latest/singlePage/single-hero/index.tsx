import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Text from "@components/common/typography";
import { Categories, Left, Right, Row, SingleCategory, Date } from "../styles";
import styles from "./styles.module.scss";

const SingleHero = () => {
  return (
    <Row>
      <Left>
        <Text
          Base="h1"
          variant="Display-Large"
          altFont={true}
          className={styles.title}
        >
          Feugiat velit neque, est etiam urna eget. Nisi phasellus sollicitudin
        </Text>
      </Left>
      <Right>
        <Date>10 September 2021</Date>
        <Categories>
          <SingleCategory># TAG LABEL</SingleCategory>
          <SingleCategory># TAG LABEL</SingleCategory>
          <SingleCategory># TAG LABEL</SingleCategory>
          <SingleCategory># TAG LABEL</SingleCategory>
        </Categories>
      </Right>
    </Row>
  );
};
export default SingleHero;
