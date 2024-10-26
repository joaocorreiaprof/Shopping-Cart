import App from "../App";
import Homepage from "./Homepage";
import ErrorPage from "./ErrorPage";
import Shopping from "./Shop";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "shop", element: <Shopping /> },
    ],
  },
];

export default routes;
