import { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";

import { PriorityChip } from "../../Chip/PriorityChip";
import { NavLink } from "react-router-dom";
import { createContext } from "react";
import { ProjectTitle } from "./ProjectTitle";
import { ProjectDateAndTime } from "./ProjectDateAndTime";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectImg } from "./ProjectImg";

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

const MyFlexBox1 = ({ children }) => {
  return (
    <Box display={"flex"} mb={1}>
      {children}
    </Box>
  );
};

const MyFlexBox2 = ({ children }) => {
  return (
    <Box marginBottom={1.5} marginTop={2} display="flex" alignItems="center">
      {children}
    </Box>
  );
};

const MyTypography1 = ({ children }) => {
  return (
    <Typography
      flex={1}
      variant="body2"
      fontSize={"13px"}
      fontFamily={"Rubik"}
      color={"rgb(0,0,0,0.4)"}
    >
      {children}
    </Typography>
  );
};

const MyTypography2 = ({ children }) => {
  return (
    <Typography
      variant="body2"
      fontSize={"13px"}
      fontFamily={"Rubik"}
      color={"rgb(0,0,0)"}
      fontWeight="bold"
    >
      {children}
    </Typography>
  );
};

const PriorityBox = ({ children, priority }) => {
  return (
    <Box
      sx={{
        "& > .MuiLinearProgress-root  ": {
          height: 7,
          backgroundColor: `${
            priority === 1
              ? "#ffa1993d"
              : priority === 2
              ? "#c29fff30"
              : "#b8ffef70"
          }`,
        },
      }}
    >
      <MyLinearProgress priority={priority} />
    </Box>
  );
};

const MyLinearProgress = (props) => {
  return (
    <LinearProgress
      sx={{
        borderRadius: 5,
        "&  .MuiLinearProgress-bar1Determinate": {
          backgroundColor: `${
            props.priority === 1
              ? "#ff000094"
              : props.priority === 2
              ? "#b58aff"
              : "teal"
          }`,
        },
      }}
      variant="determinate"
      color="primary"
      value={50}
      classes={{
        colorPrimary: {
          backgroundColor: "#ccc",
        },
      }}
    />
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
              <MyFlexBox2>
                <ProjectTitle />
                <PriorityChip priority={priority} />
              </MyFlexBox2>
              <ProjectDescription />
              <ProjectDateAndTime />
              <Box mt={2}>
                <MyFlexBox1>
                  <MyTypography1>Progress</MyTypography1>
                  <MyTypography2>50%</MyTypography2>
                </MyFlexBox1>
                <PriorityBox priority={priority} />
              </Box>
            </MyCardContent>
          </MyCard>
        </Box>
      </NavLink>
    </ProjectContext.Provider>
  );
};

ProjectCard.Title = ProjectTitle;
ProjectCard.DateAndTime = ProjectDateAndTime;
ProjectCard.Description = ProjectDescription;
ProjectCard.Img = ProjectImg;
