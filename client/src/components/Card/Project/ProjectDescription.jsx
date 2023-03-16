import { useContext } from "react";
import { ProjectContext } from "./ProjectCard";
import { Box, Typography } from "@mui/material";

export const ProjectDescription = () => {
  const project = useContext(ProjectContext);

  return (
    <Box>
      <Typography
        variant="body2"
        fontSize="13px"
        fontFamily="Rubik"
        color="rgb(0,0,0,0.6)"
      >
        {project.description &&
          (project.description.length <= 80
            ? project.description
            : project.description.slice(0, 81) + "...")}
      </Typography>
    </Box>
  );
};
