import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./components/layout/Root";
import SearchPage from "./pages/search/Search";
import ProfileMenu from "./pages/profile/ProfileMenu";
import EditProfile from "./pages/profile/EditProfile";
import Bookings from "./pages/profile/Bookings";

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
      {
        path: "/profile",
        element: <ProfileMenu />,
      },
      {
        path: "/profile/bookings",
        element: <Bookings />,
      },
      {
        path: "/profile/edit",
        element: <EditProfile />,
      },
    ],
  },
  {},
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
