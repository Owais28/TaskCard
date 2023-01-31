import { Box, Button, Popover, Typography } from "@mui/material";
import { useState } from "react";

export const BasicPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          animi ab unde nulla ullam ut accusantium necessitatibus ipsam? Rem
          obcaecati sequi ipsam labore corporis aliquam quasi amet cum velit
          eos?
        </Typography>
      </Popover>
    </Box>
  );
};
