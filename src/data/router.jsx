import Root from "../pages/Root";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Suspense as ReactSuspense } from "react";
import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("../pages/HomePage"));
const SeeProject = lazy(() => import("../pages/SeeProject"));
const ProjectTask = lazy(() => import("../pages/ProjectTask"));
const Notification = lazy(() => import("../pages/NotificationPage"));

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

export const router = createBrowserRouter([
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
