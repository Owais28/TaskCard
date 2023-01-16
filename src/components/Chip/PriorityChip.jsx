import { Chip, Box } from "@mui/material";

export const PriorityChip = ({ priority }) => {
  if (priority === 1) {
    return (
      <Box>
        <Chip
          label={"High"}
          sx={{
            alignItems: "center",
            backgroundColor: "#ffa1993d",
            color: "#ff000094",
            fontSize: "13px",
            fontFamily: "Rubik",
            borderRadius: "10px",
            display: "flex",
            // marginLeft : '-10px'
          }}
          variant="filled"
        />
      </Box>
    );
  } else if (priority === 2) {
    return (
      <Box>
        <Chip
          label={"Medium"}
          sx={{
            alignItems: "center",
            backgroundColor: "#c29fff30",
            color: "purple",
            fontSize: "13px",
            fontFamily: "Rubik",
            borderRadius: "10px",
            display: "flex",
            // marginLeft : '-10px'
          }}
          variant="filled"
        />
      </Box>
    );
  } else if (priority === 3) {
    return (
      <Box>
        <Chip
          label={"Low"}
          sx={{
            alignItems: "center",
            backgroundColor: "#b8ffef70",
            color: "teal",
            fontSize: "13px",
            fontFamily: "Rubik",
            borderRadius: "10px",
            display: "flex",
            // marginLeft : '-10px'
          }}
          variant="filled"
        />
      </Box>
    );
  } else {
    return (
      <Box>
        <Chip
          label={"Low"}
          sx={{
            alignItems: "center",
            backgroundColor: "#b8ffef",
            color: "teal",
            fontSize: "13px",
            fontFamily: "Rubik",
            borderRadius: "10px",
            display: "flex",
            // marginLeft : '-10px'
          }}
          variant="filled"
        />
      </Box>
    );
  }
};
