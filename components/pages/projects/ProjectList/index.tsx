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
import ProductCard from "@components/common/product/card";
import Arrow from "@components/common/icons/arrow";
import Select from "@components/common/select";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";
import ProjectCard from "@components/common/project/card";

interface ProjectListType {
  projects: Array<any>;
  types: Array<any>;
}

const ProjectList = ({ projects, types }: ProjectListType) => {
  const [selectedType, setSelectedType] = useState("all");
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  const onProjectTypeClick = (type) => {
    const projectList = projects.filter(
      (project) => project?.sector[0]?.slug === type || type === "all"
    );
  
    setDisplayedProjects(projectList);
    setSelectedType(type);
  };

  const onProjectTypeChange = (e) => {
    const { value: type } = e.target;
    const projectList = projects.filter(
      (project) => project?.sector[0]?.slug === type || type === "all"
    );

    setDisplayedProjects(projectList);
    setSelectedType(type);
  };

  let populatedCategories = [];
  projects && projects.forEach(project => populatedCategories.push(project.sector[0].slug));

  let categorySet = [...Array.from(new Set(populatedCategories))];
  
  return (
    <>
      <FilterWrapperDesktop>
        <Chip
          key={'all'}
          onClick={() => onProjectTypeClick('all')}
          active={'all' === selectedType}
          size="small"
          rounded
        >
          All
        </Chip>
        {categorySet.map((type) => (
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
        <Text variant="Body-Small" css={{ letterSpacing: "0.1em", }}>FILTER</Text>
        <Select
          variant="default"
          onChange={onProjectTypeChange}
          value={selectedType}
          css={{ margin: 0 }}
        >
          <option key='all' value='all'>
            ALL
          </option>
          {types.map((type) => (
            <option key={type.slug} value={type.slug}>
              {type.title.toUpperCase()}
            </option>
          ))}
        </Select>
      </FilterWrapperMobile>
      <Container css={css({ pt: 80 })}>
        <MasonryGrid
          breakpointCols={{
            default: 2,
            1200: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </MasonryGrid>
        {displayedProjects.length ? (
          <LoadMoreWrapper>
            <ArrowButton mode="" title="Load more" link="#" size="" />
          </LoadMoreWrapper>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default ProjectList;
