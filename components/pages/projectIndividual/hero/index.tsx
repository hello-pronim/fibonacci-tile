import React from "react";
import Text from "@components/common/typography";
import moment from "moment";
import Image from "next/image";
import heroImage from "public/assets/temp/project-hero.jpg";
import {
  LeftCol,
  RightCol,
  Pill,
  ContentWrapper,
  DetailsWrapper,
  Detail,
} from "./styles";
import AddIcon from "@components/icons/add";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const Hero = ({ project }) => {
  return (
    <Container css={css({ pr: "0 !important", pt: 80 })}>
      <LeftCol>
        <ContentWrapper>
          {project.location && (
            <Text Base="h6" variant="Body-Large">
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
          <Detail>
            <Text Base="h6" variant="Display-Overline">
              SECTOR
            </Text>
            <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
              {project?.sector?.length > 0 &&
                project?.sector.map((item, index) => {
                  return `${item.title}${index > 0 ? ", " : ""}`;
                })}
            </Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">
              ARCHITECT
            </Text>
            <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
              {project.architect ? project.architect : "- -"}
            </Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">
              DESIGNER
            </Text>
            <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
              {project.designer ? project.designer : "- -"}
            </Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">
              BUILDER
            </Text>
            <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
              {project.builder ? project.builder : "- -"}
            </Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">
              PROJECT COMPLETED
            </Text>
            <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
              {project.projectCompleted
                ? moment(project.projectCompleted).format("YYYY")
                : "- -"}
            </Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">
              FEATURED PRODUCTS
            </Text>
            <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
              {project?.featuredProducts?.length > 0 &&
                project?.featuredProducts.map((item, index) => {
                  return `${item.title}${index > 0 ? ", " : ""}`;
                })}
            </Text>
          </Detail>
          <Detail>
            <Text Base="h6" variant="Display-Overline">
              PHOTOGRAPHER
            </Text>
            <Text css={css({ color: "#9E9084" })} variant="Body-Regular">
              {project.photographer ? project.photographer : "- -"}
            </Text>
          </Detail>
        </DetailsWrapper>
      </LeftCol>
      {project?.heroImage?.[0]?.url && (
        <RightCol>
          <Image
            src={project.heroImage[0].url}
            alt=""
            objectFit="cover"
            width={project.heroImage[0].width}
            height={project.heroImage[0].height}
          />
        </RightCol>
      )}
    </Container>
  );
};
export default Hero;
