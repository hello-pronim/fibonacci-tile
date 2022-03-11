import React from "react";
import Text from "@components/common/typography";
import { Categories, Left, Right, Container, SingleCategory, Date } from "../styles";
import moment from "moment";

const SingleHero = ({ pageData }) => {
  return (
    <Container>
      <Left>
        <Text
          as="h1"
          variant="Display-Large"
          altFont={true}
        >
          {pageData.title}
        </Text>
      </Left>
      <Right>
        <Date variant="Body-Regular">{moment(pageData.postDate).format("d MMMM Y")}</Date>
        <Categories>
          {pageData.newsCategory.map((cat: any) => (
            <SingleCategory variant="Display-Overline" key={`news-cat-${cat.id}`}>
              # {cat.title}
            </SingleCategory>
          ))}
        </Categories>
      </Right>
    </Container>
  );
};
export default SingleHero;
