'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {
    const variable = 'value';

    // key-value pairs
    // object is like a human being
    // name -> details
    // hair (black or green etc)
    // speak -> action

    const user = {
        // we can declare (define) variabes inside this object
        // variable declaration
        name: 'Rehab', // string
        age: 20, // number
        graduated: true, // boolean,
        speak: () => {
            console.log('speaking..')
        }
    }

    console.log(user, 'user')


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Objects Declaration
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
