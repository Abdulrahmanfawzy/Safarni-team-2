export interface TravelItem {
    id: number;
    image: string;
    title: string;
    rating: number;
    reviews: number;
    duration: string;
    price: number;
    isFavorite: boolean;
}

export const favoritesData: TravelItem[] = [
    {
        id: 1,
        image: "src/assets/img1.jpeg",
        title: "Paris City Tour",
        rating: 4.1,
        reviews: 880,
        duration: "7 Days",
        price: 1500,
        isFavorite: true
    },

    {
        id: 2,
        image: "src/assets/img2.jpeg",
        title: "Disneyland Paris",
        rating: 4.5,
        reviews: 650,
        duration: "5 Days",
        price: 1050,
        isFavorite: true
    },

     {
    id: 3,
    image: "src/assets/img3.jpeg",
    title: "River Cruises",
    rating: 4.0,
    reviews: 350,
    duration: "6 Hours",
    price: 100,
    isFavorite: true
  },

   {
    id: 4,
    image: "src/assets/img4.jpeg",
    title: "Eiffel Tower",
    rating: 4.5,
    reviews: 650,
    duration: "5 Days",
    price: 1050,
    isFavorite: true
  },
];
