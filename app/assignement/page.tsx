"use client";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: ["100", "200", "900"],
  subsets: ["latin"],
});

//quistion1

// . Car Dealership System

// A car dealership application stores cars available for sale.

// Each car has:
// • brand
// • model
// • year
// • price
// • engine

// Each engine has:
// • type
// • horsepower
// • fuelType

// Fuel types can only be:
// • petrol
// • diesel
// • electric
// • hybrid

//Create a FuelType union type.
type FuelType = "petrol" | "disel" | "electric" | "hybrid";

//Create an Engine type.

type Engine = {
  type: string;
  horsepower: number;
  fuelType: FuelType;
};

//Create a Car TYPE that includes the engine.
type Car = {
  brand: string;
  model: string;
  year: number;
  price: number;
  engine: Engine;
};

//question 2 2. Online Course Platform

// An online learning platform stores courses created by instructors.

// Each course contains:
// • courseId
// • courseTitle
// • instructorName
// • lessons
// • price

// Each lesson contains:
// • lessonId
// • title
// • durationMinutes

// Task

// Create a Lesson type.

type Lesson = {
  lessonId: string;
  titil: string;
  durationMinutes: number;
};

// Create a Course type.

type Cours = {
  courseId: number;
  courseTitle: string;
  instructorName: string;
  lessons: Lesson[];
  price: number;
};

// Ensure lessons is typed as an array of Lesson.

//qustion 3 3. Banking Application

// A banking system stores user accounts.

// Each account contains:
// • accountNumber
// • accountName
// • balance
// • currency
// • status

// Currencies can only be:
// • NGN
// • USD
// • EUR

// Account status can only be:
// • active
// • frozen
// • closed

// Task

// Create a Currency union type.

type Currency = "NGN" | "USD" | "EUR";

// Create an AccountStatus union type.
type AccountStatus = "active" | "frozen" | "closed";

// Create an Account type.
type Account = {
  accountNumber: number;
  accountName: string;
  balance: number;
  currency: Currency;
  status: AccountStatus;
};

//4. Movie Streaming Platform

// A movie platform stores information about movies.

// Each movie contains:
// • movieId
// • title
// • releaseYear
// • genre
// • rating

// Genres can only be:
// • action
// • comedy
// • drama
// • horror
// • documentary

// Task

// Create a Genre union type.
type Genre = "action" | "commedy" | "drama" | "horror" | "documentary";

// Create a Movie type using that type.
type Movie = {
  movieId: number;
  title: string;
  releaseYear: number;
  genre: Genre;
  rating: number;
};

//question 5 5. Social Media Post System

// A social media application stores posts created by users.

// Each post contains:
// • postId
// • authorName
// • content
// • likes
// • comments

// Each comment contains:
// • commentId
// • username
// • message
// • createdAt

// Task

// Create a Comment type.

type Comment = {
  commentId: number;
  username: string;
  message: string;
  createdAt: Date;
};

// Create a Post type.
type Post = {
  postId: number;
  authorName: string;
  content: string;
  likes: number;
  comments: Comment[];
};

// Ensure comments can store multiple comments.

//qustion6
// 6. Ride Hailing Application

// A ride hailing app stores ride information.

// Each ride contains:
// • rideId
// • passengerName
// • driverName
// • pickupLocation
// • destination
// • rideStatus

// Ride status can only be:
// • requested
// • accepted
// • ongoing
// • completed
// • cancelled

// Task

// Create a RideStatus union type.
type RideStatus = "requested";

// Create a Ride interface.

export default function Home() {
  // JSX/TSX starts here
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
      >
        assignement 012
      </div>
      <div className="text-2xl text-black flex flex-col gap-1"></div>
    </div>
  );
  // JSX/TSX ends here
}
