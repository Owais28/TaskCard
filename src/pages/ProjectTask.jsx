import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavigationalAppBar } from "../components/NavigationalAppBar";
import { Box, Stack, Typography } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
// import CheckCircleOutlineRoundedIcon from "@mui/icons-material/;
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { ProjectTaskInput } from "../components/Input/ProjectTaskInput";
import { VerticalFlexConatinerWithLink } from "../components/Container/VerticalFlexConatinerWithLink";
import { Task } from "../components/Task/Task";

// ProjectTask
function PT({ setLoading }) {
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Box mt={"56px"}>
      <NavigationalAppBar />
      <Box pt={3} pr={2} pl={2} pb={0.5}>
        <Box
          sx={{
            height: "200px",
            overflow: "hidden",
            borderRadius: 4,
            "& .task-img": {
              objectFit: "cover",
            },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            class="task-img"
          />
        </Box>
      </Box>
      <Stack p={2} gap={2} mb={1}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi
          suscipit vel architecto culpa minima? Aliquam sit cum iure ipsam
          nobis, possimus repellendus dolore velit, deserunt, maiores asperiores
          magnam! Inventore!
        </Typography>
        <ProjectTaskInput
          title={"Status"}
          placeholder={"To-do  |  in-Progress  |  Done"}
          value={"Todo"}
          icon={<CalendarMonth sx={{ color: "grey.500" }} />}
        />
        <ProjectTaskInput
          title={"Due Date"}
          placeholder={"To-do  |  in-Progress  |  Done"}
          value={new Date().toLocaleDateString()}
          icon={<CheckCircleOutlineRoundedIcon sx={{ color: "grey.500" }} />}
        />
      </Stack>
      <VerticalFlexConatinerWithLink
        mt={1}
        containerTitle={"Sub-Task (14)"}
        color={"black"}
      >
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </VerticalFlexConatinerWithLink>
    </Box>
  );
}

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

const ProjectTask = connect(null, mapDispatch)(PT);
export default ProjectTask;
