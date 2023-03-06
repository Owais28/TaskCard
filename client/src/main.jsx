import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./styles/globals.css";
import store from "./data/store/store";

import { router } from "./data/router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./data/theme";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CookiesProvider>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </ThemeProvider>
    </StoreProvider>
  </CookiesProvider>
  // </React.StrictMode>
);
