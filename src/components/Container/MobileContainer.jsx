import { Box } from "@mui/material";

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
        overflow: "hidden",
        fontFamily: "Rubik",
        paddingBottom: "75px",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
