export interface TourItem {
    id: number;
    title: string;
    image: string;
    price: number;
    time: string;
    description: string;
}
export interface CompareItem {
    id: number;
    title: string;
    price: number;
    features: {
        duration: string;
        highlights: string;
        availability: string;
        guide: string;
        transportation: string;
    };
}

export const toursData: TourItem[] = [
    {
        id: 1,
        title: "Paris Evening Cruise",
        image: "src/assets/Compare Page/img.jpg",
        price: 75,
        time: "6:00 PM - 9:00 PM",
        description: "Enjoy a romantic evening cruise in Paris."
    },
    {
        id: 2,
        title: "Iconic Paris Tour",
        image: "src/assets/Compare Page/img2.jpg",
        price: 50,
        time: "10:00 AM - 1:00 PM",
        description: "Explore Paris's iconic landmarks and hidden gems in Paris."
    },
    {
        id: 3,
        title: "Paris Art & Culture Tour",
        image: "src/assets/Compare Page/img3.jpg",
        price: 60,
        time: "2:00 PM - 5:00 PM",
        description: "Discover Paris's artistic side with visits to renowned museums in Paris."
    },
    {
        id: 4,
        title: "Paris Historical Sites",
        image: "src/assets/Compare Page/img4.jpg",
        price: 45,
        time: "9:00 AM - 12:00 PM",
        description: "Explore the historic heart of Paris, including Notre Dame and the Latin Quarter."
    },
    {
        id: 5,
        title: "Paris Louvre Museum Tour",
        image: "src/assets/Compare Page/img5.jpg",
        price: 55,
        time: "1:00 PM - 4:00 PM",
        description: "A guided tour of the Louvre Museum, showcasing Paris's art."
    },
    {
        id: 6,
        title: "Paris Evening Cruise",
        image: "src/assets/Compare Page/img.jpg",
        price: 75,
        time: "6:00 PM - 9:00 PM",
        description: "Enjoy a romantic evening cruise in Paris."
    }
];

export const compareData: CompareItem[] = [
    {
        id: 1,
        title: "Paris Evening Cruise",
        price: 75,
        features: {
            duration: "3 hours",
            highlights: "Evening cruise",
            availability: "Available",
            guide: "Local guide",
            transportation: "Boat"
        }
    },
    {
        id: 2,
        title: "Paris Evening Cruise",
        price: 75,
        features: {
            duration: "3 hours",
            highlights: "Evening cruise",
            availability: "Available",
            guide: "Local guide",
            transportation: "Boat"
        }
    },
    {
        id: 3,
        title: "Paris Art & Culture Tour",
        price: 60,
        features: {
            duration: "3 hours",
            highlights: "Museums",
            availability: "Available",
            guide: "Art historian",
            transportation: "Walking"
        }
    },

    {
        id: 4,
        title: "Paris Louvre Museum Tour",
        price: 55,
        features: {
            duration: "3 hours",
            highlights: "Louvre Museum",
            availability: "Available",
            guide: "Art expert",
            transportation: "Walking"
        }
    },
    {
        id: 5,
        title: "Paris Historical Sites",
        price: 45,
        features: {
            duration: "3 hours",
            highlights: "Notre Dame, r",
            availability: "Available",
            guide: "Historian",
            transportation: "Walking"
        }
    },
    {
        id: 6,
        title: "Paris Evening Cruise",
        price: 75,
        features: {
            duration: "3 hours",
            highlights: "Evening cruise",
            availability: "Available",
            guide: "Local guide",
            transportation: "Boat"
        }
        }
];