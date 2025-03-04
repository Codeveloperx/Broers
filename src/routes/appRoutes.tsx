import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";

import Login from "../pages/login/login";
import Characters from "../pages/home/Characters";
import CharacterDetail from "../pages/detail/CharacterDetail";
import MainLayout from "../layout/MainLayout";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/characters"
              element={
                <PrivateRoute>
                  <Characters />
                </PrivateRoute>
              }
            />
            <Route
              path="/character/:id"
              element={
                <PrivateRoute>
                  <CharacterDetail />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
