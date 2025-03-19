import { createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "../src/components/protectedRoute";
import Home from "../src/page/home";
import { Login } from "../src/page/login";
import { Register } from "../src/page/register";
import { App } from "../src/App";

export const router=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
          {
            index: true, 
            element: (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ),
          },
          {
            path: "login",
            element: <Login/>,
          },
          {
            path: "register",
            element: <Register/>,
          },
        ],
      },
])