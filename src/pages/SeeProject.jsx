import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

function SeeProject() {
  const param = useParams();
  console.log(param);
  return <Box>Hello </Box>;
}

export default SeeProject;
