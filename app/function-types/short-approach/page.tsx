'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {


    const sumNumbers = (num1: number, num2: number): number => {
        return num1 + num2;
    }

    // const concartenateStrings = (str1: string, str2: string):string => {}

    const concartenateStrings = (str1: string, str2: string): string => {
        return `${str1} ${str2}`;
    }

    console.log(concartenateStrings('Rehab', 'Alzarq'));


    // create a fucntion that returns somethng like this 'USER1', 'USER2', etc





    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Functiont Types (Short cut approach)
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
