import { useContext } from "react";
import { ProjectContext } from "./ProjectCard";
import { Box } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { IoCalendarOutline } from "react-icons/io5";
import { DetailWithIcon } from "../../Chip/DetailWithIcon";

export const ProjectDateAndTime = () => {
  const project = useContext(ProjectContext);

  return (
    <Box mt={2} display="flex" alignItems="center" justifyContent="start">
      <DetailWithIcon
        icon={<AccessTimeRoundedIcon fontSize="" />}
        info={project.time ? project.time : "8:00 AM - 5:00 PM"}
      />
      <Box width={"25px"} />
      <DetailWithIcon
        icon={<IoCalendarOutline fontSize="" />}
        info={project.date ? project.date : "25 August 2022"}
      />
    </Box>
  );
};
