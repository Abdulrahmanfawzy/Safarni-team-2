import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProfileLayout from "../pages/profile/ProfileLayout";
import ProfileMenu from "../pages/profile/ProfileMenu";
import EditProfile from "../pages/profile/EditProfile";
import Bookings from "../pages/profile/Bookings";
import LanguageSettings from "../pages/profile/LanguageSettings";
import AccountSecurity from "../pages/profile/AccountSecurity";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<ProfileMenu />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="language" element={<LanguageSettings />} />
        <Route path="account-security" element={<AccountSecurity />} />
      </Route>
    </Routes>
  );
}
