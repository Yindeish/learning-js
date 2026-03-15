'use client'
import { Montserrat } from "next/font/google";



const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    // Union types
    //  OR
    // first or second or third

    // | +
    // first | second | third

    type Light = 'on' | 'off';

    type Mode = 'light' | 'dark';

    type Life = 'dead' | 'living'

    type Mood = 'happy' | 'sad';

    type Bulb = {
        light: Light,
        mode: Mode
    }

    type Person = {
        mood: Mood,
        life: Life,
        bulb: Bulb
    }

    // const person: Person = {
    //     mood: 'happy',
    //     life: 'living',
    //     bulb: {
    //         light: 'off',
    //         mode: 'light'
    //     }
    // }


    type Pupil = { //primary sch students
        busSeats: number,
        numberOfclassrooms: number //2
    }


    type UnderGraduate = {
        carSeats: number,
        numberOfAudithorium: number //2
    }


    type Student = {
        name: string
        age: number
        studentShipType: Pupil | UnderGraduate
    }

    const rehab: Student = {
        age: 25,
        name: 'Rehab',
        studentShipType: {
            busSeats: 4,
            numberOfclassrooms: 9
        }
    }




    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Union Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">

            </div>

        </div>
    );
    // JSX/TSX ends here
}
