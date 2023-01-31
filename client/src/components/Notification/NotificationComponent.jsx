import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

const NotificationText = ({ text, person }) => {
  return (
    <Box ml={2}>
      <Typography color={"black"} fontWeight={"bold"}>
        {person ? person : "Jacob Jones"}
      </Typography>
      <Typography>{text && text}</Typography>
      {!text && (
        <Typography>
          Adding a task to<strong>3D Design</strong>
        </Typography>
      )}
    </Box>
  );
};

const NotificationActionButton = ({ link, text }) => {
  return (
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
      {text ? text : "View"}
    </Button>
  );
};

export const NotificationComponent = ({ message }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={2}
    >
      <Stack direction={"row"} alignItems="center">
        <Avatar />
        <NotificationText />
      </Stack>
      <NotificationActionButton />
    </Stack>
  );
};
