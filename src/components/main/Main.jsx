import React, { useState } from "react";
import AppRoutes from "../../routes/AppRoutes";
import './Main.scss';

const Main = () => {
    const [localToken, setLocalToken] = useState(
        JSON.parse(localStorage.getItem("userData")) 
    ? !!JSON.parse(localStorage.getItem("userData")).token 
    : false);

    const isAuthenticated = localToken
    const routes = AppRoutes(isAuthenticated);
    return (
        <>
            <main className="main_wrapper">
                {routes}
            </main>
        </>
    );
};

export default Main;