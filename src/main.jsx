import App from "./App.jsx";
import "./App.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartDetail from "./components/CartDetail/CartDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <CartDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
