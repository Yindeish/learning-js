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
