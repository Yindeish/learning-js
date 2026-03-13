'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


const page = () => {

    // 1. Construct an array of objects that each of the objects has the fllowing properties:
    // name
    // age
    // married

    const people = [
        {
            name: 'Rehab',
            age: 25,
            married: true
        },
        {
            name: 'Adam',
            age: 22,
            married: false
        },
        {
            name: 'Kamil',
            age: 5,
            married: false
        },
    ]


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Arrays And Objects
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">

                {people
                    .filter((person) => person.age > 20)
                    .map((person) => (
                        <div>{person.name}</div>
                    ))}

            </div>

        </div>
    );
    // JSX/TSX ends here
}

export default page;