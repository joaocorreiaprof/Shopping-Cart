import App from "../App";
import Homepage from "./Homepage";
import ErrorPage from "./ErrorPage";
import Shopping from "./Shop";
import Cart from "./Cart";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "shop", element: <Shopping /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
