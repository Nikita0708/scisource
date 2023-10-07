import React from "react";
import { AppRoutes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import MainReg from "./pages/MainReg/MainReg";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Routes>
      {AppRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
      <Route
        path="*"
        element={
          <PrivateRoute>
            <MainReg />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
