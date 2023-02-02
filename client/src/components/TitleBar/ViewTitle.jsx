import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export const ViewTitle = ({ title = "Undefinded", link = "/" }) => {
  return (
    <Box display={"flex"} alignItems="center" paddingX="18px">
      <Typography flex={1} fontSize="small" fontWeight={"bold"}>
        {title}
      </Typography>
      <Link to={link}>
        <Typography fontSize={"small"} color="primary">
          See All
        </Typography>
      </Link>
    </Box>
  );
};
