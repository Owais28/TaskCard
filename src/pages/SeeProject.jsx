import {
  Box,
  Skeleton,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material";
// import { indigo } from "@mui/material/colors";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// SeeProject
function SP({ setLoading }) {
  useEffect(() => {
    setLoading(false);
  }, []);

  const date = new Date();
  const param = useParams();

  console.log(param);

  return (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "412px",
        position: "relative",
        top: 0,
        // minHeight: '100vh',
        height: "100vh",
        maxHeight: "100vh",
        overflow: "scroll",
        fontFamily: "Rubik",
        paddingBottom: "75px",
      }}
    >
      <Box height="220px">
        <Skeleton height="100%" variant="rectangular">
          {/* <img
            src="https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            height="100%"
          /> */}
        </Skeleton>
      </Box>
      <Stack px="16px" py="16px">
        <Box>
          <Typography
            variant="h2"
            fontSize={"larger"}
            fontWeight="bold"
            fontFamily={"Rubik"}
            mb={1}
          >
            Tiki Mobile App
          </Typography>
        </Box>
        <Typography
          variant="body1"
          fontFamily={"Rubik"}
          fontSize={"smaller"}
          color={"gray"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed
          eaque repudiandae laboriosam
        </Typography>
        <Stack
          direction={"row"}
          mt={3}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            borderRadius={100}
            bgcolor={"#3f51b5"}
            fontSize={"14px"}
            color={"white"}
            padding={1.5}
          >
            80 / 90
          </Box>
          <Box fontSize={"smaller"} color={"#ccc"}>
            {date.toLocaleDateString()}
          </Box>
        </Stack>
        <Box
          sx={{
            "& > .MuiLinearProgress-root  ": {
              height: 7,
              backgroundColor: "#e8eaf6",
            },
            marginTop: 3,
          }}
        >
          <LinearProgress
            sx={{
              borderRadius: 5,
              "&  .MuiLinearProgress-bar1Determinate": {
                backgroundColor: "#3f51b5",
              },
            }}
            variant="determinate"
            color="primary"
            value={50}
            classes={{
              colorPrimary: {
                backgroundColor: "#3f51b5",
              },
            }}
          />
          {/* <BorderLinearProgress variant='determinate' value={50}/> */}
        </Box>
        <Stack mt={3}></Stack>
      </Stack>
    </Box>
  );
}

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

const SeeProject = connect(null, mapDispatch)(SP);
export default SeeProject;
