"use client";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: ["100", "200", "900"],
  subsets: ["latin"],
});
// 1. Username Formatter
// Create a type that enforces usernames in this format:
// user_johndoe
// Requirements:
//  • Must start with user_
//  • Followed by any lowercase string
// Example:
// type Username = ???;

type Username = `user_${Lowercase<string>}`;

const u1: Username = "user_adam"; // ✅
const u2: Username = "admin_adam"; // ❌

// 2. Country Code Phone Number
// Enforce Nigerian-style phone numbers:
// +234XXXXXXXXXX
// Requirements:
//  • Must start with +234
//  • Followed by exactly 10 digits (approximate using ${number})

type Nigeriannumber = `+234${number}`;

const N1: Nigeriannumber = `+234567675677876`;

// 3. CSS Class Naming (BEM Style)
// Create a type for BEM class naming:
// block__element--modifier
// Example:
// type BEM = ???;

type BEM = `card__title--active${string}`;
const cls: BEM = "card__title--active"; // ✅

// 4. API Endpoint Builder
// Create a type for endpoints like:
// /api/users
// /api/products
// /api/orders
// Requirement:
//  • Must start with /api/
//  • Only allow specific resources (users | products | orders)

type Users = {
  name: string;
  age: number;
  happy: boolean;
};
type products = {
  price: number;
  status: boolean;
};
type orders = {
  status: boolean;
  number: number;
};
type UserValue = `/api/${"Users" | "products" | "orders"}`;

const U1: UserValue = "/api/Users";
const U2: UserValue = "/api/orders";
const U3: UserValue = "/api/products";

// 5. File Extension Validator
// Allow only specific file types:
// image.png
// video.mp4
// document.pdf
// Requirements:
//  • Filename: any string
//  • Extensions: png | jpg | mp4 | pdf
type TypeUnique = "image" | "video" | "document";
type fileType = "png" | "jpg" | "mp4" | "pdf";
type file = `${TypeUnique}.${fileType}`;

// 6. Environment Variable Format
// Enforce .env variable naming:
// NEXT_PUBLIC_API_URL
// DB_PASSWORD
// Requirements:
//  • Must be uppercase
//  • Words separated by _

type Word = Uppercase<string>;
type Env = `${Word}_${Word}`;
const W1: Env = "DB_PASSWORD";

// 7. Route Slug Generator
// Create a type for blog slugs:
// /blog/my-first-post
// /blog/typescript-is-cool
// Requirements:
//  • Must start with /blog/
//  • Followed by kebab-case string
type Kebab = `${Lowercase<string>}-${Lowercase<string>}`;
type Blog = `/blog/${Kebab}`;

// 8. Hex Color Code
// Strictly type valid hex colors:
// #fff
// #ffffff
// Requirements:
//  • Must start with #
//  • Either 3 or 6 hex characters
type HexChar = "a" | "b" | "c";
type Color = `#${HexChar}`;

// 9. Version Tag System
// Create a type for versions like:
// v1.0.0
// v2.3.4
// Requirements:
//  • Must start with v
//  • Follow semantic versioning pattern



// 10. Dynamic Permission System (Advanced)
// Create a type like:
// user:create
// user:delete
// admin:update
// Requirements:
//  • Entities: user | admin | product
//  • Actions: create | update | delete
// Example:
// type Permission = ???;

// const p1: Permission = 'user:create'; // ✅
// const p2: Permission = 'guest:read'; // ❌
export default function Home() {
  // JSX/TSX starts here
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
      >
        Assignment 012
      </div>
      <div className="text-2xl text-black flex flex-col gap-1"></div>
    </div>
  );
  // JSX/TSX ends here
}
