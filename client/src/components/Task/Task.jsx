import { Box, Checkbox, Snackbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export const Task = ({ id, deleteTask, setTask, title }) => {
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      layout
      drag="x"
      dragConstraints={{ left: 0, right: 30 }}
      // whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragSnapToOrigin
    >
      <Box
        data-id={id}
        width={"80%"}
        sx={{
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0px 0px 25px 2px #e7e7e7",
          outline: "1px gray",
          padding: 2,
          display: "flex",
          width: "100%",
        }}
      >
        <Box flex={1} alignItems="center">
          <Typography
            fontSize={"small"}
            fontWeight={"bold"}
            fontFamily={"Rubik"}
            color={"rgb(0,0,0,.85)"}
            // mb={1}
          >
            {title}
          </Typography>
          <Typography color={"rgb(0,0,0,0.6)"} fontSize={"13px"}>
            Today - 18.00 PM
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            aria-label="task-status"
            sx={{
              color: "#1f78f0",
              borderRadius: 10,
              // '&:hover': { bgcolor: 'transparent' },
              "& .MuiSvgIcon-root": {
                fontSize: 25,
                borderRadius: 20,
                display: "block",
              },
            }}
            onClick={(e) => {
              setTask && setTask((task) => task - 1);
              deleteTask(id);
              // handleClick();
            }}
            // checked={checked}
          />
          {/* <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            message="Note archived"
          /> */}
          {/* <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert> */}
        </Box>
      </Box>
    </motion.div>
  );
};
