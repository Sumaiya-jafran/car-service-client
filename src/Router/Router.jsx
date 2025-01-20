import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Components/Layout/Main";
import Home from "../Components/HomePage/Home";
import SignIn from "../Components/SignIn";
import Signup from "../Components/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
         path:'/',
         element: <Home></Home>
      },
        {
         path:'/signin',
         element: <SignIn></SignIn>
      },
        {
         path:'/signup',
         element: <Signup></Signup>
      }
       
      ]
    },
  ]);

  export default router;