import React from "react";
import Image from "next/image";
import moment from "moment";
import css from "@styled-system/css";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import Container from "@components/common/layout/container";
import {
  LeftCol,
  RightCol,
  Pill,
  ContentWrapper,
  DetailsWrapper,
  Detail,
} from "./styles";
import theme from "@styles/theme";

const Hero = ({ project }) => {
  return (
    <Container css={css({ pr: "0 !important", pt: 80 })}>
      <LeftCol>
        <ContentWrapper>
          {project.location && (
            <Text
              Base="h6"
              variant="Body-Large"
              css={css({ color: theme.colors.taupe })}
            >
              {project.location}
            </Text>
          )}
          <Text Base="h1" variant="Display-Large">
            {project.title}
          </Text>
          {project.projectCompleted && (
            <Text Base="h6" variant="Body-Large">
              {moment(project.projectCompleted).format("Do MMMM YYYY")}
            </Text>
          )}
          {project.label && (
            <Pill>
              <AddIcon color="white" />
              {project.label}
            </Pill>
          )}
        </ContentWrapper>
        <DetailsWrapper>
          <Detail>
            <Text variant="Display-Overline">PROJECT</Text>
            <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
              {project.title}
            </Text>
          </Detail>
          {project?.sector?.length > 0 && (
            <Detail>
              <Text Base="h6" variant="Display-Overline">
                SECTOR
              </Text>
              <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
                {project?.sector.map((item: any, index: number) => {
                  return `${item.title}${
                    index < project.sector.length - 2 ? ", " : ""
                  }`;
                })}
              </Text>
            </Detail>
          )}
          {project.architect && (
            <Detail>
              <Text Base="h6" variant="Display-Overline">
                ARCHITECT
              </Text>
              <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
                {project.architect}
              </Text>
            </Detail>
          )}
          {project.designer && (
            <Detail>
              <Text Base="h6" variant="Display-Overline">
                DESIGNER
              </Text>
              <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
                {project.designer}
              </Text>
            </Detail>
          )}
          {project.builder && (
            <Detail>
              <Text Base="h6" variant="Display-Overline">
                BUILDER
              </Text>
              <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
                {project.builder}
              </Text>
            </Detail>
          )}
          {project.projectCompleted && (
            <Detail>
              <Text Base="h6" variant="Display-Overline">
                PROJECT COMPLETED
              </Text>
              <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
                {moment(project.projectCompleted).format("YYYY")}
              </Text>
            </Detail>
          )}
          {project?.featuredProducts?.length > 0 && (
            <Detail>
              <Text Base="h6" variant="Display-Overline">
                FEATURED PRODUCTS
              </Text>
              <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
                {project?.featuredProducts.map((item: any, index: number) => {
                  return (
                    <React.Fragment key={`featured-product-${index}`}>
                      {item.title}
                      {index < project.featuredProducts.length - 1 ? ", " : ""}
                    </React.Fragment>
                  );
                })}
              </Text>
            </Detail>
          )}
          {project.photographer && (
            <Detail>
              <Text Base="h6" variant="Display-Overline">
                PHOTOGRAPHER
              </Text>
              <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
                {project.photographer}
              </Text>
            </Detail>
          )}
        </DetailsWrapper>
      </LeftCol>
      <RightCol>
        {project?.heroImageThumb?.[0]?.url && (
          <Image
            placeholder="blur"
            blurDataURL={project.blurThumb[0].url}
            src={project.heroImageThumb[0].url}
            alt={project.heroImageThumb[0].title}
            width={project.heroImageThumb[0].width}
            height={project.heroImageThumb[0].height}
          />
        )}
      </RightCol>
    </Container>
  );
};
export default Hero;
