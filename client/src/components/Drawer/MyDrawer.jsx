import PropTypes from "prop-types";
import { $Drawer, $Box, $Divider, Puller, $Text3, $Stack } from "./wrappers";

// MyDrawer Component
const MyDrawer = ({
  title,
  anchor,
  children,
  open,
  onClose,
  onOpen,
  ...props
}) => {
  return (
    <$Drawer
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
        <$Stack gap={3}>{children}</$Stack>
      </$Box>
    </$Drawer>
  );
};

// Proptypes
// MyDrawer
MyDrawer.propTypes = {
  title: PropTypes.string,
  anchor: PropTypes.oneOf(["bottom", "top", "left", "right"]),
  children: PropTypes.elementType.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

export default MyDrawer;
