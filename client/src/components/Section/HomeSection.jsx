import { useState } from "react";
import "swiper/css";
import { ProjectCard } from "../Card/ProjectCard";
import { PrimaryAppBar } from "../PrimaryAppBar";
import { HorizontalFlexContaierWithLink } from "../Container/HorizontalFlexContaierWithLink";
import { VerticalFlexConatinerWithLink } from "../Container/VerticalFlexConatinerWithLink";
import { Task } from "../Task/Task";
import { MobileContainer } from "../Container/MobileContainer";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const Home = ({ tasks, taskCount, deleteTask }) => {
  console.log(tasks);
  const [tasks1, setTask] = useState(taskCount);

  return (
    <MobileContainer>
      <PrimaryAppBar />
      {/* <MainFeed> */}
      <HorizontalFlexContaierWithLink
        containerTitle={"Recent Project"}
        link={"/seeallprojects"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <ProjectCard
            key={index}
            priority={1}
            projectId={item}
            project={{
              title: "Demo Project Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit.",
            }}
          />
        ))}
      </HorizontalFlexContaierWithLink>
      <VerticalFlexConatinerWithLink
        link="/seealltasks"
        containerTitle={"Today Task"}
      >
        {tasks.map((task, index) => (
          // <motion.div
          // drag="x"
          // dragConstraints={{ left: 0, right: 30 }}
          // whileDrag={{ scale: 1.1 }}
          // dragElastic={0.1}
          // dragSnapToOrigin
          // >
          <Task
            id={task.id}
            key={task.id}
            setTask={setTask}
            deleteTask={deleteTask}
            title={task.task}
          />
          // </motion.div>
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
