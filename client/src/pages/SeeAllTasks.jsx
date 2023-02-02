import React from "react";
import { MobileContainer } from "../components/Container/MobileContainer";
import { ProjectCard } from "../components/Card/ProjectCard";
import { VerticalContainer } from "../components/Container/VerticalContainer";
import { NavigationalAppBar } from "../components/NavigationalAppBar";
import { Task } from "../components/Task/Task";
import { connect } from "react-redux";

// SeeAllTasks
function SAT({ tasks, deleteTask }) {
  return (
    <MobileContainer>
      <NavigationalAppBar title={"Today Task"} />
      <VerticalContainer>
        {tasks.map((task, index) => (
          <Task
            title={task.task}
            id={task.id}
            key={task.id}
            deleteTask={deleteTask}
          />
        ))}
      </VerticalContainer>
    </MobileContainer>
  );
}

const mapState = (state) => ({
  tasks: state.taskManager.tasks,
});

const mapDispatch = (dispatch) => ({
  deleteTask: (id) => dispatch.taskManager.deleteTask(id),
});

export default connect(mapState, mapDispatch)(SAT);
