import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import Root from "./pages/Root";

const Home = React.lazy(() => import("./pages/Home"));
const SeeProject = React.lazy(() => import("./pages/SeeProject"));
const ProjectTask = React.lazy(() => import("./pages/ProjectTask"));
const Notification = React.lazy(() => import("./pages/Notification"));

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
      {
        path: "/project/:projectId/task/:taskId",
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
            <ProjectTask />
          </Suspense>
        ),
      },
      {
        path: "/notification",
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
            <Notification />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CookiesProvider>
    {/* <ChakraProvider> */}
    <Provider store={store}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <RouterProvider router={router} />
      {/* </Suspense> */}
    </Provider>
    {/* </ChakraProvider> */}
  </CookiesProvider>
  // </React.StrictMode>
);
