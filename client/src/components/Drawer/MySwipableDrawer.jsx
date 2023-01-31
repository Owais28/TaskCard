import React from "react";
import PropTypes from "prop-types";
import {
  $SwipeableDrawer,
  $Box,
  $Divider,
  Puller,
  $Text3,
  $Stack,
} from "./wrappers";

// MySwipeableDrawer component
const MySwipeableDrawer = ({
  title,
  anchor,
  children,
  open,
  onClose,
  onOpen,
}) => {
  return (
    <$SwipeableDrawer
      anchor={anchor ? anchor : "bottom"}
      open={open ? open : false}
      onClose={onClose}
      onOpen={onOpen}
      variant="temporary"
      ModalProps={{
        keepMounted: false,
      }}
    >
      <$Box>
        <$Text3>{title ? title : "Title"}</$Text3>
        <$Divider />
        <Puller />
        <$Stack>{children}</$Stack>
      </$Box>
    </$SwipeableDrawer>
  );
};

// MySwipableDrawer
MySwipeableDrawer.propTypes = {
  title: PropTypes.string,
  anchor: PropTypes.oneOf(["bottom", "top", "left", "right"]),
  children: PropTypes.elementType.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

export default MySwipeableDrawer;
