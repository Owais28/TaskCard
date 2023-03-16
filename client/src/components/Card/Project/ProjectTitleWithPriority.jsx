import React, { useContext } from "react";
import { ProjectContext } from "./ProjectCard";
import { Box } from "@mui/material";
import { ProjectTitle } from "./ProjectTitle";
import { PriorityChip } from "../../Chip/PriorityChip";

const MyFlexBox2 = ({ children }) => {
  return (
    <Box marginBottom={1.5} marginTop={2} display="flex" alignItems="center">
      {children}
    </Box>
  );
};

export const ProjectTitleWithPriority = (props) => {
  const { priority } = useContext(ProjectContext);
  return (
    <MyFlexBox2>
      <ProjectTitle />
      <PriorityChip priority={priority} />
    </MyFlexBox2>
  );
};
