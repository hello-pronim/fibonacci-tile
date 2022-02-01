import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  )
}

export default ProjectCard