import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Blog from "../pages/blog/idex";
import MainLayout from "../components/main-layout";
import FlowerINfo from "../pages/shop-card";
import Profile from "../pages/profile";
import ProductCheckout from "../pages/product-checkout/intex";
import { PrivateRout } from "./private-route";
import Details from "../components/ProfileCom/pages/details";
import Products from "../components/ProfileCom/pages/products";
import Adress from "../components/ProfileCom/pages/adress";
import Wishlist from "../components/ProfileCom/pages/wishlist";
import Order from "../components/ProfileCom/pages/orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/shop/:category/:flower_id",
        element: <FlowerINfo />,
      },
      {
        element: <PrivateRout />,
        children: [
          {
            path: "/product-checkout",
            element: <ProductCheckout />,
          },

          {
            path: "/",
            element: <Profile />,
            children: [
              { path: "/profile", element: <Details /> },
              { path: "profile/my-products", element: <Products /> },
              { path: "profile/my-products", element: <Products /> },
              { path: "profile/address", element: <Adress /> },
              { path: "profile/wishlist", element: <Wishlist /> },
              { path: "/profile/track-order", element: <Order /> },
            ],
          },
        ],
      },
    ],
  },
]);
