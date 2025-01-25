import {
  createBrowserRouter
} from "react-router-dom";
import CheckOut from "../Components/CheckOut";
import Home from "../Components/HomePage/Home";
import Main from "../Components/Layout/Main";
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
      },
      {
        path:'/checkout/:id',
        element:<CheckOut></CheckOut>,
        loader:({params})=>fetch(`http://localhost:5000/items/${params.id}`)
      }
       
      ]
    },
  ]);

  export default router;