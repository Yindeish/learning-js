'use client'
import { Montserrat } from "next/font/google";
import { users } from "../Rehabcomponent";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    // const mappedUsers = users.map((user) => user)

    // Let's sort the users based on their ages (small to big) //ascending order
    // const sortedUsersAscend = users.sort((personBefore, personAfter) => Number(personAfter.age) - Number(personBefore.age))

    // Let's sort the users based on their ages (big to small) //descending order
    // const sortedUsersDescend = users.sort((personBefore, personAfter) => personAfter.age - personBefore.age)

    // sort based on names alpabetically
    const topToBottom = users.sort((a,b) => a.name.localeCompare(b.name))

    console.log(topToBottom, 'topToBottom')


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Sort Method
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">

            </div>

        </div>
    );
    // JSX/TSX ends here
}
