'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {
    // Global variables
    // Block-scope variables

    // Primitive or Direct Types
    // string
    // number
    // boolean
    // Reference Types
    // object
    // arrays
    // functions
    // class


    // const country = 'Yemen';
    let count = 10;

    count = 11;

    let count2 = count;

    let count3 = count;

    function increadeBy1(value: number) {
        // console.log('value increased by one', value + 1)
        return value + 1;
    }

    const increasedValue = increadeBy1(count);
    const increasedValue2 = increadeBy1(count2);
    const increasedValue3 = increadeBy1(count3);
    // const increasedValue3 = increadeBy1(11);

    count3 = increasedValue3;

    console.log('count3', count3)
    // console.log('increasedValue', increasedValue)
    // console.log('increasedValue2', increasedValue2)
    // console.log('increasedValue3', increasedValue3)

    // count = 11;

    // console.log('count', count)
    // console.log('count2', count2)
    // console.log('count3', count3)

    const person = {
        name: 'Bob'
    }

    // Reassingment or declaring
    const human = person;

    const human2 = person;

    person.name = 'Sameh';
    human2.name = 'Jamel'

    // console.log('human', human)
    // console.log('person', person)
    // console.log('human2', human2)





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
