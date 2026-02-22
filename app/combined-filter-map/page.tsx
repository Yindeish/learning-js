'use client'
import { Montserrat } from "next/font/google";
import { users } from "../Rehabcomponent";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Filter And Map Methods Combined
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">

                {/* first filter */}
                {/* display them */}

                {users
                    .filter((user) => user.age < 30)
                    .map((user) => (
                        <div>{user.name}</div>
                    ))}

            </div>

        </div>
    );
    // JSX/TSX ends here
}
