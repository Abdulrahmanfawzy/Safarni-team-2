
export interface CarSpec {
  label: string;
  value: string;
}

export interface Plan {
  id: string;
  title: string;
  price: number;
  unit: "hour" | "day";
  description: string;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  fuel: "Petrol" | "Diesel";
  seats: number;
  transmission: "Automatic" | "Manual";
  specs: CarSpec[];
  plans: Plan[];
  location: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  count: number;
}