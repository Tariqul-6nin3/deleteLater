import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import ErrorPage from "./pages/errorpage/Errorpage.jsx";
import Context from "./providers/Context.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Home from "./pages/homepage/Home.jsx";
import DashboardContainer from "./components/DashboardContainer/DashboardContainer";
import Addclass from "./components/Dashboard/InstructorDashboard/Addclass";
import AllUser from "./components/Dashboard/AdminDashboard/AllUser";
import AllClass from "./components/Dashboard/AdminDashboard/AllClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dash",
    element: <DashboardContainer />,
    children: [
      {
        path: "/dash/addclass",
        element: <Addclass />,
      },
      {
        path: "/dash/alluser",
        element: <AllUser />,
      },
      {
        path: "/dash/allclass",
        element: <AllClass />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  </React.StrictMode>
);
