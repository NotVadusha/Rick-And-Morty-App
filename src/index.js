import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {RouterProvider} from "react-router-dom";
import {routes} from "./consts/routes";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routes}>
                <App/>
            </RouterProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
