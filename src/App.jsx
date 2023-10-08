import React from "react";
import { AppRoutes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import MainReg from "./pages/MainReg/MainReg";

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<MainReg />} />
            {AppRoutes.map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
            ))}
        </Routes>
    );
};

export default App;
