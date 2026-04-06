import { Wind, Waves, Umbrella, Car } from "lucide-react"
import React from "react"

export interface Property {
    id: string
    title: string
    location: string
    price: number
    guests: number
    beds: number
    bath: number
    sqm: number
    description: string
    amenities: { icon: string; name: string }[]
    airbnbUrl: string
    bookingUrl: string
    whatsappUrl: string
    images: string[]
    mainFeatures: {
        space: string
        access: string
    }
}

export const PROPERTIES: Property[] = [
    {
        id: "1",
        title: "Luxury Apartment Tanja Balia I",
        location: "Tanger, Morocco",
        price: 800,
        beds: 3,
        guests: 4,
        bath: 2,
        sqm: 110,
        description: "Welcome to our stunning 3-bedroom apartment in the heart of Tanja Balia. This modern space offers a perfect blend of luxury and comfort, featuring spacious rooms, a fully equipped kitchen, and a beautiful living area. Located in one of Tangier's most sought-after neighborhoods, you'll be close to all major attractions while enjoying a peaceful and secure environment.",
        amenities: [
            { icon: "Wind", name: "AC & Wi-Fi" },
            { icon: "Waves", name: "Rooftop Pool" },
            { icon: "Umbrella", name: "Beachfront" },
            { icon: "Car", name: "Free parking" }
        ],
        airbnbUrl: "https://www.airbnb.com/rooms/1544203142734260155",
        bookingUrl: "#",
        whatsappUrl: "https://wa.me/212661662984",
        images: [
            "/tanja-balia-1/cover.png",
            "/tanja-balia-1/tanja-balia-1.jpeg",
            "/tanja-balia-1/tanja-balia-2.jpeg",
            "/tanja-balia-1/tanja-balia-3.jpeg",
            "/tanja-balia-1/tanja-balia-4.jpeg",
            "/tanja-balia-1/tanja-balia-5.jpeg",
            "/tanja-balia-1/tanja-balia-6.jpeg",
            "/tanja-balia-1/tanja-balia-7.jpeg",
            "/tanja-balia-1/tanja-balia-8.jpeg",
            "/tanja-balia-1/tanja-balia-9.jpeg",
        ],
        mainFeatures: {
            space: "A spacious 3-bedroom apartment with a large living room, modern kitchen, and 2 bathrooms. High-speed Wi-Fi and air conditioning throughout the space.",
            access: "Guests have full access to the entire apartment. The building offers 24/7 security and a private parking space."
        }
    },
    {
        id: "2",
        title: "Elegant Apartment Alanda",
        location: "Tanger, Morocco",
        price: 1000,
        beds: 3,
        guests: 4,
        bath: 2,
        sqm: 120,
        description: "Experience elegance and comfort in this beautiful Alanda apartment. Featuring high-end finishes and modern decor, this space is designed for those who appreciate the finer things. Located in a premium area of Tangier, it offers easy access to the city's best restaurants and boutiques.",
        amenities: [
            { icon: "Wind", name: "AC & Wi-Fi" },
            { icon: "Waves", name: "Building Pool" },
            { icon: "Umbrella", name: "City View" },
            { icon: "Car", name: "Secure Parking" }
        ],
        airbnbUrl: "https://www.airbnb.com/rooms/1575520467517950043",
        bookingUrl: "#",
        whatsappUrl: "https://wa.me/212661662984",
        images: [
            "/alanda-tanger/cover.png",
            "/modern-living-room-casablanca.jpg",
            "/modern-kitchen.jpg",
            "/ocean-view-terrace.jpg"
        ],
        mainFeatures: {
            space: "An elegant and modern space with premium furniture and a fully equipped kitchen. Perfect for families or small groups.",
            access: "Full access to the apartment and building amenities, including the shared pool and parking."
        }
    },
    {
        id: "3",
        title: "Beachfront Oasis Oued Alian",
        location: "Oued Alian Beach, Morocco",
        price: 1200,
        beds: 8,
        guests: 8,
        bath: 4,
        sqm: 250,
        description: "Escape to our luxurious beachfront oasis at Oued Alian Beach. This massive villa offers unparalleled sea views and direct beach access. With 8 beds and plenty of living space, it's the ultimate getaway for large families or groups of friends looking to create unforgettable memories by the ocean.",
        amenities: [
            { icon: "Wind", name: "AC & Wi-Fi" },
            { icon: "Waves", name: "Direct Beach Access" },
            { icon: "Umbrella", name: "Sea View Terrace" },
            { icon: "Car", name: "Private Parking" }
        ],
        airbnbUrl: "https://www.airbnb.com/rooms/1462498951412765021",
        bookingUrl: "#",
        whatsappUrl: "https://wa.me/212661662984",
        images: [
            "/Oued-Alian-Beach/cover.png",
            "/Oued-Alian-Beach/1.jpeg",
            "/luxury-villa-marrakech.jpg",
            "/modern-villa-dusk-morocco.jpg"
        ],
        mainFeatures: {
            space: "A massive beachfront villa with multiple terraces, large living areas, and direct access to the sand. Perfect for large groups.",
            access: "Guests have full access to the entire villa and its private grounds."
        }
    },
    {
        id: "4",
        title: "Modern Stay Tanja Balia II",
        location: "Tanger, Morocco",
        price: 800,
        beds: 3,
        guests: 4,
        bath: 2,
        sqm: 110,
        description: "Discover modern living in our Tanja Balia II apartment. This sleek and stylish space is perfect for those looking for a comfortable and convenient stay in Tangier. Featuring a contemporary design and all the necessary amenities, it's your home away from home.",
        amenities: [
            { icon: "Wind", name: "AC & Wi-Fi" },
            { icon: "Waves", name: "Rooftop Pool" },
            { icon: "Umbrella", name: "Beachfront" },
            { icon: "Car", name: "Free parking" }
        ],
        airbnbUrl: "https://www.airbnb.com/rooms/1516759141273194780",
        bookingUrl: "#",
        whatsappUrl: "https://wa.me/212661662984",
        images: [
            "/tanja-balia-2/cover.png",
            "/tanja-balia-2/tanja-balia-1.jpeg",
            "/tanja-balia-2/tanja-balia-2.jpeg",
            "/tanja-balia-2/tanja-balia-3.jpeg",
            "/tanja-balia-2/tanja-balia-4.jpeg",
            "/tanja-balia-2/tanja-balia-5.jpeg",
            "/tanja-balia-2/tanja-balia-6.jpeg",
            "/tanja-balia-2/tanja-balia-7.jpeg",
            "/tanja-balia-2/tanja-balia-8.jpeg",
            "/tanja-balia-2/tanja-balia-9.jpeg",
        ],
        mainFeatures: {
            space: "A modern 3-bedroom apartment with a contemporary design and high-quality finishes. Includes air conditioning and reliable Wi-Fi.",
            access: "Full access to the apartment and building facilities, including 24/7 security."
        }
    }
]

export function getPropertyById(id: string): Property | undefined {
    return PROPERTIES.find((p) => p.id === id)
}
