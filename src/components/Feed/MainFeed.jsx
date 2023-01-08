import { Box } from "@mui/system";
import React from "react";

export const MainFeed = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: "25px",
      }}
    >
      {children}
    </Box>
  );
};
