import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

export default function ProtectedRoute() {
  const { user } = useAuthStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
