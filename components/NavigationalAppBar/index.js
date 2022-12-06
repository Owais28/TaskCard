import React from "react";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import { ArrowBack } from "@mui/icons-material";

export const NavigationalAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          boxShadow: "none",
          backgroundColor: "#fff",
          borderBottom: "1px solid whitesmoke",
        }}
      >
        <Toolbar
          sx={{
            px: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // fontSize : '10px'
            }}
          >
            <IconButton
              color="black"
              sx={
                {
                  // padding: '10px'
                }
              }
            >
              <WestRoundedIcon
                fontSize={"small"}
                //  fontWeight='bold'
                // color='black'
              />
            </IconButton>
          </Box>
          <Typography
            flexGrow={1}
            variant="h5"
            ml={1}
            color={"#000"}
            fontFamily={"Roboto"}
            fontSize={19}
            fontWeight="bold"
          >
            New Project
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};