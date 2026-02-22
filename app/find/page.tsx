'use client'
import { Montserrat } from "next/font/google";
import { users } from "../Rehabcomponent";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    const adult = users.find((user) => user.age == 30)


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Find Method
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">

                {/* Null safety or normalization */}
                <div>{adult?.name || 'Not found!'}</div>
            </div>

        </div>
    );
    // JSX/TSX ends here
}
