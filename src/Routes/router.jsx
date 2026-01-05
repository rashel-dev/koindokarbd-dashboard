import { createBrowserRouter } from "react-router";
import Login from "../Pages/Auth/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>
    }
])

export default router;
