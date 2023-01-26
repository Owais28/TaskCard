import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

export const withSuspense = (WrappedComponent) => {
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
