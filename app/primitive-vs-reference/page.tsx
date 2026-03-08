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
    }

    let total = addBonus(score);

    score = total - bonus;
    total = score;

    console.log("total", total);
    console.log("score", score);

    // ###### Question1 #########


    // ###### Question2 #########

    let price = 80;

    const discount = (amount: number) => {
        amount = amount - 10;
        return amount;
    }

    let finalPrice = discount(price);

    price = price + 5;
    finalPrice = price - finalPrice;

    console.log("price", price);
    console.log("finalPrice", finalPrice);

    // ###### Question2 #########


    // ###### Question3 #########
    let a = 12;
    let b = 7;

    const modify = (num: number) => {
        return num * 2;
    }

    let result = modify(b);

    b = result - a;
    a = b + 3;

    console.log("a", a);
    console.log("b", b);

    // ###### Question3 #########


    // ###### Question4 #########

    let temperature = 30;

    const increaseTemp = (value: number) => {
        return value + 8;
    }

    let newTemp = increaseTemp(temperature);

    temperature = newTemp - 5;
    newTemp = temperature + 2;

    console.log("temperature", temperature);
    console.log("newTemp", newTemp);
    // ###### Question4 #########


    // ###### Question5 #########

    let x = 15;
    let y = 10;

    const changeValue = (num: number) => {
        num = num + 20;
        return num;
    }

    let output = changeValue(x);

    x = y + output;
    y = x - 5;

    console.log("x", x);
    console.log("y", y);

    // ###### Question5 #########


    // ###### Question6 #########

    let distance = 100;

    const reduceDistance = (value: number) => {
        return value - 25;
    }

    let remaining = reduceDistance(distance);

    distance = remaining + 10;
    remaining = distance - 30;

    console.log("distance", distance);
    console.log("remaining", remaining);

    // ###### Question6 #########


    // ###### Question7 #########

    let first = 9;
    let second = 4;

    const multiply = (num: number) => {
        return num * 3;
    }

    let value = multiply(first);

    first = value - second;
    second = first + 2;

    console.log("first", first);
    console.log("second", second);

    // ###### Question7 #########


    // ###### Question8 #########

    let balance = 200;

    const withdraw = (amount: number) => {
        return amount - 40;
    }

    let remainingBalance = withdraw(balance);

    balance = remainingBalance + 20;
    remainingBalance = balance - 50;

    console.log("balance", balance);
    console.log("remainingBalance", remainingBalance);

    // ###### Question8 #########


    // ###### Question9 #########

    let num1 = 6;
    let num2 = 14;

    const calculate = (value: number) => {
        return value + 6;
    }

    let result2 = calculate(num2);

    num2 = result2 - num1;
    num1 = num2 + 5;

    console.log("num1", num1);
    console.log("num2", num2);

    // ###### Question9 #########


    // ###### Question10 #########

    let age = 18;

    const growOlder = (years: number) => {
        return years + 2;
    }

    let newAge = growOlder(age);

    age = newAge + 1;
    newAge = age - 3;

    console.log("age", age);
    console.log("newAge", newAge);

    // ###### Question10 #########


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Primitive VS Reference
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
