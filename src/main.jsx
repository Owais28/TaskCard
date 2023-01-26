import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./styles/globals.css";
import store from "./data/store/store";

import { router } from "./data/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CookiesProvider>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </CookiesProvider>
  // </React.StrictMode>
);
