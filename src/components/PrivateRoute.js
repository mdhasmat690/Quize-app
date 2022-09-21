import { Navigate, Route, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivetRoute = ({ children }) => {
  const { currentUser } = useAuth();
  let location = useLocation();

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;
