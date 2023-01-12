import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export const NotificationCom = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={2}
    >
      <Stack direction={"row"}>
        <Avatar />
        <Box ml={2}>
          <Typography color={"black"} fontWeight={"bold"}>
            Jacob Jones
          </Typography>
          <Typography>
            Adding a task to <strong>3D Design</strong>{" "}
          </Typography>
        </Box>
      </Stack>
      <Button
        variant="contained"
        size="small"
        color="primary"
        sx={{
          borderRadius: "100px",
          fontSize: 14,
          textTransform: "capitalize",
          ml: 1,
        }}
        disableElevation
        disableRipple
      >
        View
      </Button>
    </Stack>
  );
};
