import React from "react";
import { AppRoutes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import MainReg from "./pages/MainReg/MainReg";

const App = () => {
    return (
        <Routes>
            {AppRoutes.map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
            ))}
            <Route path="*" element={<MainReg />} />
        </Routes>
    );
};

export default App;
