export type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
};

export interface FlightData {
  airline: string;
  airlineLogoUrl?: string;
  flightNumber: string;
  date: string;

  departure: {
    time: string;
    code: string;
    gate: string;
  };

  arrival: {
    time: string;
    code: string;
    terminal: string;
  };

  duration: string;
  seat: string;
}

export type BookingType = "flight" | "cars" | "tours" | "hotel";

export interface CarData {
  name: string;
  transmission: string;
  seats: number;
  fuel: string;
  imageUrl: string;
}
