import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./UI/App";
import Products from "./UI/Products";
import ProductDetails from "./UI/productDetails";
import Cart from "./UI/cart";
import { CartContext } from "./UI/CartContext";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Products /> },
      { path: "products/:category", element: <Products /> },
      { path: "productDetails/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  {
    path: "/cartContext",
    element: <CartContext />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
