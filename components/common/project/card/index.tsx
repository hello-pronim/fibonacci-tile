import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { css } from "@styled-system/css";
import Arrow from "@components/common/icons/arrow";
import Text from "@components/common/typography";
import theme from "@styles/theme";
import { Details, ImageWrapper, LinkWrapper, Project } from "./styles";

const ProjectCard = ({ project }) => {
  return (
    <Project key={project.id}>
      {project?.heroImageThumb?.[0]?.url && (
        <ImageWrapper href={`/in-use/${project.slug}`}>
          <Image
            src={project.heroImageThumb[0].url}
            alt={project.slug}
            layout="responsive" // required
            width={project.heroImageThumb[0].width}
            height={project.heroImageThumb[0].height}
          />
        </ImageWrapper>
      )}
      {project?.projectCompleted && (
        <Text variant="Body-Small" css={css({ gridRow: 2, gridColumn: 1 })}>
          {moment(project.projectCompleted).format("MMMM YYYY")}
        </Text>
      )}
      <Details>
        <Text variant="Display-XSmall">{project.title}</Text>
        <Text variant="Display-XSmall" color={theme.colors.concrete}>
          {project.location}
        </Text>
        <LinkWrapper>
          <Link href={`/in-use/${project.slug}`}>View Project</Link>
          <Arrow type="short" />
        </LinkWrapper>
      </Details>
    </Project>
  );
};

export default ProjectCard;
