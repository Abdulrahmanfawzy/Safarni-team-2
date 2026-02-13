import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./components/layout/Root";
import SearchPage from "./pages/search/Search";
import ProfileMenu from "./pages/profile/ProfileMenu";
import EditProfile from "./pages/profile/EditProfile";
import Bookings from "./pages/profile/Bookings";
import ProfileLayout from "./pages/profile/ProfileLayout";
import FavoritesPage from "./components/pages/Favorites/Page";
import GetStarted from "./pages/auth/GetStarted";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import ForgetPass from "./pages/auth/ForgetPass";
import Otp from "./pages/auth/Otp";
import NewPass from "./pages/auth/NewPass";
import Done from "./components/auth/Done";
import ResultPage from "./components/common/Result";
import FilterPage from "./pages/filter/Filter";

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
        path: "/filter",
        element: <FilterPage />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
    ],
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
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

      {
        path: "/profile/favorite",
        element: <FavoritesPage />,
      },
    ],
  },
  {
    path: "get-started",
    element: <GetStarted />,
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "forget-pass",
    element: <ForgetPass />,
  },
  {
    path: "otp",
    element: <Otp />,
  },
  {
    path: "new-pass",
    element: <NewPass />,
  },
  {
    path: "done",
    element: <Done />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
