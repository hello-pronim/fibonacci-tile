import React from "react";
import { excerpt } from "@utils/utility";
import styled from "@emotion/styled";
import css from "@styled-system/css";
import Image from "next/image";

export const Card = ({ component: {title, newsCategory, newsComponents} }): any => {
  let imageBlock = null
  let descBlock = null
  newsComponents?.length > 0 && newsComponents.forEach(component => {
    if(component.__typename === "newsComponents_contentFullWidth_BlockType") {
      descBlock = component;
    }
    if(component.__typename === "newsComponents_heroImageFullWidth_BlockType") { 
      imageBlock = component;
    }
  });
  const StyledPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  const StyledRoot = styled.div`
    padding: 50px 12px;
  `;
  const StyledContainer = styled.div`
    padding-top: 80px;
    max-width: 400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1024px) and (min-width: 426px) {
      padding: 16px;
    }
  `;

  const Title = styled.h2`
    padding-top: 12px;
    width:100%  
    font-family: Everett;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 130%;
    letter-spacing: -0.01em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #101820;
  `;

  const Description = styled.p`
    padding-top: 12px;
    color: black;
    font-weight: 300;
    width: 100%;
  `;
  const CardPill = styled("div")(
    css({
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
      columnGap: "4px",
      pl: "17.5px",
      py: "11px",
      pr: "17.5px",
      bg: "black",
      mt: "20px",
      textTransform: "uppercase",
      color: "white",
      width: "fit-content",
      borderRadius: 32,
      fontSize: 0,
      lineHeight: "2px",
    })
  );

  return (
    <StyledContainer>
      {imageBlock?.image?.length > 0 && 
        <Image 
        width={600}
        height={600}
        src={imageBlock.image[0]?.url} alt={imageBlock.image[0]?.id} 
        />
      }
      {newsCategory?.length > 0 && 
        <CardPill>{"# " + newsCategory[0].slug}</CardPill>
      }
      <Title>{title}</Title> 
      {descBlock?.contentText && 
        <Description dangerouslySetInnerHTML={{__html: excerpt(descBlock.contentText)}} />
      }
    </StyledContainer>
  );
};
