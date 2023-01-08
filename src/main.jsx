import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "./store/store";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Root from "./pages/Root";

const Home = React.lazy(() => import("./pages/Home"));
const SeeProject = React.lazy(() => import("./pages/SeeProject"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "project/:projectId",
        element: (
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </div>
            }
          >
            <SeeProject />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
    <CookiesProvider>
      <Provider store={store}>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <RouterProvider router={router} />
        {/* </Suspense> */}
      </Provider>
    </CookiesProvider>
    {/* </`ChakraProvider> */}
  </React.StrictMode>
);
