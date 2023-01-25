import Root from "../pages/Root";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { withSuspense } from "../components/WithSuspense";

// Pages
const Home = lazy(() => import("../pages/HomePage"));
const SeeProject = lazy(() => import("../pages/SeeProject"));
const ProjectTask = lazy(() => import("../pages/ProjectTask"));
const Notification = lazy(() => import("../pages/NotificationPage"));

// Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: "project/:projectId",
        element: withSuspense(SeeProject),
      },
      {
        path: "/project/:projectId/task/:taskId",
        element: withSuspense(ProjectTask),
      },
      {
        path: "/notification",
        element: withSuspense(Notification),
      },
      {
        path: "*",
        element: withSuspense(Home),
      },
    ],
    errorElement: withSuspense(Home),
  },
  {
    path: "*",
    element: <Root />,
  },
]);
