import { createBrowserRouter } from "react-router-dom";
import { AddCoffee, EditCoffee, Error, Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/add-coffee",
    element: <AddCoffee />,
  },
  {
    path: "/edit-coffee",
    element: <EditCoffee />,
  },
]);

export default router;
