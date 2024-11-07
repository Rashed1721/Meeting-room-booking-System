import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/home" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
