import React from "react";
import MyDrawer from "./MyDrawer";
import { $ButtonForDrawer, $InputForDrawer } from "./wrappers";
import PropTypes from "prop-types";

// this component make use of <Drawer> component
const MyProjectDrawer = ({ toggleDrawer, isOpen }) => {
  return (
    <MyDrawer
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      open={isOpen}
      title="New Project"
    >
      <$InputForDrawer
        placeholder="Project title"
        inputProps={{ "aria-label": "give project title" }}
      />
      <$ButtonForDrawer fullWidth variant="contained">
        Create Project
      </$ButtonForDrawer>
    </MyDrawer>
  );
};

// Proptypes
MyProjectDrawer.prototypes = {
  toggleDrawer: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

// defaults
MyProjectDrawer.defaultProps = {
  isOpen: false,
};

export default MyProjectDrawer;
