import { Routes, Route, Link } from "react-router-dom";
import Hotel_booking from "./hotel_booking/page";

const App = () => {
    // return <div>App</div>;
    return (
        <div>
            <nav>
                <Link to="/hotel_booking">Hotel Booking</Link>
            </nav>
            <Routes>
                <Route path="/hotel_booking" element={<Hotel_booking />} />
            </Routes>
        </div>
    );
};

export default App;
