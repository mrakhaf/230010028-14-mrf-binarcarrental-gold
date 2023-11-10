import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Home from '../pages/Home'
import TestPage from "../pages/TestPage";
import SearchCar from "../pages/SearchCar";
import DetailCar from "../pages/DetailCar";

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
      path: "/detail/:id",
      element: <DetailCar/>,
    },
]);

export function Router(){
    return (
        <RouterProvider router={router} />
    )
}
  