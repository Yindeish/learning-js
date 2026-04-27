'use client'
import { Montserrat } from "next/font/google";
import type { Value } from "../merging-types/page";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {


    // Grouping - collecting related items
    //  Common with collections


    type Nationality = 'spain' | 'yemen' | 'paris' | 'nigeria';

    type Commons = {
        name: string,
        brand: string,
        years: number,
        nationality: Nationality,
    }


    type Student = {
        level: number,
        hasUniform: boolean
    }

    type Teacher = {
        teachingLevel: number,
        cars: number
    }
    // & |
    // && ||

    // commons + student properties (props)
    const student1: (Commons & Student) = {
        brand: 'Rehab star',
        hasUniform: true,
        level: 300,
        name: 'rehab',
        nationality: 'spain',
        years: 25
    }

    const teacher1: (Commons & Teacher) = {
        brand: 'Techex',
        cars: 2,
        name: 'Ahmad',
        nationality: 'paris',
        teachingLevel: 800,
        years: 40
    }

    const teachers: (Commons & Teacher)[] = [
        teacher1,
        teacher1,
        teacher1,
        teacher1,
    ]






















    // type FirstType = {
    //     one: Value
    // }
    type FirstType = { one: Value }

    // type SecondType = {
    //     two: Value
    // }
    type SecondType = { two: Value }

    // FirstType + SecondType
    // {} + {} = {}
    // { one: Value } + { two: Value } = {one: Value, two: Value}

    // 3+5*2=3+10 =13
    // (3+5)*2 = 8*2 =16

    // Values and Types
    // We use Types when we declare variables
    // We use Values during assignment


    type ThirdType = {
        three: string
    }

    // collection (first and second)

    // () - brackets for grouping

    // FirstType and the Second Type 
    const letters: (FirstType & ThirdType)[] = [
        {
            one: 'value1',
            three: 'three'
        }
    ];

    // Array of single items

    const numbers: number[] = [1, 2, 4, 5, 42, 2, 12]
    const strings: string[] = ['1', '2', '4']
    const booleans: boolean[] = [true, false, false, true]

    // one person
    type Person = {
        name: string,
        age: number,
        mature: boolean,
        height: number
    }

    // Array of objects

    const people: Person[] = [
        {
            age: 25,
            height: 17,
            mature: true,
            name: 'Rehab'
        },
        {
            age: 21,
            height: 20,
            mature: false,
            name: 'Adam'
        },
    ]
    // in other statements, Person[] means many people
    // person + person + ...

    // Array of arrays (collection of collections)


    // const collection: (FirstType)[] = [
    //     {
    //         one: 'value1'
    //     }
    // ];


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Grouping Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
