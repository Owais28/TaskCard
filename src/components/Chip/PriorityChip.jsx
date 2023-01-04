// import SignalCellularAlt2BarRoundedIcon from "@mui/icons-material/SignalCellularAlt2BarRounded";
// import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
// import SignalCellularAlt1BarRoundedIcon from "@mui/icons-material/SignalCellularAlt1BarRounded";
import { Chip, Box } from "@mui/material";
// import { color } from "@mui/system";

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
          // icon={
          //   // <Box>

          //     <SignalCellularAltRoundedIcon
          //       fontSize='small'
          //       sx={{
          //         // height : '100px'
          //         // marginRight: '-10px',
          //         // '& '

          //       }}
          //     />
          //   // </Box>
          // }
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
          // icon={
          //   <Box>

          //     <SignalCellularAlt2BarRoundedIcon
          //       fontSize='small'
          //       sx={{
          //         // height : '100px'
          //         marginRight: '-5px',
          //         color: 'purple'

          //       }}
          //     />
          //   </Box>
          // }
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
          // icon={
          //   <Box>

          //     <SignalCellularAlt1BarRoundedIcon
          //       fontSize='small'
          //       sx={{
          //         // height : '100px'
          //         marginRight: '-10px',
          //         color: 'teal'

          //       }}
          //     />
          //   </Box>
          // }
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
          // icon={
          //   <Box>

          //     <SignalCellularAlt2BarRoundedIcon
          //       fontSize='small'
          //       sx={{
          //         // height : '100px'
          //         marginRight: '-10px',
          //         color: 'teal'

          //       }}
          //     />
          //   </Box>
          // }
        />
      </Box>
    );
  }
};
