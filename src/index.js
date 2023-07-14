import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./consts/routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={routes}>
            <App/>
        </RouterProvider>
    </React.StrictMode>
);
