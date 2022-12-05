import { Box, Divider, Input } from "@mui/material";
import React from "react";
import { NavigationalAppBar } from "../NavigationalAppBar";

export const NewProject = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "412px",
        position: "relative",
        top: 0,
        // minHeight: '100vh',
        height: "100vh",
        maxHeight: "100vh",
        overflow: "scroll",
        fontFamily: "Rubik",
        paddingBottom: "75px",
      }}
    >
      <NavigationalAppBar />
      <Box px={"18px"} py={1} width={"100%"} height={"100%"}>
        <Box>
          <Input
            placeholder="Project name"
            disableUnderline
            sx={{
              border: "none",
              outline: "none",
              // py : 1,
              fontSize: 35,
              fontWeight: "bold",
              color: "rgb(0,0,0,0.8)",
            }}
          />
          <Input
            placeholder="Description..."
            disableUnderline
            sx={{
              border: "none",
              outline: "none",
              // py : 2,
              fontSize: 16,
              // fontWeight : 'bold',
              color: "rgb(0,0,0,0.8)",
            }}
          />
        </Box>
        <Divider
          style={{
            backgroundColor: "whitesmoke",
            margin: "20px 0",
          }}
        />
      </Box>
    </Box>
  );
};
