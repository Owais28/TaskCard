import React, { useContext, ReactElement } from "react";
import { ProjectContext } from "./ProjectCard";
import { Typography } from "@mui/material";

/**
 *
 * @returns {ReactElement} Title for ProjectCard
 */
export const ProjectTitle = () => {
  const project = useContext(ProjectContext);
  return (
    <Typography
      variant="h3"
      fontSize="19px"
      fontFamily="Rubik"
      fontWeight="bold"
      flex={1}
    >
      {project.title ? project.title : "Demo Project Title"}
    </Typography>
  );
};
