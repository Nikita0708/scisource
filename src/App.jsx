import React from "react";
import { AppRoutes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import MainUnreg from "./pages/MainUnreg/MainUnreg";

const App = () => {
    return (
        <Routes>
            {AppRoutes.map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
            ))}
            <Route path="*" element={<MainUnreg />} />
        </Routes>
    );
};

export default App;
