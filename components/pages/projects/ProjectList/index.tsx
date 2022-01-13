import React, { useState } from "react";
import Masonry from "react-masonry-css";
import MasonryInfiniteScroller from "react-masonry-infinite";
import Image from "next/image";
import ArrowButton from "@components/common/button/arrowButton";
import Link from "next/link";
import {
  Bottom,
  Container,
  Details,
  FilterWrapper,
  ImageWrapper,
  LinkWrapper,
  Project,
} from "./styles";
import mockData from "./constants";
import Chip from "@components/common/chip";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import theme from "@styles/theme";

interface ProjectListType {
  projects: Array<any>;
  types: Array<string>;
}

const ProjectList = ({ projects, types }: ProjectListType) => {
  const [selectedType, setSelectedType] = useState("all");

  const onProjectTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <FilterWrapper>
        {types.map((type) => (
          <Chip
            key={type}
            onClick={() => onProjectTypeClick(type)}
            rounded
            active={type === selectedType}
          >
            {type}
          </Chip>
        ))}
      </FilterWrapper>
      <Container>
        <Masonry
          breakpointCols={{
            default: 4,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projects.map((project) => (
            <Project key={project.id}>
              <ImageWrapper>
                <Image
                  src={project.thumbnail}
                  alt={project.slug}
                  layout="responsive"
                  width="710"
                  height="900"
                />
              </ImageWrapper>
              <Text
                variant="Body-Small"
                css={css({ gridRow: 2, gridColumn: 1 })}
              >
                {project.date}
              </Text>
              <Details>
                <Text variant="Display-XSmall">{project.title}</Text>
                <Text variant="Display-XSmall" color={theme.colors.concrete}>
                  {project.location}
                </Text>
                <LinkWrapper>
                  <Link href={`/projects/${project.slug}`}>View Project</Link>
                  <Arrow type="short" />
                </LinkWrapper>
              </Details>
            </Project>
          ))}
        </Masonry>
        <Bottom>
          <ArrowButton mode="" title="Load more" link="#" />
        </Bottom>
      </Container>
    </>
  );
};

export default ProjectList;
