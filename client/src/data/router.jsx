import Root from "../pages/Root";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { withSuspense } from "../components/hoc/withSuspense";

// Pages
const Home = lazy(() => import("../pages/HomePage"));
const SeeProject = lazy(() => import("../pages/SeeProject"));
const ProjectTask = lazy(() => import("../pages/ProjectTask"));
const Notification = lazy(() => import("../pages/NotificationPage"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const SeeAllProjects = lazy(() => import("../pages/SeeAllProjects"));
const SeeAllTasks = lazy(() => import("../pages/SeeAllTasks"));
const ProtectedRoute = lazy(() => import("../components/hoc/ProtectedRoute"));
// const Error = lazy(() => import("../pages/Error"));

// Router
export const router = createBrowserRouter([
  {
    path: "/",
    // errorElement:withSuspense(Error),
    element: <Root />,
    children: [
      {
        index: true,
        element: <ProtectedRoute>{withSuspense(Home)}</ProtectedRoute>,
      },
      {
        path: "/project/:projectId",
        element: <ProtectedRoute>{withSuspense(SeeProject)}</ProtectedRoute>,
      },
      {
        path: "/project/:projectId/task/:taskId",
        element: <ProtectedRoute>{withSuspense(ProjectTask)}</ProtectedRoute>,
      },
      {
        path: "/notification",
        element: <ProtectedRoute>{withSuspense(Notification)}</ProtectedRoute>,
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
        path: "/seeallprojects",
        element: (
          <ProtectedRoute>{withSuspense(SeeAllProjects)}</ProtectedRoute>
        ),
      },
      {
        path: "/seealltasks",
        element: <ProtectedRoute>{withSuspense(SeeAllTasks)}</ProtectedRoute>,
      },
    ],
  },
  {
    path: "*",
    element: <Root />,
  },
]);
