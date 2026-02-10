import { Routes, Route, Link } from "react-router-dom";
import Hotel_booking from "./hotel_booking/page";

const App = () => {
    // return <div>App</div>;
    return (
        <div>
            <h1>App</h1>
            <Link to="/hotel_booking">Hotel Booking</Link>
            <Routes>
                <Route path="/about" element={<Hotel_booking />} />
            </Routes>
        </div>
    );
};

export default App;
