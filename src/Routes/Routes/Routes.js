import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/my-profile',
        element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
    }

])
export default router;