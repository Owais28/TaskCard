import { LinearProgress, ThemeProvider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { theme } from "../custom/theme";

function R({ loading }) {
  console.log(loading);
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
