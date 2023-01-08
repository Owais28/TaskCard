import {
  Card,
  CardContent,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PriorityChip } from "../Chip/PriorityChip";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { DetailWithIcon } from "../Chip/DetailWithIcon";
import { IoCalendarOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const MainCard = ({ description, priority = 3, date, projectId }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <NavLink to={`/project/${projectId}`}>
      <Box>
        {/* <Link href={`/project/${projectId}`}> */}
        <Card
          sx={{
            borderRadius: "10px",
            // backgroundColor : '#ccc',
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
            {/* Image Box */}
            <Box
              width={"100%"}
              height={"200px"}
              position="relative"
              borderRadius={"7px"}
              overflow="hidden"
            >
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"200px"}
                />
              ) : (
                <img
                  src={
                    "https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  }
                  alt="image-for-card"
                />
              )}
            </Box>

            {/* Main Heading and priority*/}
            <Box
              marginBottom={1.5}
              marginTop={2}
              display="flex"
              alignItems="center"
            >
              <Typography
                variant="h3"
                fontSize={"19px"}
                fontFamily={"Rubik"}
                fontWeight="bold"
                flex={1}
              >
                Design For Task Card
              </Typography>

              <PriorityChip priority={priority} />
            </Box>
            <Box>
              <Typography
                variant="body2"
                fontSize={"13px"}
                fontFamily={"Rubik"}
                color={"rgb(0,0,0,0.6)"}
              >
                {description.length <= 80
                  ? description
                  : description.slice(0, 81) + "..."}
              </Typography>
            </Box>

            {/* Details */}
            <Box
              mt={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent="start"
            >
              <DetailWithIcon
                icon={<AccessTimeRoundedIcon fontSize="" />}
                info={"8:00 AM - 5:00 PM"}
              />
              <Box width={"25px"} />
              <DetailWithIcon
                icon={<IoCalendarOutline fontSize="" />}
                info={"25 August 2022"}
              />
            </Box>

            {/* Progress */}
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
                {/* <BorderLinearProgress variant='determinate' value={50}/> */}
              </Box>
            </Box>
          </CardContent>
        </Card>
        {/* </Link> */}
      </Box>
    </NavLink>
  );
};
