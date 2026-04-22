'use client'
import { Montserrat, } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})

export default function Home() {

    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div
                className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
            >
                Inheritance

                <div className="bg-red-700 text-white text-2xl">Parent

                    <div className="w-[100px] h-[300px] bg-green-700 text-xl">child</div>
                </div>
            </div>
            <div className="text-2xl text-black flex flex-col gap-1"></div>
        </div>
    );
    // JSX/TSX ends here
}
