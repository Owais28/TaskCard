import { useEffect } from "react";
import { connect } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import { NotificationCom } from "../components/Notification/NotificationCom";

function N({ setLoading }) {
  console.log("Page : Notification");

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "412px",
        position: "relative",
        top: 0,
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "scroll",
        fontFamily: "Rubik",
        paddingBottom: "75px",
      }}
    >
      <Stack p={2}>
        <Typography fontWeight={"bold"} color={"black"}>
          Today
        </Typography>
        {[...new Array(50)].map((item, index) => (
          <NotificationCom />
        ))}
        {/* <NotificationCom /> */}
      </Stack>
    </Box>
  );
}

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

const Notification = connect(null, mapDispatch)(N);
export default Notification;
