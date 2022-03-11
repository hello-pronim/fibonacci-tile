import React, { useEffect, useState } from "react";
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
  Spacer
} from "./styles";
import mockData from "./constants";
import ArrowButton from "@components/common/button/arrowButton";
import Button from "@components/common/button";
import Chip from "@components/common/chip";
import { EntryCountQuery } from "@gql/entryCountGQL";
import ProductCard from "@components/common/product/card";
import Arrow from "@components/common/icons/arrow";
import Select from "@components/common/select";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";
import ProjectCard from "@components/common/project/card";
import { initializeApollo } from "@utils/apolloClient";
interface ProjectListType {
  projects: Array<any>;
  types: Array<any>;
  setOffset: any;
  handleSetCategory: any;
  limit: number;
  offset: number;
  loading: boolean;
}

const ProjectList = ({ projects, types, setOffset, handleSetCategory, limit, offset, loading }: ProjectListType) => {
  const [selectedType, setSelectedType] = useState("all");
  const [totalProjects, setTotalProjects] = useState(0);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  useEffect(() => {
    setDisplayedProjects(projects)
  }, [projects])

  const onProjectTypeClick = (type) => {
    // const projectList = projects.filter(
    //   (project) => project?.sector[0]?.slug === type || type === "all"
    // );
  
    // setDisplayedProjects(projectList);
    setSelectedType(type);
    handleSetCategory(type)
  };

  const onProjectTypeChange = (e) => {
    const { value: type } = e.target;
    const projectList = projects.filter(
      (project) => project?.sector[0]?.slug === type || type === "all"
    );

    setDisplayedProjects(projectList);
    setSelectedType(type);
  };

  // let populatedCategories = [];
  // projects && projects.forEach(project => populatedCategories.push(project.sector[0].slug));

  // let categorySet = [...Array.from(new Set(populatedCategories))];

  const handleSetOffset = (offset, limit) => {
    const newOffset = parseInt(offset) + parseInt(limit);
    setOffset(newOffset);
    if((newOffset+limit) >= totalProjects) {
      setShowLoadMore(false);
    }
  }

  const client = initializeApollo();
  const projectsCount = async () => {
    const { data: { entryCount : totalProjects }} = await client.query({
      query: EntryCountQuery,
      variables: {
        entry: "projects",
        sector: selectedType !== "all" ? [selectedType] : []
      },
    });
    setTotalProjects(totalProjects);
    if(totalProjects > limit) {
      setShowLoadMore(true);
    } else {
      setShowLoadMore(false);
    }
  } 
  useEffect(() => {
    projectsCount();
  }, [selectedType])

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
        {types.map((type) => (
          <Chip
            key={type.id}
            onClick={() => onProjectTypeClick(type.id)}
            active={type.id === selectedType}
            size="small"
            rounded
          >
            {type.title}
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
            <option key={type.id} value={type.id}>
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
        {loading && 
          <LoadMoreWrapper>
            <Button color="dark" css={css({minWidth: "200px", textAlign: "center", })}>
              Loading...
            </Button>
          </LoadMoreWrapper>
        }
        {showLoadMore && !loading ? (
          <LoadMoreWrapper>
            <ArrowButton onClick={() => handleSetOffset(offset, limit)} mode="" title={loading ? "Loading ..." : "Load more"} />
          </LoadMoreWrapper>
        ) : (
          <Spacer></Spacer>
        )}
      </Container>
    </>
  );
};

export default ProjectList;
