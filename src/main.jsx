import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./styles/globals.css";
import store from "./data/store/store";

import { router } from "./data/router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./data/theme";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CookiesProvider>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  </CookiesProvider>
  // </React.StrictMode>
);
