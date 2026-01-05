import { createBrowserRouter } from "react-router";
import Login from "../Pages/Auth/Login";

import DashboardLayout from "../Layouts/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
    },
]);

export default router;
