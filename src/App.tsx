import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./components/layout/Root";
import SearchPage from "./pages/search/Search";
import Destination from "./components/pages/destination/Destination";
import ProfileMenu from "./pages/profile/ProfileMenu";
import EditProfile from "./pages/profile/EditProfile";
import Bookings from "./pages/profile/Bookings";
import FavoritesPage from "./components/pages/Favorites/Page";
import GetStarted from "./pages/auth/GetStarted";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import ForgetPass from "./pages/auth/ForgetPass";
import Otp from "./pages/auth/Otp";
import NewPass from "./pages/auth/NewPass";
import Done from "./components/auth/Done";
import Hotel_booking from "./pages/hotel_booking/page";
import Hotel_details from "./pages/hotel_booking/hotel_details/page";
import Available_rooms from "./pages/hotel_booking/available_rooms/page";
import Booking from "./pages/hotel_booking/hotel_details/booking/page";

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
        path: "/destination",
        element: <Destination />,
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

      {
        path: "/favorite",
        element: <FavoritesPage />,
      },
      {
        path: "/hotel_booking",
        element: <Hotel_booking />,
      },
      {
        path: "/hotel_details/:id",
        element: <Hotel_details />,
      },
      {
        path: "/hotel_details/:id/booking",
        element: <Booking />,
      },
      {
        path: "/availableRooms/products/:category",
        element: <Available_rooms />,
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
