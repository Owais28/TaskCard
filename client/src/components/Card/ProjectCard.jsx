import { useEffect, useState } from "react";
// import { ReactPropTypes } from "react";
import {
  Box,
  Skeleton,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { PriorityChip } from "../Chip/PriorityChip";
import { DetailWithIcon } from "../Chip/DetailWithIcon";

import { IoCalendarOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { createContext } from "react";
import { useContext } from "react";

const ProjectContext = createContext();

const ProjectTitle = () => {
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

const ProjectDescription = () => {
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

const ProjectImg = ({ href, loading }) => {
  const project = useContext(ProjectContext);

  return (
    <Box
      width={"100%"}
      height={"200px"}
      position="relative"
      borderRadius={"7px"}
      overflow="hidden"
    >
      {loading ? (
        <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
      ) : (
        <img
          src={
            href
              ? href
              : "https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          alt="image-for-card"
        />
      )}
    </Box>
  );
};

const ProjectDateAndTime = () => {
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
            <CardContent
              sx={{
                padding: "16px",
                ":last-child": {
                  padding: "16px",
                },
              }}
            >
              <ProjectImg loading={loading} />
              <Box
                marginBottom={1.5}
                marginTop={2}
                display="flex"
                alignItems="center"
              >
                <ProjectTitle />
                <PriorityChip priority={priority} />
              </Box>
              <ProjectDescription />
              <ProjectDateAndTime />

              <Box mt={2}>
                <Box display={"flex"} mb={1}>
                  <Typography
                    flex={1}
                    variant="body2"
                    fontSize={"13px"}
                    fontFamily={"Rubik"}
                    color={"rgb(0,0,0,0.4)"}
                  >
                    Progress
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize={"13px"}
                    fontFamily={"Rubik"}
                    color={"rgb(0,0,0)"}
                    fontWeight="bold"
                  >
                    50%
                  </Typography>
                </Box>
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
                  <LinearProgress
                    sx={{
                      borderRadius: 5,
                      "&  .MuiLinearProgress-bar1Determinate": {
                        backgroundColor: `${
                          priority === 1
                            ? "#ff000094"
                            : priority === 2
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
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </NavLink>
    </ProjectContext.Provider>
  );
};

ProjectCard.Title = ProjectTitle;
ProjectCard.DateAndTime = ProjectDateAndTime;
ProjectCard.Description = ProjectDescription;
ProjectCard.Img = ProjectImg;

// ProjectCard.Prototypes = {
//   project: {
//     title: String | Number,
//     description: String,
//   },
// };
