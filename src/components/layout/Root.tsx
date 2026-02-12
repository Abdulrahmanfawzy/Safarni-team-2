import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Root() {
  return (
    <div className="lg:py-14 md:py-10">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Root;
