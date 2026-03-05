'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {
    // Global variables
    // Block-scope variables

    // Variables can change
    // Constants can't change

    // Declaration
    // Or Assignment
    const name = 'Person';

    let sch = 'Harvaard';

    sch = 'Oxford'

    let countValue = 0;

    countValue = 3;

    // var place = 'Sudan';

    // place = 'Paris'



    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-linear-to-r from-[green] to-[black] ${mont.className}`}>
                Variables Declaration
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
