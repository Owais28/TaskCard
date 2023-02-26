import { Box, Button } from "@mui/material";

export const BottomButton = ({
  children,
  selected = false,
  color,
  py,
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
          py: 2,
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
