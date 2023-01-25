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