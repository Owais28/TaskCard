import { useEffect } from "react";
import { connect } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { NotificationComponent } from "../components/Notification/NotificationComponent";
import { NavigationalAppBar } from "../components/NavigationalAppBar";
import { MobileContainer } from "../components/Container/MobileContainer";

function N({ setLoading }) {
  console.log("Page : Notification");

  document.title = "TaskCard → " + "Notifications 🔔";

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MobileContainer>
      <NavigationalAppBar title={"Notification"} />
      <Stack p={2}>
        <Typography fontWeight={"bold"} color={"black"}>
          Today
        </Typography>
        {[...new Array(20)].map((item, index) => (
          <NotificationComponent />
        ))}
      </Stack>
    </MobileContainer>
  );
}

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

const Notification = connect(null, mapDispatch)(N);
export default Notification;
