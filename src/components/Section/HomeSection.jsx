import React, { useState } from "react";
import { MainCard } from "../Card/Maincard";
import { PrimaryAppBar } from "../PrimaryAppBar";
import "swiper/css";
import { HorizontalFlexContaierWithLink } from "../Container/HorizontalFlexContaierWithLink";
import { VerticalFlexConatinerWithLink } from "../Container/VerticalFlexConatinerWithLink";
import { Task } from "../Task/Task";
import { connect } from "react-redux";
import { MobileContainer } from "../Container/MobileContainer";

const Home = ({ tasks, taskCount, deleteTask }) => {
  // console.log(tasks);
  const [tasks1, setTask] = useState(taskCount);

  return (
    <MobileContainer>
      <PrimaryAppBar />
      {/* <MainFeed> */}
      <HorizontalFlexContaierWithLink
        containerTitle={"Recent Project"}
        link={"/"}
      >
        <MainCard
          priority={1}
          projectId={222}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit."
          }
        />
        <MainCard
          priority={2}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit."
          }
        />
        <MainCard
          priority={3}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit."
          }
        />
        <MainCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit."
          }
        />
      </HorizontalFlexContaierWithLink>
      <VerticalFlexConatinerWithLink link="/" containerTitle={"Today Task"}>
        {/* <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      <Task /> */}
        {tasks.map((task, index) => (
          <Task
            id={task.id}
            key={task.id}
            setTask={setTask}
            deleteTask={deleteTask}
          />
        ))}
      </VerticalFlexConatinerWithLink>
    </MobileContainer>
  );
};

const mapState = (state) => ({
  tasks: state.taskManager.tasks,
  taskCount: state.taskManager.totalTasks,
});

const mapDispatch = (dispatch) => ({
  deleteTask: (id) => dispatch.taskManager.deleteTask(id),
});

export const HomeSection = connect(mapState, mapDispatch)(Home);
