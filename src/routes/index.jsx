import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Home from '../pages/Home'
import Testpage from '../pages/TestPage';
import App from "../App";
import TestPage from "../pages/TestPage";
import SearchCar from "../pages/SearchCar";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/search-car",
      element: <SearchCar/>,
  },
    {
      path: "/test",
      element: <TestPage/>,
    },
    {
        path: "/test-latihan",
        element: <App/>,
    },
]);

export function Router(){
    return (
        <RouterProvider router={router} />
    )
}
  