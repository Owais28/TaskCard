import { Stack, Icon, Input, Typography } from "@mui/material";

export const ProjectTaskInput = ({
  title,
  placeholder,
  icon,
  value,
  onClick,
}) => {
  return (
    <Stack direction={"row"}>
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
        onClick={(e) => onClick}
      />
    </Stack>
  );
};
