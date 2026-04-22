'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    // !1. Car Dealership System

    // |
    type FuelType = 'petrol' | 'diesel' | 'electric' | 'hybrid';

    type Engine = {
        type: string,
        horsepower: number,
        fuelType: FuelType
    }

    type Car = {
        brand: string,
        model: string,
        year: string,
        price: string,
        engine: Engine
    }


    // !2. Online Course Platform

    type Lesson = {
        lessonId: string,
        title: string,
        durationMinutes: number
    }

    type Course = {
        courseId: string,
        courseTitle: string,
        instructorName: string,
        lessons: Lesson[],
        price: number
    }

    // !3. Banking Application

    type Currency = "NGN" | 'USD' | 'EUR';

    type AccountStatus = "active" | 'frozen' | 'closed';

    type Account = {
        accountNumber: number,
        accountName: string,
        balance: number
        currency: Currency,
        status: AccountStatus
    }

    // !4. Movie Streaming Platform

    type Genre = "action" | 'comedy' | 'drama' | 'horror' | 'documentary';

    type Movie = {
        movieId: string,
        title: string,
        releaseYear: number,
        genre: Genre,
        rating: number
    }

    // !5. Social Media Post System

    type Comment = {
        commentId: string,
        username: string,
        message: string
        createdAt: Date,
    }

    type Post = {
        postId: string,
        authorName: string,
        content: string
        likes: number,
        comments: Comment[]
    }

    // !6. Ride Hailing Application

    type RideStatus = 'requested' | 'accepted' | 'ongoing' | 'completed' | 'cancelled';

    type Ride = {
        rideId: string,
        passengerName: string,
        driverName: string,
        pickupLocation: string,
        destination: string,
        rideStatus: RideStatus
    }

    // !7. Music Playlist Application

    type Song = {
        songId: string,
        title: string,
        artist: string,
        duration: number
    }

    type Playlist = {
        playlistId: string,
        name: string,
        songs: Song[]
    }

    // !8. Library Management System

    type BookStatus = 'available' | 'borrowed' | 'reserved';

    type Book = {
        bookId: string,
        title: string,
        author: string,
        pages: number,
        availabilityStatus: BookStatus,
    }

    // !9. Food Delivery Application

    type FoodItem = {
        itemId: string,
        itemName: string,
        price: number,
        quantity: number,
    }

    type DeliveryStatus = 'preparing' | 'onTheWay' | 'delivered' | 'cancelled';

    type Order = {
        orderId: string,
        customerName: string,
        foodItems: FoodItem[],
        totalPrice: number,
        deliveryStatus: DeliveryStatus,
    }

    // !10. Device Monitoring Dashboard

    type DeviceStatus = 'online' | 'offline' | 'maintenance';

    type Location = {
        latitude: number,
        longitude: number,
    }

    type Device = {
        deviceId: string,
        deviceName: string,
        status: DeviceStatus,
        batteryLevel: number,
        location: Location
    }



    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Assignment 011 corrections
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
