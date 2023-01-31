import React from "react";
import MyDrawer from "./MyDrawer";
import { $ButtonForDrawer, $InputForDrawer } from "./wrappers";
import PropTypes from "prop-types";

// this component make use of <Drawer> component
const MyTaskDrawer = ({ toggleDrawer, isOpen }) => {
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
      />
      <$InputForDrawer
        type="date"
        placeholder="Due Date"
        inputProps={{ "aria-label": "give due date" }}
      />
      <$ButtonForDrawer fullWidth variant="contained">
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

export default MyTaskDrawer;
