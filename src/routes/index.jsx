import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Home from '../pages/Home'
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
      path: "/detail/:id",
      element: <DetailCar/>,
    },
]);

export function Router(){
    return (
        <RouterProvider router={router} />
    )
}
  