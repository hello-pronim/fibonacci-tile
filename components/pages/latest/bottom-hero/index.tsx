import React from "react";
import Text from "@components/common/typography";
import { Left, Right, Row } from "../styles";
import styles from "./styles.module.scss";
import ArrowButton from "@components/common/button/arrowButton";

const BottomHero = ({heading, subHeading}) => {
  return (
    <Row>
      <Left>
        {heading && 
        <Text
          as="h1"
          variant="Display-Large"
          altFont={true}
          className={styles.title}
        >
          {heading}
        </Text>
        }
        {subHeading &&
        <Text
          as="h4"
          variant="Display-XSmall"
          altFont={false}
          className={styles.bodyText}
        >
         {subHeading}
        </Text>
        }
      </Left>
      <Right>
        <input type="text" placeholder="Enter your email address"></input>
        <ArrowButton mode="" title="Submit" link="#" size={"Large"} />
      </Right>
    </Row>
  );
};
export default BottomHero;
