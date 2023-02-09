import { useState } from "react";

// Drawer hook
export const useDrawer = (state, setModal) => {
  const [drawer, setDrawer] = useState(false);

  // function to toggle Drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setModal(false);
    setDrawer(state);
  };

  return [drawer, toggleDrawer];
};
