'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    // returning values

    let count1 = 35;

    let count2 = 45;

    const increaseby10AndReturn = (value: number) => {
        // return value + 10;
        return 10;
        // value = value = 10;
    }

    let result = increaseby10AndReturn(count1) // result 10

    count1 = result - count1; // -25
    result = count1; // -25

    console.log('result', result) // -25
    console.log('count1', count1) // -25





    // Primitive types (string, number, boolean)

    // let count1 = 10; // define a variable

    // const obj = {
    //     count1: 10 // define a variable
    // }

    // count1 = count1 + 3; // count1 13 // updating count1

    // {:} // means variable definition (define or declare a variable)
    // (:) // means type annotation (menas typeof something)

    // const increaseBy3 = (value: number) => {
    //     // count1 = count1 + 3;
    //     value = value + 3;
    // }

    // increaseBy3(count1); // count1 10

    // let count2 = count1; // count2 13 // count1 13 // updating count2

    // count1 = count2 - 7; // count1 6 // count2 13 // updating count1

    // console.log('count1', count1)
    // console.log('count2', count2) // 13



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
