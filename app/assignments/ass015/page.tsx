"use client";
import { findSourceMap } from "module";
import { Montserrat } from "next/font/google";
import { after } from "next/server";

const mont = Montserrat({
  weight: ["100", "200", "900"],
  subsets: ["latin"],
});

// ## 1. Function Type Alias with Object Parameters

// Define the function type

type CreateUserFn = (params: { name: string; age: number }) => string;

// Implement the function

const createUser: CreateUserFn = ({ name, age }) => {
  return `User:${name}, Age: ${age}`;

};

// Call the function with valid arguments

createUser({ name: "rehab", age: 34 });

// ### 2. Function Type with Optional Parameters

// Define a function type CalculateDiscount that:

// * Takes:

//   * price: number
//   * discount?: number (optional)
// * Returns the final price after applying the discount (default discount is 0 if not provided)

// Implement the function.

type CalculateDiscount = (params: {
  price: number;
  discount?: number;
}) => number;
const calcFun: CalculateDiscount = ({ price, discount }) => {
  return price;
};
calcFun({ price });

// Create a function type OperationCallback that:

// * Takes two numbers
// * Returns a number

// Then write a function executeOperation that:

// * Accepts:

//   * two numbers
//   * a callback of type OperationCallback
// * Returns the result of the callback

type OperationCallback1 = (params: { num1: number; num2: number }) => number;
const OperationCallback2: OperationCallback1 = ({ num1, num2 }) => {
  return num1 + num2};
   const executeOperation:OperationCallback1= ({ num1: 14, num1: 10})


//    ### 4. Function Type with Union Return Type
// ### 4. Function Type with Union Return Type

// Define a function type ParseInput that:

// * Accepts a string
// * Returns either:

//   * a number (if the string is numeric)
//   * or null (if it cannot be converted)

// Implement the function with proper type handling.

type ParseInput= (input:)
export default function Home() {
  // JSX/TSX starts here
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
      >
        Assignment 015 corrections
      </div>
      <div className="text-2xl text-black flex flex-col gap-1">
        <p>My info is {userInfo}</p>
      </div>
    </div>
  );
  // JSX/TSX ends here
}
