import { createBrowserRouter } from "react-router";
import Login from "../Pages/Auth/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Sales from "../Pages/Dashboard/Sales";
import AddSales from "../Pages/Dashboard/AddSales";
import Products from "../Pages/Dashboard/Products";
import Categorys from "../Pages/Dashboard/Categorys";
import Brand from "../Pages/Dashboard/Brand";
import Grade from "../Pages/Dashboard/Grade";
import Color from "../Pages/Dashboard/Color";
import Size from "../Pages/Dashboard/Size";
import Purchase from "../Pages/Dashboard/Purchase";
import Customer from "../Pages/Dashboard/Customer";
import Company from "../Pages/Dashboard/Company";
import Users from "../Pages/Dashboard/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true,
                element: <Dashboard></Dashboard>,
            },
            {
                path: "sales",
                element: <Sales></Sales>,
            },
            {
                path: "add-sales",
                element: <AddSales></AddSales>,
            },
            {
                path: "products",
                element: <Products></Products>,
            },
            {
                path: "categorys",
                element: <Categorys></Categorys>,
            },
            {
                path: "brand",
                element: <Brand></Brand>,
            },
            {
                path: "grade",
                element: <Grade></Grade>,
            },
            {
                path: "color",
                element: <Color></Color>,
            },
            {
                path: "size",
                element: <Size></Size>,
            },
            {
                path: "purchase",
                element: <Purchase></Purchase>,
            },
            {
                path: "customer",
                element: <Customer></Customer>,
            },
            {
                path: "company",
                element: <Company></Company>,
            },
            {
                path: "users",
                element: <Users></Users>,
            },
        ],
    },
]);

export default router;
