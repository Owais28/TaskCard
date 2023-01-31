import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavigationalAppBar } from "../components/NavigationalAppBar";
import { Box, Radio, Stack, Typography } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { ProjectTaskInput } from "../components/Input/ProjectTaskInput";
import { VerticalFlexConatinerWithLink } from "../components/Container/VerticalFlexConatinerWithLink";
import { Task } from "../components/Task/Task";
import { setTitle } from "../utils";

// ProjectTask
function PT({ setLoading, tasks, deleteTask }) {
  console.log("Page : ProjectTask");
  const [task1, setTask] = useState(tasks && tasks.length);

  // title of page
  // setTitle("Project");

  useEffect(() => {
    setLoading(false);
  }, []);

  const [toggle, setToggle] = useState(false);

  const toggleDrawwer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setToggle(!toggle);
  };
  return (
    <Box
      // mt={"56px"}
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
            className="task-img"
          />
        </Box>
      </Box>
      <Stack p={2} gap={2} mb={1}>
        <Typography variant="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi
          suscipit vel architecto culpa minima? Aliquam sit cum iure ipsam
          nobis, possimus repellendus dolore velit, deserunt, maiores asperiores
          magnam! Inventore!
        </Typography>
        <ProjectTaskInput
          title={"Status"}
          placeholder={"To-do  |  in-Progress  |  Done"}
          value={"Todo"}
          onClick={toggleDrawwer}
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
        containerTitle={`Sub-Task (${task1})`}
        color={"black"}
      >
        {tasks.map((task) => (
          <Task
            id={task.id}
            key={task.id}
            setTask={setTask}
            deleteTask={deleteTask}
          />
        ))}
      </VerticalFlexConatinerWithLink>
    </Box>
  );
}

const mapState = (state) => ({
  tasks: state.taskManager.tasks,
  taskCount: state.taskManager.totalTasks,
});

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
  deleteTask: (id) => dispatch.taskManager.deleteTask(id),
});

const ProjectTask = connect(mapState, mapDispatch)(PT);
export default ProjectTask;
