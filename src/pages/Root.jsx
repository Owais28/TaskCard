import { LinearProgress } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { connect } from "react-redux";

function R({ loading }) {
  console.log(loading);
  return (
    <motion.div layout>
      <LinearProgress
        sx={{
          display: loading ? "block" : "none",
        }}
      />
      <Outlet />
    </motion.div>
  );
}

const mapState = (state) => ({
  loading: state.loading,
});

const Root = connect(mapState, null)(R);
export default Root;
