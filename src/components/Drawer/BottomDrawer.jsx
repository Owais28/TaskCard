import React from "react";
import { Drawer, Stack, Typography, Divider, Radio } from "@mui/material";

export const BottomDrawer = ({ label, children, toggle, toggleDrawwer }) => {
  return (
    <Drawer open={toggle} anchor="bottom" onClose={toggleDrawwer}>
      <Stack borderRadius={"10px"}>
        <Typography fontWeight={"bold"} p={2} textAlign={"center"}>
          {label}
        </Typography>
        <Divider />
        {children}
      </Stack>
    </Drawer>
  );
};
