import React from "react";
import { Box, Typography } from "@mui/material";
import { CiSquarePlus, CiCircleMore } from "react-icons/ci";

export const SubTask = () => {
  const date = new Date();
  return (
    <Box
      p={2}
      width={"500x !important"}
      flex={1}
      flexShrink={0}
      flexBasis={1}
      flexGrow={1}
      bgcolor={"#f5f5f5"}
      borderRadius={2}
    >
      <Box
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={3}
        flex={1}
        display={"flex"}
      >
        <Box
          flex={1}
          display={"flex"}
          direction={"row"}
          mr={2}
          alignItems={"center"}
        >
          <Typography
            mr={1}
            fontSize={"smaller"}
            fontWeight={"bold"}
            fontFamily={"Rubik"}
          >
            To-do
          </Typography>
          <Box
            border={"1px solid #3f51b5"}
            borderRadius={100}
            py={0.6}
            px={1.5}
            fontSize={"12px"}
            color={"#3f51b5"}
            fontFamily={"Rubik"}
          >
            6
          </Box>
        </Box>
        <Box>
          <CiSquarePlus fontSize={25} />
        </Box>
      </Box>
      <Box>
        <Box bgcolor={"white"} p={2} borderRadius={2}>
          <Box
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={0.6}
            display={"flex"}
          >
            <Typography
              fontSize={"17px"}
              fontWeight={"bold"}
              fontFamily={"Rubik"}
              mr={2}
            >
              Brainstroming
            </Typography>
            <Box>
              <CiCircleMore />
            </Box>
          </Box>
          <Typography fontSize={"13px"} color={"rgb(0,0,0,0.6)"}>
            Due Date : {date.toDateString().split(" ").splice(1).join(" ")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
