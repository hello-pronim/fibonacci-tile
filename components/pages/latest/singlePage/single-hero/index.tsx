import React from "react";
import Text from "@components/common/typography";
import { Categories, Left, Right, Row, SingleCategory, Date } from "../styles";
import styles from "./styles.module.scss";
import moment from "moment";

const SingleHero = ({ pageData }) => {
  return (
    <Row>
      <Left>
        <Text
          as="h1"
          variant="Display-Large"
          altFont={true}
          className={styles.title}
        >
          {pageData.title}
        </Text>
      </Left>
      <Right>
        <Date>{moment(pageData.postDate).format("d MMMM Y")}</Date>
        <Categories>
          {pageData.newsCategory.map((cat: any) => (
            <SingleCategory key={`news-cat-${cat.id}`}>
              #{cat.title}
            </SingleCategory>
          ))}
        </Categories>
      </Right>
    </Row>
  );
};
export default SingleHero;
