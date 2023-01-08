import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// SeeProject
function SP({ setLoading }) {
  useEffect(() => {
    setLoading(false);
  }, []);

  const param = useParams();
  console.log(param);
  return <Box>Hello </Box>;
}

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

const SeeProject = connect(null, mapDispatch)(SP);
export default SeeProject;
