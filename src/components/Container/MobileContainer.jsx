import { Box } from "@mui/material";
import React from "react";

export const MobileContainer = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "412px",
        position: "relative",
        top: 0,
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "scroll",
        fontFamily: "Rubik",
        paddingBottom: "75px",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
