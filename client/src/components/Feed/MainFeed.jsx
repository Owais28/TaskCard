import { Box } from "@mui/system";

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
