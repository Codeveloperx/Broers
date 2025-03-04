import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import LoadingScreen from "../components/Loading";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = (props: PrivateRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return isAuthenticated ? (
    <>{props.children}</>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
