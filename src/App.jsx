import React from "react";
import { AppRoutes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import MainUnreg from "./pages/MainUnreg/MainUnreg";

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<MainUnreg />} />
            {AppRoutes.map(({ path, element }) => (
                <Route path={path} element={element} />
            ))}
        </Routes>
    );
};

export default App;
