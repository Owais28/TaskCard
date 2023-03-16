import { useContext } from "react";
import { ProjectContext } from "./ProjectCard";
import { Box, Skeleton } from "@mui/material";

export const ProjectImg = ({ href, loading }) => {
  const project = useContext(ProjectContext);

  return (
    <Box
      width={"100%"}
      height={"200px"}
      position="relative"
      borderRadius={"7px"}
      overflow="hidden"
    >
      {loading ? (
        <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
      ) : (
        <img
          src={
            href
              ? href
              : "https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          alt="image-for-card"
        />
      )}
    </Box>
  );
};
