import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

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
        bgcolor: grey[50],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
