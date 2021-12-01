import React from "react";
import Text from "@components/common/typography";
import Image from "next/image";
import heroImage from "public/assets/temp/project-hero.png";
import { LeftCol, RightCol, Pill, ContentWrapper, DetailsWrapper, Detail } from "./styles";
import AddIcon from "@components/icons/add";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const Hero = () => {
  return (
    <Container css={css({ pr: "0 !important", pt: 80 })}>
      <LeftCol>
        <ContentWrapper>
          <Text Base="h6" variant="Body-Large">
            Boxhill, Victoria
          </Text>
          <Text Base="h1" variant="Display-Large">
            Nelson Cafe
          </Text>
          <Text Base="h6" variant="Body-Large">
            19 April 2021
          </Text>
          <Pill>
            <AddIcon color="white" />
            New Release
          </Pill>
        </ContentWrapper>
        <DetailsWrapper>
          <Detail>
            <Text variant="Display-Overline">PROJECT</Text>
            <Text css={css({color: 'taupe'})} variant="Body-Regular">Nelson Cafe</Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">SECTOR</Text>
            <Text css={css({color: 'taupe'})} variant="Body-Regular">Hospitality</Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">ARCHITECT</Text>
            <Text css={css({color: 'taupe'})} variant="Body-Regular">- -</Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">DESIGNER</Text>
            <Text css={css({color: 'taupe'})} variant="Body-Regular">Zunica</Text>
          </Detail> 
          <Detail>
            <Text Base="h6" variant="Display-Overline">BUILDER</Text>
            <Text css={css({color: 'taupe'})} variant="Body-Regular">Alex Reinders</Text>
          </Detail>  
          <Detail>
            <Text Base="h6" variant="Display-Overline">PROJECT COMPLETED</Text>
            <Text css={css({color: 'taupe'})} variant="Body-Regular">2019</Text>
          </Detail> 
          <Detail>
            <Text Base="h6" variant="Display-Overline">FEATURED PRODUCTS</Text>
            <Text css={css({color: 'taupe'})} variant="Body-Regular">Poppins</Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">PHOTOGRAPHER</Text>
            <Text css={css({color: 'taupe'})} variant="Body-Regular">Alex Reinders</Text>
          </Detail>            
        </DetailsWrapper>
      </LeftCol>
      <RightCol>
        <Image
          src={heroImage}
          alt=""
          objectFit="cover"
          width="1922"
          height="2194"
        />
      </RightCol>
    </Container>
  );
};
export default Hero;
