import App from "./App.jsx";
import "./App.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartDetail from "./components/CartDetail/CartDetail.jsx";
import SignIn from "./components/Auth/SignIn/SignIn.jsx";
import SignUp from "./components/Auth/SignUp/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <CartDetail />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
