'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    // present but not necessary

    type House = {
        rooms: number,
        hasGarrage: boolean,
        hasStairs: boolean,
        windows: number,
        hasGarden?: boolean //optional (?)
    }

    const rehabHouse: House = {
        hasGarrage: true,
        hasStairs: true,
        rooms: 7,
        windows: 20,
        hasGarden: false
    }


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Optional Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
