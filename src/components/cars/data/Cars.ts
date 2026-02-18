import type { Brand, Car } from "../../../lib/types/typesCar";
import carimg from "../../../assets/images/Car.png"
import brandimg from "../../../assets/images/mercedes.png"

export const brands: Brand[] = [
  { id: "1", name: "Mercedes", logo: brandimg, count: 32 },
  { id: "2", name: "BMW", logo: brandimg, count: 12 },
  { id: "3", name: "Jeep", logo: brandimg, count: 31 },
  { id: "4", name: "Mercedes", logo: brandimg, count: 32 },
  { id: "5", name: "BMW", logo: brandimg, count: 12 },
  { id: "6", name: "Jeep", logo: brandimg, count: 31 },
  { id: "7", name: "Jeep", logo: brandimg, count: 31 },
];

export const cars: Car[] = [
  {
    id: "1",
    name: "S 500 Sedan",
    brand: "Mercedes",
    image: carimg,
    price: 80,
    fuel: "Diesel",
    seats: 5,
    transmission: "Automatic",
    specs: [
      { label: "Power", value: " 6,100 rpm" },
      { label: "Max Speed", value: "280 km/h" },
      { label: "Acceleration", value: "4.9 sec" },
    ],
    plans: [
      {
        id: "hourly",
        title: "Hourly Rent",
        price: 10,
        unit: "hour",
        description: "Best for business appointments",
      },
      {
        id: "daily",
        title: "Daily Rent",
        price: 80,
        unit: "day",
        description: "Best for trips",
      },
    ],

    location: "200-298 Clipper St San Francisco",
  },
  {
    id: "2",
    name: "GLA 250 SUV",
    brand: "Mercedes",
    image: carimg,
    price: 100,
    fuel: "Diesel",
    seats: 7,
    transmission: "Automatic",
    specs: [
      { label: "Power", value: "6,100 rpm" },
      { label: "Max Speed", value: "280 km/h" },
      { label: "Acceleration", value: "4.9 sec " },
    ],
    plans: [
      {
        id: "hourly",
        title: "Hourly Rent",
        price: 10,
        unit: "hour",
        description: "Best for business appointments",
      },
      {
        id: "daily",
        title: "Daily Rent",
        price: 80,
        unit: "day",
        description: "Best for trips",
      },
    ],

    location: "200-298 Clipper St San Francisco",
  },
];
