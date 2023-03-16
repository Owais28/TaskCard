import React, { useContext } from "react";
import { ProjectContext } from "./ProjectCard";
import { Box, LinearProgress, Typography } from "@mui/material";

const MyFlexBox1 = ({ children }) => {
  return (
    <Box display={"flex"} mb={1}>
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
export const ProjectProgress = (props) => {
  const { progress, priority = 3 } = useContext(ProjectContext);
  return (
    <Box mt={2}>
      <MyFlexBox1>
        <MyTypography1>Progress</MyTypography1>
        <MyTypography2>{progress ? progress : "50%"}</MyTypography2>
      </MyFlexBox1>
      <PriorityBox priority={priority} />
    </Box>
  );
};
