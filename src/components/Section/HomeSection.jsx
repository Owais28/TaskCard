import { useState } from "react";
import "swiper/css";
import { ProjectCard } from "../Card/ProjectCard";
import { PrimaryAppBar } from "../PrimaryAppBar";
import { HorizontalFlexContaierWithLink } from "../Container/HorizontalFlexContaierWithLink";
import { VerticalFlexConatinerWithLink } from "../Container/VerticalFlexConatinerWithLink";
import { Task } from "../Task/Task";
import { MobileContainer } from "../Container/MobileContainer";
import { connect } from "react-redux";

const Home = ({ tasks, taskCount, deleteTask }) => {
  console.log(tasks);
  const [tasks1, setTask] = useState(taskCount);

  return (
    <MobileContainer>
      <PrimaryAppBar />
      {/* <MainFeed> */}
      <HorizontalFlexContaierWithLink
        containerTitle={"Recent Project"}
        link={"/"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <ProjectCard
            key={index}
            priority={1}
            projectId={item}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit."
            }
          />
        ))}
      </HorizontalFlexContaierWithLink>
      <VerticalFlexConatinerWithLink link="/" containerTitle={"Today Task"}>
        {tasks.map((task, index) => (
          <Task
            id={task.id}
            key={task.id}
            setTask={setTask}
            deleteTask={deleteTask}
            title={task.task}
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
