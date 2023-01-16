import { Box, Checkbox, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

export const Task = ({ id, deleteTask, setTask }) => {
  const [checked, setChecked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <Box
        data-id={id}
        sx={{
          borderRadius: "10px",
          // backgroundColor : '#ccc',
          boxShadow: "0px 0px 25px 2px #e7e7e7",
          outline: "1px gray",
          padding: 2,
          display: "flex",
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
            Kickoff Meeting Project
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
              setTask((task) => task - 1);
              deleteTask(id);
            }}
            // checked={checked}
          />
        </Box>
      </Box>
    </motion.div>
  );
};
