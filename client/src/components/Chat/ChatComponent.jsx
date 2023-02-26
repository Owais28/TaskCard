import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

const ChatText = ({ sender = "Unknown", message = "Message" }) => {
  return (
    <Stack ml={2} justifyContent="space-between">
      <Typography fontWeight="bold" fontSize={"small"} fontFamily="Rubik">
        {sender}
      </Typography>
      <Typography fontSize={14} color={grey[700]} fontFamily="Rubik">
        {message.length <= 30 ? message : message.slice(0, 30) + "..."}
      </Typography>
    </Stack>
  );
};

export const ChatComponent = ({ sender, message, numOfMsg, time }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={2}
    >
      <Stack direction={"row"} alignItems="center">
        <Avatar />
        <ChatText sender={sender} message={message} />
      </Stack>
      <Stack alignItems={"center"} pl={1}>
        <Typography
          fontSize={10}
          sx={{
            backgroundColor: blue[800],
            padding: 0.5,
            borderRadius: 100,
            color: "white",
          }}
        >
          {numOfMsg}
        </Typography>
        <Typography fontSize={13}>{time}</Typography>
      </Stack>
    </Stack>
  );
};
