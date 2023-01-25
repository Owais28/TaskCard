import {
  Box,
  Skeleton,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { SubTask } from "../components/Card/SubTask";
import { HorizontalFlexContaierWithLink } from "../components/Container/HorizontalFlexContaierWithLink";
import { NavigationalAppBar } from "../components/NavigationalAppBar";

// SeeProject
function SP({ setLoading }) {
  console.log("Page : SeeProject");

  useEffect(() => {
    setLoading(false);
  }, []);

  const date = new Date();
  const param = useParams();

  console.log(param);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "412px",
        position: "relative",
        top: 0,
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "scroll",
        fontFamily: "Rubik",
        paddingBottom: "75px",
      }}
    >
      <NavigationalAppBar />
      <Box height="220px">
        <Skeleton height="100%" variant="rectangular">
          {/* <img
            src="https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            height="100%"
          /> */}
        </Skeleton>
      </Box>
      <Stack px="16px" py="18px">
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
          variant="description"
          // fontFamily={"Rubik"}
          // fontSize={"13px"}
          // color={"rgb(0,0,0,0.6)"}
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
            fontSize={"13px"}
            color={"white"}
            padding={1.5}
            fontFamily={"Rubik"}
          >
            80 / 90
          </Box>
          <Box fontSize={"13px"} fontFamily={"Rubik"} color={"rgb(0,0,0,0.4)"}>
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
      </Stack>
      <HorizontalFlexContaierWithLink viewTitle={false}>
        <SubTask />
        <SubTask />
        <SubTask />
      </HorizontalFlexContaierWithLink>
    </Box>
  );
}

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

const SeeProject = connect(null, mapDispatch)(SP);
export default SeeProject;
