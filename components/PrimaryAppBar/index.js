import { SearchOffRounded } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import React from "react";

export const PrimaryAppBar = ({ name }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          backgroundColor: "#fff",
        }}
      >
        <Toolbar
          sx={{
            py: "5px",
          }}
        >
          <Typography
            flexGrow={1}
            variant="h3"
            color={"#000"}
            fontFamily={"Rubik"}
            fontSize={19}
            fontWeight="bold"
          >
            TaskCard
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="search-button"
              color="black"
              sx={{
                padding: "10px",
              }}
            >
              <FiSearch fontSize={22} fontWeight="bold" color="black" />
            </IconButton>
            <IconButton
              aria-label="notification-button"
              color="black"
              sx={{
                padding: "10px",
              }}
            >
              <IoNotificationsOutline
                fontSize={22}
                fontWeight="bold"
                color="black"
              />
            </IconButton>
            <IconButton
              aria-label="user-avatar"
              sx={{
                paddingRight: 0,
              }}
            >
              {/* <Box ml={'8px'}> */}
              <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fphotos%2F8qCjp99b7qU&psig=AOvVaw1rAfG4l5FaZoTjffRM1qj4&ust=1670275735408000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDpi5H04PsCFQAAAAAdAAAAABAS" />
              {/* </Box> */}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
