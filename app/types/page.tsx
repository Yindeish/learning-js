'use client'
import { Montserrat } from "next/font/google";
// import type { Brand, Variable } from "@/types";
import { Brand, Variable } from "@/types";



const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    // Declaring Types (type keyword)

    const variable: Brand = 'value'; // staright line

    // : typeof
    // when we declare a vairable or a constant
    // type Brand: string = 'toyota '


    let score: number = 10;

    const variable2: Variable = {
        count: 1
    }

    const variable3 = {
        count: 5
    }

    const variables: Variable[] = [
        variable2, variable3
    ]



    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                TypeScript Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
