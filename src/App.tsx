import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProfileLayout from "./pages/profile/ProfileLayout";

import EditProfile from "./pages/profile/EditProfile";
import Bookings from "./pages/profile/Bookings";
import LanguageSettings from "./pages/profile/LanguageSettings";
import AccountSecurity from "./pages/profile/AccountSecurity";
import ProfileMenu from "./pages/profile/ProfileMenu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfileMenu />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="language" element={<LanguageSettings />} />
          <Route path="account-security" element={<AccountSecurity />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
