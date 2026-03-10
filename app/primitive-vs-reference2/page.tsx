'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


// Basic types
// string
// number
// boolean
// Function
// () => {}
// Array
// []
// object
// {}
// any
// never
// unknown

// Custom types or User-defined type

// using the type keyboard

// const variableName = 'value'
type typeName = string;

// type myType = boolean;

// using the interface keyword

// const car = {
//     name: 'BMW',
//     expired: false
// }

type carType = {
    name: string
    expired: boolean,
    model: number
}

// interface carType 

// interface objecType {
//     value: number,
//     name: string,
//     isMarried: boolean,
//     speak: Function,
//     children: []
// }


// DO IT HERE
type counter = {
    value: number
}
// DO IT HERE


export default function Home() {

    const name = 'Rehab'

    const counter1 = {
        value: 30
    }

    const arrays = []


    const updateObjectBy5 = (value: counter) => {

    }

    const car = {
        expired: true,
        model: 2019,
        name: 'BMW'
    }

    updateObjectBy5(counter1)





    // const counter1 = {
    //     value: 30
    // }

    // counter1.value = 40;


    // const counter2 = counter1; // 40
    // const counter3 = counter2; // 40

    // counter3.value = 50;





    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Primitive VS Reference 2
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
