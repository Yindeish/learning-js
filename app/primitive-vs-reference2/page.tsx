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
    // Non Returning Functions

    // const counter1 = {
    //     value: 30
    // }

    // const counter2 = counter1; // counter1.value 30 counter2.value 30

    // const updateObjectBy5 = (counter: counter) => {
    //     counter.value = counter.value + 5;
    // }

    // updateObjectBy5(counter1) // counter1.value 35 counter2.value 35

    // updateObjectBy5(counter2) // counter1.value 40 counter.value 40

    // console.log('counter1', counter1) // counter1.value 40
    // console.log('counter2', counter2) // counter1.value 40



    // Returning Function

    type Counter = {
        value: number,
        stage: number
    }

    // It's a bad practice to change the whole object
    // However cha ge one or two fields is a grood choice
    const counter1: Counter = {
        value: 30,
        stage: 10
    }


    // {:} declare a variable in an object
    // (:) use it as type of a variable

    const increaseBy10 = (counter: Counter) => {
        // return counter.value + 10;
        // return 10;
        return counter.value;
    }

    counter1.value = increaseBy10(counter1) // counter1.value  = 30
    counter1.stage = increaseBy10(counter1) //  counter1.stage = 30 

    console.log('counter1.value', counter1.value) // counter1.value 30
    console.log('counter1.stage', counter1.stage) // counter1.stage 30


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
