import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./components/layout/Root";
import SearchPage from "./pages/search/Search";
import Destination from "./components/pages/destination/Destination";
import ProfileMenu from "./pages/profile/ProfileMenu";
import EditProfile from "./pages/profile/EditProfile";
import Bookings from "./pages/profile/Bookings";
import FavoritesPage from "./components/pages/Favorites/Page";
import ComparePage from "./components/pages/Compare/page.tsx";
import GetStarted from "./pages/auth/GetStarted";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import ForgetPass from "./pages/auth/ForgetPass";
import Otp from "./pages/auth/Otp";
import NewPass from "./pages/auth/NewPass";
import AccountSecurity from "./pages/profile/AccountSecurity";
import Hotel_booking from "./pages/hotel_booking/page";
import Hotel_details from "./pages/hotel_booking/hotel_details/page";
import Available_rooms from "./pages/hotel_booking/available_rooms/page";
import Booking from "./pages/hotel_booking/hotel_details/booking/page";
import PaymentPage from "./components/pages/payment/PaymentPage";
import PaymentSuccess from "./components/pages/payment/PaymentSuccess";
import FilterPage from "./pages/filter/Filter";
import ResultPage from "./components/common/ResultPage";
import Cars from "./pages/Cars.tsx";
import CarDetailsPage from "./components/cars/CarDetailsPage.tsx";
import Flight_page from "./pages/Flight_booking/Flight_page";

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
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/payment/success",
        element: <PaymentSuccess />,
      },

      {
        path: "/filter",
        element: <FilterPage />,
      },

      {
        path: "/cars",
        element: <Cars />,
      },

      {
        path: "/cars/:id",
        element: <CarDetailsPage />,
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
        path: "/profile/security",
        element: <AccountSecurity />,
      },

      {
        path: "/favorite",
        element: <FavoritesPage />,
      },

      {
        path: "/Compare",
        element: <ComparePage />,
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
      {
        path: "/result",
        element: <ResultPage />,
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
    path: "Flight_booking", 
    element:<Flight_page/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
