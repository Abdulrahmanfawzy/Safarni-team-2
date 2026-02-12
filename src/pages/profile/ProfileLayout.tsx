import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

function ProfileLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ProfileLayout;
