import { Box, Typography, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { CiCircleMore } from "react-icons/ci";
import { AiFillFlag, AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export const SmallSubTask = () => {
  const date = new Date();
  const navigate = useNavigate();
  return (
    <Box onClick={(e) => navigate("/project/22/task/23")}>
      <Box bgcolor={"white"} pl={2} pt={2} pb={2} pr={2} borderRadius={3}>
        <Box
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={0.6}
          display={"flex"}
          width={"100%"}
        >
          <Typography
            fontSize={"17px"}
            fontWeight={"bold"}
            fontFamily={"Rubik"}
            mr={2}
          >
            Brainstroming
          </Typography>
          <Box zIndex={10}>
            <IconButton>
              <CiCircleMore size={20} />
            </IconButton>
          </Box>
        </Box>
        <Typography fontSize={"13px"} color={"rgb(0,0,0,0.6)"}>
          Due Date : {date.toDateString().split(" ").splice(1).join(" ")}
        </Typography>
        <Box
          width={"100%"}
          height={"150px"}
          overflow={"hidden"}
          borderRadius={2}
          sx={{
            "& .small-task-img": {
              objectFit: "cover",
            },
          }}
          mt={2}
        >
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            width={"100%"}
            // height={"100%"}
            className="small-task-img"
          />
        </Box>
        <Stack mt={1} direction={"row"}>
          <IconButton>
            <AiFillFlag color="red" size={15} />
          </IconButton>
          <IconButton>
            <AiFillStar color="gold" size={20} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};
