import { Box, Typography, Stack, colors } from "@mui/material";
import { CiSquarePlus } from "react-icons/ci";
import { SmallSubTask } from "./SmallSubTask";
import IconButton from "@mui/material/IconButton";

export const SubTask = ({ status, tasks }) => {
  const date = new Date();

  return (
    <Box
      p={2}
      minWidth={"270px"}
      flex={1}
      flexShrink={0}
      flexBasis={1}
      flexGrow={1}
      bgcolor={colors.grey["100"]}
      borderRadius={2}
    >
      <Box
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={3}
        flex={1}
        display={"flex"}
      >
        <Box
          flex={1}
          display={"flex"}
          direction={"row"}
          mr={2}
          alignItems={"center"}
        >
          <Typography
            mr={1}
            fontSize={"smaller"}
            fontWeight={"bold"}
            fontFamily={"Rubik"}
          >
            {status ? status : "Todo"}
          </Typography>
          <Box
            border={"1px solid #3f51b5"}
            borderRadius={100}
            py={0.6}
            px={1.5}
            fontSize={"12px"}
            color={"#3f51b5"}
            fontFamily={"Rubik"}
          >
            6
          </Box>
        </Box>
        <Box>
          <IconButton>
            <CiSquarePlus fontSize={25} />
          </IconButton>
        </Box>
      </Box>
      <Stack gap={2}>
        <SmallSubTask />
        <SmallSubTask />
        <SmallSubTask />
        <SmallSubTask />
      </Stack>
    </Box>
  );
};
