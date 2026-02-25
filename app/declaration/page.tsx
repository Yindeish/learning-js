'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})

// formik

const page = () => {

    // variable declaration
    const variable = 'value'; // string
    const variable2 = 1; // number

    const run = () => {

    }

    // declaration (definition) of objects

    // key-value pairs
    // on the left we have keys
    // on the right values

    // OOP (Object Oriented Programming) 2 attributes (properties) and methods
    // is the type of programming that focuses on or treats applications as object
    // character (informations) like name, age, hair color, height
    // behaviors (actions) like speak, move, run. got to sch

    const person = {
        // in object variable declaration
        // key: value
        variable: 'value',
        variable2: 1,
        name: 'Rehab',
        age: 20,
        isMarried: true,
        children: ['Adam', 'Kamil'],
        say: () => {
            console.log(`${person.name} is ${person.name.length} letters word`)
        },
        speak: () => {
            // console.log('speaking..')
            // console.log(`${person.name} is speaking..`)
            console.log(`${person.name} is married and has ${person.children.length} children`)
        }
    }

    // console.log(person.age, 'person.age')
    person.say()


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

export default page;