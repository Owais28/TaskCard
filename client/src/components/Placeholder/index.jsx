import React from "react";
import { Stack, Typography, Icon, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoFileTrayStackedOutline } from "react-icons/io5";

export const NoTaskPlaceholder = () => {
  return (
    <Stack
      justifyContent={"center"}
      position={"relative"}
      direction={"column"}
      alignItems={"center"}
      justifySelf={"center"}
      px={2}
    >
      <Stack direction={"row"} mt={15}>
        <Typography
          variant="h5"
          fontFamily={"Rubik"}
          sx={{
            color: grey[300],
          }}
        >
          No task yet!!
        </Typography>
        <Icon sx={{ marginLeft: 2, color: grey[300] }}>
          <IoFileTrayStackedOutline />
        </Icon>
      </Stack>
      <Typography
        variant="description"
        textAlign={"center"}
        color={grey[300]}
        px={5}
        fontFamily={"Rubik"}
      >
        You can add a new task or grouped-task <br /> by clicking{" "}
        <strong style={{ fontFamily: "Rubik" }}>Add New button</strong>{" "}
        <Box display={"inline"}>
          <AiFillPlusCircle />
        </Box>
      </Typography>
    </Stack>
  );
};
