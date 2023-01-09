import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavigationalAppBar } from "../components/NavigationalAppBar";
import { Box, Icon, Input, Stack, Typography } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
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
      <Box>
        <img src="" alt="" />
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
          icon={<CalendarMonth sx={{ color: "grey.500" }} />}
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
