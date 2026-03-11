'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {
  // ###### Question1 #########

  let score = 50;
  let bonus = 20;

  const addBonus = (points: number) => {
    return points + 5;
  };

  let total = addBonus(score); //total= 55

  score = total - bonus; //score= 55-20= 35
  total = score; //total= 35

  console.log("total", total); //total =35
  console.log("score", score); //score=35

  // ###### Question1 #########

  // ###### Question2 #########

  let price = 80;

  const discount = (amount: number) => {
    amount = amount - 10;
    return amount;
  };

  let finalPrice = discount(price); //finalPrice=70

  price = price + 5; //price=85
  finalPrice = price - finalPrice; //finalPrice=85-70=15

  console.log("price", price); //85
  console.log("finalPrice", finalPrice); //15

  // ###### Question2 #########

  // ###### Question3 #########
  let a = 12;
  let b = 7;

  const modify = (num: number) => {
    return num * 2;
  };

  let result = modify(b); //result=14

  b = result - a; //b= 14-12=2
  a = b + 3; //a= 2+3=5

  console.log("a", a); //5
  console.log("b", b); //2

  // ###### Question3 #########

  // ###### Question4 #########

  let temperature = 30;

  const increaseTemp = (value: number) => {
    return value + 8;
  };

  let newTemp = increaseTemp(temperature); //newTemp=38

  temperature = newTemp - 5; //temperature=38-5=33
  newTemp = temperature + 2; //newTemp=33-+2=35

  console.log("temperature", temperature); //temperature=33
  console.log("newTemp", newTemp); //newTemp=35
  // ###### Question4 #########

  // ###### Question5 #########

  let x = 15;
  let y = 10;

  const changeValue = (num: number) => {
    num = num + 20;
    return num;
  };

  let output = changeValue(x); //output=15+20=35

  x = y + output; //x=10+35=45
  y = x - 5; //y=45-5=40

  console.log("x", x); //45
  console.log("y", y); //40

  // ###### Question5 #########

  // ###### Question6 #########

  let distance = 100;

  const reduceDistance = (value: number) => {
    return value - 25;
  };

  let remaining = reduceDistance(distance); //remaining=100-25=75

  distance = remaining + 10; //distance=75+10=85
  remaining = distance - 30; //remaining=85-30=55

  console.log("distance", distance); //85
  console.log("remaining", remaining); //55

  // ###### Question6 #########

  // ###### Question7 #########

  let first = 9;
  let second = 4;

  const multiply = (num: number) => {
    return num * 3;
  };

  let value = multiply(first); //value=9*3=27

  first = value - second; //first=27-4=23
  second = first + 2; //second=23+2=25

  console.log("first", first); //23
  console.log("second", second); //25

  // ###### Question7 #########

  // ###### Question8 #########

  let balance = 200;

  const withdraw = (amount: number) => {
    return amount - 40;
  };

  let remainingBalance = withdraw(balance); //remainingBalance=200-40=160

  balance = remainingBalance + 20; //balance=160+20=180
  remainingBalance = balance - 50; //remainingBalance=180-50=130

  console.log("balance", balance); //180
  console.log("remainingBalance", remainingBalance); //130

  // ###### Question8 #########

  // ###### Question9 #########

  let num1 = 6;
  let num2 = 14;

  const calculate = (value: number) => {
    return value + 6;
  };

  let result2 = calculate(num2); //result2=14+6=20

  num2 = result2 - num1; //num2= 20-6=14
  num1 = num2 + 5; //num1=14+5=19

  console.log("num1", num1); //19
  console.log("num2", num2); //14

  // ###### Question9 #########

  // ###### Question10 #########

  let age = 18;

  const growOlder = (years: number) => {
    return years + 2;
  };

  let newAge = growOlder(age); //newAge=18+2=20

  age = newAge + 1; //age=20+1=21
  newAge = age - 3; //21-3=1!

  console.log("age", age); //21
  console.log("newAge", newAge); //18

  // ###### Question10 #########

  // JSX/TSX starts here
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
      >
        Primitive VS Reference
      </div>
      <div className="text-2xl text-black flex flex-col gap-1"></div>
    </div>
  );
  // JSX/TSX ends here
}
