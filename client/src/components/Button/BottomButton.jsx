import { Box, Button } from "@mui/material";

export const BottomButton = ({
  selected = false,
  color,
  colorIfSelected,
  icon,
  title,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100%",
      }}
    >
      <Button
        color={
          selected ? colorIfSelected : color
          // 'notSelected'
        }
        sx={{
          width: "100%",
          py: 1.5,
          height: "100%",
          borderRadius: 0,
          fontSize: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
        <Box>{title}</Box>
      </Button>
    </Box>
  );
};
