import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const NAB = ({ title, setLoading, link = "/" }) => {
  let navigate = useNavigate();

  return (
    // <Box>
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        boxShadow: "none",
        backgroundColor: "#fff",
        borderBottom: "1px solid whitesmoke",
      }}
    >
      <Toolbar
        sx={{
          px: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // fontSize : '10px'
          }}
        >
          <IconButton
            color="black"
            aria-label="back-button"
            onClick={(e) => {
              navigate(link);
              setLoading(true);
            }}
          >
            <WestRoundedIcon fontSize={"small"} />
          </IconButton>
        </Box>
        <Typography
          flexGrow={1}
          variant="h5"
          ml={1}
          color={"#000"}
          fontFamily={"Roboto"}
          fontSize={19}
          fontWeight="bold"
        >
          {title ? title : "Unknown"}
        </Typography>
      </Toolbar>
    </AppBar>
    // </Box>
  );
};

export const NavigationalAppBar2 = () => {
  let navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} bgcolor="transparent">
      <AppBar
        position="relative"
        sx={{
          top: 0,
          boxShadow: "none",
          backgroundColor: "transparent",
          borderBottom: "1px solid whitesmoke",
        }}
      >
        <Toolbar
          sx={{
            px: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // fontSize : '10px'
            }}
          >
            <IconButton
              color="blue"
              aria-label="back-button"
              onClick={(e) => navigate("/")}
            >
              <WestRoundedIcon fontSize={"small"} color="blue" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

export const NavigationalAppBar = connect(null, mapDispatch)(NAB);
