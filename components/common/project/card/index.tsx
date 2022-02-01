import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from 'moment';
import {
  Details,
  ImageWrapper,
  LinkWrapper,
  Project
} from "./styles";
import Arrow from "@components/common/icons/arrow";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";

const ProjectCard = ({ project } ) => {
  return (
      <Project key={project.id}>
        <ImageWrapper>
          <Image
            src={project.heroImage[0].url}
            alt={project.slug}
            layout="responsive" // required
            width={project.heroImage[0].width}
            height={project.heroImage[0].height}
          />
        </ImageWrapper>
        <Text
        variant="Body-Small"
        css={css({ gridRow: 2, gridColumn: 1 })}
        >
          {moment(project.projectCompleted).format('MMMM YYYY')}
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
  )
}

export default ProjectCard