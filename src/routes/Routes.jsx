import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import SingleToy from "../pages/SingleToy/SingleToy";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Register></Register>
            },
            {
                path: '/addToy',
                element: <AddToy></AddToy>
            },
            {
                path: 'singleToy/:id',
                element: <SingleToy></SingleToy>,
                loader: ({params})=>fetch(`http://localhost:5000/alltoys/${params.id}`)
            }
        ]
    }
]);
export default router;