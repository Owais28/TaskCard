import { useEffect, useState } from "react";

import { Box, Card, CardContent } from "@mui/material";
import { NavLink } from "react-router-dom";
import { createContext } from "react";
import { ProjectTitle } from "./ProjectTitle";
import { ProjectDateAndTime } from "./ProjectDateAndTime";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectImg } from "./ProjectImg";
import { ProjectTitleWithPriority } from "./ProjectTitleWithPriority";
import { ProjectProgress } from "./ProjectProgress";

export const ProjectContext = createContext();

const MyCard = ({ children }) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        // backgroundColor: "#ccc",
        backgroundColor: "white",
        boxShadow: "0px 0px 25px 2px #e7e7e7",
        outline: "1px gray",
        width: "360px",
        // mr : 3
      }}
    >
      {children}
    </Card>
  );
};

const MyCardContent = ({ children }) => {
  return (
    <CardContent
      sx={{
        padding: "16px",
        ":last-child": {
          padding: "16px",
        },
      }}
    >
      {children}
    </CardContent>
  );
};

export const ProjectCard = ({
  priority = 3,
  projectId,
  project = {
    title: "Demo",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, dolor possimus praesentium consequuntur odio quas in esse harum animi, laboriosam minus a sint, voluptatem eos. Officia tempore in rem! Minima.",
  },
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <ProjectContext.Provider value={project}>
      <NavLink to={`/project/${projectId}`}>
        <Box>
          <MyCard>
            <MyCardContent>
              <ProjectImg loading={loading} />
              <ProjectTitleWithPriority />
              <ProjectDescription />
              <ProjectDateAndTime />
              <ProjectProgress />
            </MyCardContent>
          </MyCard>
        </Box>
      </NavLink>
    </ProjectContext.Provider>
  );
};

// ProjectCard.Title = ProjectTitle;
// ProjectCard.DateAndTime = ProjectDateAndTime;
// ProjectCard.Description = ProjectDescription;
// ProjectCard.Img = ProjectImg;
// ProjectCard.Progress = ProjectProgress;
// ProjectCard.ProjectTitleWithPriority = ProjectTitleWithPriority;
