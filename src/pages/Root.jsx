import { LinearProgress, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { theme } from "../custom/theme";
import { useEffect } from "react";

function R({ loading }) {
  console.log("Page : Root");
  console.log(loading);

  // useEffect(
  //   // (() => Notification.requestPermission().then((req) => alert(req)))(),
  //   []
  // );

  return (
    <motion.div layout>
      <ThemeProvider theme={theme}>
        <LinearProgress
          sx={{
            display: loading ? "block" : "none",
          }}
        />
        <Outlet />
      </ThemeProvider>
    </motion.div>
  );
}

const mapState = (state) => ({
  loading: state.loading,
});

const Root = connect(mapState, null)(R);
export default Root;
