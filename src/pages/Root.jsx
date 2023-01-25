import { LinearProgress, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { theme } from "../data/theme";

function R({ loading, state, dispatch }) {
  console.log("Page : Root");
  console.log(dispatch());

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
  state: state,
});

const mapDispatch = (dispatch) => ({
  dispatch: () => dispatch,
});

const Root = connect(mapState, mapDispatch)(R);
export default Root;
