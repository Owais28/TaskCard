import React from "react";
import MyDrawer from "./MyDrawer";
import { $ButtonForDrawer, $InputForDrawer } from "./wrappers";
import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";

// this component make use of <Drawer> component
const MyTaskDrawer = ({ toggleDrawer, isOpen, addTask }) => {
  const [task, setTask] = useState("");

  const handleClick = (e) => {
    if (task) addTask(task);
  };

  return (
    <MyDrawer
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      open={isOpen}
      title="New Task"
    >
      <$InputForDrawer
        placeholder="Task"
        inputProps={{ "aria-label": "give task title" }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <$InputForDrawer
        type="date"
        placeholder="Due Date"
        inputProps={{ "aria-label": "give due date" }}
      />
      <$ButtonForDrawer fullWidth variant="contained" onClick={handleClick}>
        Create Task
      </$ButtonForDrawer>
    </MyDrawer>
  );
};

// Proptypes
MyTaskDrawer.prototypes = {
  toggleDrawer: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

// defaults
MyTaskDrawer.defaultProps = {
  isOpen: false,
};

const mapDispatch = (dispatch) => ({
  addTask: (task) => dispatch.taskManager.addTask({ task }),
});

export default connect(null, mapDispatch)(MyTaskDrawer);
