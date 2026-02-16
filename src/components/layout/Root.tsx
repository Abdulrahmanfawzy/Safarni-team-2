import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Root() {
  return (
    <div>
      <Navbar />
      <div className="mt-18 lg:mt-24">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
