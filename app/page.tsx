'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {
    // Declaring a function

    //  2 ways of declaring a function


    function doSmth() {
        console.log('do smth')
    }

    // store that can store anything
    const anotherFunction = () => {
        console.log('another smth')
    }

    // Calling the function
    doSmth();
    anotherFunction()

    // object in javacscript is like a human being
    // character or property and
    // action or behavior
    const person = {
        // define a function in the object
        name: 'Rehab',
        age: 26,
        married: true,
        speak: () => {
            console.log('speaking')
        },
        gotoWork: () => {
            console.log('going to work..')
        }
    }

    person.speak();
    person.gotoWork()


    // Ways of knowing a function
    // Color (Yellow)
    // 

    // () {

    // }

    // () => {

    // }

    // () => 




    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Functions
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
