'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})



export default function Home() {
    // DRY
    // Don't repeat yourself

    type Value = `value${number}`;

    type FirstType = {
        one: Value
    }

    type SecondType = {
        two: Value
    }

    type CollectionOfTypes = FirstType & SecondType;

    type ThirdType = FirstType & {
        three: Value
    }

    const collection: CollectionOfTypes = {
        one: 'value1',
        two: 'value2'
    }

    const variable3: ThirdType = {
        one: 'value1',
        three: 'value3'
    }



    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Merging Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
