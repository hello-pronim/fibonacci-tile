import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bottom,
  Container,
  Details,
  FilterWrapperDesktop,
  FilterWrapperMobile,
  ImageWrapper,
  LinkWrapper,
  LoadMoreWrapper,
  Project,
  MasonryGrid,
} from "./styles";
import mockData from "./constants";
import ArrowButton from "@components/common/button/arrowButton";
import Chip from "@components/common/chip";
import Arrow from "@components/common/icons/arrow";
import Select from "@components/common/select";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";

interface ProjectListType {
  projects: Array<any>;
  types: Array<string>;
}

const ProjectList = ({ projects, types }: ProjectListType) => {
  const [selectedType, setSelectedType] = useState("all");
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  const onProjectTypeClick = (type) => {
    const projectList = projects.filter(
      (project) => project.type === type || type === "all"
    );

    setDisplayedProjects(projectList);
    setSelectedType(type);
  };

  const onProjectTypeChange = (e) => {
    const { value: type } = e.target;
    const projectList = projects.filter(
      (project) => project.type === type || type === "all"
    );

    setDisplayedProjects(projectList);
    setSelectedType(type);
  };

  return (
    <>
      <FilterWrapperDesktop>
        {types.map((type) => (
          <Chip
            key={type}
            onClick={() => onProjectTypeClick(type)}
            active={type === selectedType}
            size="small"
            rounded
          >
            {type}
          </Chip>
        ))}
      </FilterWrapperDesktop>
      <FilterWrapperMobile>
        <Text variant="Body-Small">Filter</Text>
        <Select
          variant="default"
          onChange={onProjectTypeChange}
          value={selectedType}
          css={{ margin: 0 }}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </Select>
      </FilterWrapperMobile>
      <Container css={css({ pt: 80 })}>
        <MasonryGrid
          breakpointCols={{
            default: 2,
            768: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {displayedProjects.map((project) => (
            <Project key={project.id}>
              <ImageWrapper>
                <Image
                  src={project.thumbnail.src}
                  alt={project.slug}
                  layout="responsive" // required
                  width={project.thumbnail.width}
                  height={project.thumbnail.height}
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
        </MasonryGrid>
        {displayedProjects.length ? (
          <LoadMoreWrapper>
            <ArrowButton mode="" title="Load more" link="#" />
          </LoadMoreWrapper>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default ProjectList;
