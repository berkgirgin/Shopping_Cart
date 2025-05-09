import { Navigate } from "react-router-dom";

import { StoreProvider } from "../context/StoreProvider";

import { NavBar } from "../components/Navbar";
import { Layout } from "../components/Layout";

import App from "../App";
import { StorePage } from "./StorePage";
import { CartPage } from "./CartPage";
import { NotFoundPage } from "./NotFoundPage";

// const routes = (
//   <>
//     <Route path="/" element={<App />} />
//   </>
// );

export const routes = [
  {
    element: (
      <StoreProvider>
        <Layout />
      </StoreProvider>
    ),

    children: [
      {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
      },
      {
        path: "/store",
        // element: <StorePage />,
        children: [
          {
            index: true,
            element: <Navigate to="category/all" replace />,
          },
          {
            path: "category",
            children: [
              {
                path: "all",
                element: <StorePage sortCategory="all" />,
              },
              {
                path: "men's_clothing",
                element: <StorePage sortCategory="men's clothing" />,
              },
              {
                path: "jewelery",
                element: <StorePage sortCategory="jewelery" />,
              },
              {
                path: "electronics",
                element: <StorePage sortCategory="electronics" />,
              },
              {
                path: "women's_clothing",
                element: <StorePage sortCategory="women's clothing" />,
              },
            ],
          },
        ],
      },

      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
