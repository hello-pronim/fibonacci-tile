import React from 'react';
import { css } from '@styled-system/css';
import Text from '@components/common/typography';
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import ProjectCard from '@components/common/project/card';
import ArrowButton from '@components/common/button/arrowButton';
import { CollectionProjectsContainer, Bottom } from './styles';
import theme from "@styles/theme";

const CollectionProjects = ({ projects }) => {
  return (
    <CollectionProjectsContainer>
      <AccentText top={275}>Fibonacci in use</AccentText>
      <AccentTextMobile css={css({ pb: 80 })}> Fibonacci in use</AccentTextMobile>
      <Text variant="Display-Small" altFont={true}>
        Exercise your democratic right with this one - <br /> you know you can
        trust it.
      </Text>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          mt: 80,
          flexWrap: "wrap",
        })}
      >
        {projects.map((project) => (
          <div
            key={`project-${project.id}`}
            css={css({
              width: "100%",
              marginBottom: "50px",
              [theme.mediaQueries.smedium]: {
                width: "48%",
                marginBottom: "0px",
              },
            })}
          >
            <ProjectCard key={project.id} project={project} />
          </div>
        ))}
      </div>
      <Bottom>
        <ArrowButton mode="" title="View all projects" link="/in-use" />
      </Bottom>
    </CollectionProjectsContainer>
  );
};

export default CollectionProjects;
