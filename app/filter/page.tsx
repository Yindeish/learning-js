'use client'
import { Montserrat } from "next/font/google";
import { users } from "../Rehabcomponent";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    // const marriedUsers = users.filter((user) => {
    //     if(user.married == true) return user;
    //     else return null;
    // })

    // filter user where user that is married is true
    // const marriedUsers = users.filter((user) => user.married === true)
    const marriedUsers = users.map((user) => user.married === true)

    console.log(marriedUsers, 'marriedUsers')

    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Filter Method
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">




            </div>

        </div>
    );
    // JSX/TSX ends here
}
