import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth/useAuth";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth;

  if (!currentUser) return <Navigate to="/login" />;
  return <>{children}</>;
}

export default ProtectedRoute;
