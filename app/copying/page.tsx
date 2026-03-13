'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})

const page = () => {

    const petroleum = {
        kerosine: "kerosine",
        petrol: "petrol",
        gas: "gas",
        diesel: "diesel",
    };

    const gases = {
        methane: 'methane',
    }

    const oil = {
        ...petroleum,
        ...gases,
        methane: 'latest value of methane',
        kerosine: "kerosine kerosine", //override the pervious value of kerosine property
        ethyne: 'ethyne',
    };


    // Spread operator // ...

    console.log(oil, 'oil')


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Copying Objects
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}

export default page;