import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import Layout from "./layouts/layout";
import Products from "./views/products";
import ProductDetail from "./views/product.detail";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/logout",
    Component: logout
  },
]);

function logout() {
  return (<div>
    onur
  </div>)
}

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}