import { Routes, Route, Link } from "react-router-dom";
import Hotel_booking from "./hotel_booking/page";
import Hotel_details from "./hotel_booking/hotel_details/page";
import Available_rooms from "./hotel_booking/available_rooms/page";
import Booking from "./hotel_booking/hotel_details/booking/page";
const App = () => {
    // return <div>App</div>;
    return (
        <div>
            <nav>
                <Link to="/hotel_booking">Hotel Booking</Link>
            </nav>
            <Routes>
                <Route path="/hotel_booking" element={<Hotel_booking />} />
                <Route path="/hotel_details/:id" element={<Hotel_details />} />
                <Route path="/hotel_details/:id/booking" element={<Booking />} />
                <Route path="/availableRooms/products/:category" element={<Available_rooms />} />
            </Routes>
        </div>
    );
};

export default App;
