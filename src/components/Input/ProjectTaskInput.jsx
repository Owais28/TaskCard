import React from "react";
import { Stack, Icon, Input, Typography } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";

export const ProjectTaskInput = ({
  title,
  placeholder,
  icon,
  value,
  onClick,
}) => {
  return (
    <Stack direction={"row"} onClick={onClick}>
      <Stack direction={"row"} alignItems={"center"} width={"60%"}>
        <Icon sx={{ mr: 1 }}>{icon}</Icon>
        <Typography variant="description">{title}</Typography>
      </Stack>
      <Input
        variant={"solid"}
        placeholder={placeholder}
        fullWidth
        disableUnderline
        value={value}
        sx={{
          fontFamily: "Rubik",
          fontSize: "13px",
        }}
      />
    </Stack>
  );
};
