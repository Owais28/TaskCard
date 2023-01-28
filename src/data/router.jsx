import Root from "../pages/Root";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { withSuspense } from "../components/HOC/WithSuspense";

// Pages
const Home = lazy(() => import("../pages/HomePage"));
const SeeProject = lazy(() => import("../pages/SeeProject"));
const ProjectTask = lazy(() => import("../pages/ProjectTask"));
const Notification = lazy(() => import("../pages/NotificationPage"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Error = lazy(() => import("../pages/Error"));

// Router
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:withSuspense(Error),
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
        path: "/login",
        element: withSuspense(Login),
      },
      {
        path: "/signup",
        element: withSuspense(Signup),
      },
      {
        path: "*",
        element: withSuspense(Home),
      },
    ],
    // errorElement: withSuspense(Home),
  },
  {
    path: "*",
    element: <Root />,
  },
]);
