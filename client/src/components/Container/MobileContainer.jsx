import { Box } from "@mui/material";

export const MobileContainer = ({ children, sx, ...props }) => {
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
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
