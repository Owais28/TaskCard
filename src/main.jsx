import { Suspense as ReactSuspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/globals.css";
import store from "./store/store";

import { CircularProgress } from "@mui/material";
import Root from "./pages/Root";

const Home = lazy(() => import("./pages/Home"));
const SeeProject = lazy(() => import("./pages/SeeProject"));
const ProjectTask = lazy(() => import("./pages/ProjectTask"));
const Notification = lazy(() => import("./pages/Notification"));

// suspense component
const Suspense = ({ children }) => (
  <ReactSuspense
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
    {children}
  </ReactSuspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "project/:projectId",
        element: (
          <Suspense>
            <SeeProject />
          </Suspense>
        ),
      },
      {
        path: "/project/:projectId/task/:taskId",
        element: (
          <Suspense>
            <ProjectTask />
          </Suspense>
        ),
      },
      {
        path: "/notification",
        element: (
          <Suspense>
            <Notification />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <Home />
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
