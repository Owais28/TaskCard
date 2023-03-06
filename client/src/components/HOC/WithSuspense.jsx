import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { grey } from "@mui/material/colors";

export const withSuspense = (WrappedComponent) => {
  document.title = "TaskCard 💭 " + "loading...";

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: grey[50],
          }}
        >
          <CircularProgress />
        </div>
      }
    >
      <WrappedComponent />
    </Suspense>
  );
};
