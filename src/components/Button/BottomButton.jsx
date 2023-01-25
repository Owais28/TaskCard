import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const BottomButton = ({
  children,
  selected = false,
  color,
  py,
  colorIfSelected,
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
        }}
      >
        {children}
      </Button>
    </Box>
  );
};
