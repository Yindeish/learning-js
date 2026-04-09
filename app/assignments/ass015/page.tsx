
"use client";
import { findSourceMap } from "module";
import { Montserrat } from "next/font/google";

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

// type CalculateDiscount = (params: {
//   price: number;
//   discount?: number;
// }) => number;


// const calcFun: CalculateDiscount = ({ price, discount }) => {
//   return price;
// };
// calcFun({ price });


//! 2
type CalculateDiscount = (price: number, discount?: number) => number;

// default discount is 0 if not provided
// default parameter and it works with optional type
const calculateDiscount: CalculateDiscount = (price: number, discount?: number = 0) => {
  // calculate discount
  // 10% of $100 -> (10/100) * 100 = 0.1 * 100 = $10

  // 10% means 0.1

  // 10% discount of $100 = 100 -  (0.1*100) = 100 - 10 = $90
  // 200 - (5*2)  = 200 - 10 = 190

  // ! price = 200 discount = 20
  // !discount 4 cust 200 - (20% * 200) = 200 - (0.2 * 200)
  // ! price - (discount/100 * price)

  return price - (discount / 100 * price);
}

// const val = calculateDiscount(200, 10);
// console.log(calculateDiscount(200, 20));
// console.log(val);
// console.log(calculateDiscount(30));

// function selectGender(gender?: 'male' | 'female' = 'male') {

// }

// selectGender();

//200 - (5*2)  = 200 - 10 = 190

// customers
calculateDiscount(200, 10) // $180
calculateDiscount(200, 5) // $190
calculateDiscount(200, 0) // $200

//! 2

// !3
// Create a function type OperationCallback that:
// * Takes two numbers
// * Returns a number

type OperationCallback = (num1: number, num2: number) => number;

const colectOfNu: OperationCallback = (num1, num2) => {
  return (num1 + num2);

}
colectOfNu(50 + 20 + 20, 1778687576); //100
colectOfNu(70, 30); //30
// !3

// !4
type ParseInput = (val: string) => number | null;


const parseInput: ParseInput = (val) => {
  if (typeof Math.abs(Number(val)) === 'number') return Number(val);
  else return null;
}

console.log(parseInput('rehab'));
console.log(parseInput('9')) //numeric
// !4

// !5
// ## 5. Function Type Inside an Object Type

// Create a type MathOperations that includes:

// * add: function that takes two numbers and returns a number
// * subtract: same pattern
// * multiply: same pattern

// Then create an object that implements this type.

type CallBackFn = (num1: number, num2: number) => number;


type MathOperations = (add: CallBackFn, subtract: CallBackFn, multiply: CallBackFn) => {
  add: number,
  subtract: number,
  multiply: number
};

const add: CallBackFn = (num1, num2) => {
  return num1 + num2;
}

const subtract: CallBackFn = (num1, num2) => {
  return num1 - num2;
}

const multiply: CallBackFn = (num1, num2) => {
  return num1 * num2;
}


const getmath: MathOperations = (add, subtract, multiply) => {

  return {
    add: add(2, 3),
    subtract: subtract(3, 4),
    multiply: multiply(2, 5),
  }
}


// !getmath is an higher order function because it takes some functions as arguments
// !add, subtract and multpily are callback functions
console.log(getmath(add, subtract, multiply))


// !5


// Create a function type OperationCallback that:

// * Takes two numbers
// * Returns a number

// Then write a function executeOperation that:

// * Accepts:

//   * two numbers
//   * a callback of type OperationCallback
// * Returns the result of the callback

type OperationCallback1 = (params: { num1: number; num2: number }) => number;
// const OperationCallback2: OperationCallback1 = ({ num1, num2 }) => {
//   return num1 + num2};
//    const executeOperation:OperationCallback1= ({ num1: 14, num1: 10})


//    ### 4. Function Type with Union Return Type
// ### 4. Function Type with Union Return Type

// Define a function type ParseInput that:

// * Accepts a string
// * Returns either:

//   * a number (if the string is numeric)
//   * or null (if it cannot be converted)

// Implement the function with proper type handling.

// type ParseInput= (input:)



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
        {/* <p>My info is {userInfo}</p> */}
      </div>
    </div>
  );
  // JSX/TSX ends here
}