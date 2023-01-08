import { LinearProgress } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <LinearProgress />
      <Outlet />
    </div>
  );
}
