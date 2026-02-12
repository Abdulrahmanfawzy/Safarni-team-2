import type { FlightData } from "../types";

export const flight: FlightData = {
  airline: "Air Canada",
  airlineLogoUrl: "/aircanada.jpg",
  flightNumber: "AC006",
  date: "December 16th, 2022",

  departure: {
    time: "07h05",
    code: "YUL",
    gate: "8",
  },

  arrival: {
    time: "20h05",
    code: "NRT",
    terminal: "3",
  },

  duration: "13h00",
  seat: "6",
};
