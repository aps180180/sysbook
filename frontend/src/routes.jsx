import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import CreateBookPage from "./Pages/CreateBookPage.jsx";
const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "/create-book", element: <CreateBookPage /> },
    ],
  },
]);
export default routes;
