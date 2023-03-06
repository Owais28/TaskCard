import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

// useAuth hook
export function useAuth() {
  return useContext(AuthContext);
}
