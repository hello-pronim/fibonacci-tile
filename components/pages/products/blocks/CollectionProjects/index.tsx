import React from 'react';
import { css } from '@styled-system/css';
import Text from '@components/common/typography';
import AccentText from '@components/common/accentText';
import ProjectCard from '@components/common/project/card';
import ArrowButton from '@components/common/button/arrowButton';
import { CollectionProjectsContainer, Bottom } from './styles';

const CollectionProjects = ({ projects }) => {
  return (
    <CollectionProjectsContainer>
      <AccentText top={275}>Fibonacci in use</AccentText>
      <Text variant="Display-Small" altFont={true}>
        Exercise your democratic right with this one - <br /> you know you can
        trust it.
      </Text>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          mt: 80,
        })}
      >
        {projects.map((project) => (
          <div
            key={`project-${project.id}`}
            css={css({
              width: '48%',
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
