import React, { useEffect } from "react";
import { connect } from "react-redux";

// ProjectTask
function PT({ setLoading }) {
  useEffect(() => {
    setLoading(false);
  }, []);

  return <div>ProjectTask</div>;
}

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

const ProjectTask = connect(null, mapDispatch)(PT);
export default ProjectTask;
