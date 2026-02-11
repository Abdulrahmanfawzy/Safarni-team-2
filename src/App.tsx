import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./components/layout/Root";
import SearchPage from "./pages/search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
