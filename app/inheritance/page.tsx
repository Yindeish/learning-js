'use client'
import { Montserrat, } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})

// ! Concepts (Topics) in OOP

// ! Abstraction
// ! Encryption
// ! Inheritance
// ! Polymorphism


export default function Home() {

    // type Parent = {
    //     hasCar: boolean,
    //     hasHouses: boolean,
    //     wives: number,
    //     children: number,
    //     name: string
    // }

    // type Child = {

    // }

    // ! DRY - Don't Repeat Yourself

    interface Parent {
        hasCar: boolean,
        hasHouses: boolean,
        wives: number,
        children: number,
        name: string
    }

    const joe: Parent = {
        children: 5,
        hasCar: true,
        hasHouses: true,
        name: 'joe',
        wives: 4
    }

    interface Child extends Parent {

    }

    const mosh: Child = {
        children: 2,
        hasCar: true,
        hasHouses: true,
        name: 'Mosh',
        wives: 1
    }



    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div
                className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
            >
                Inheritance

                <div className="bg-red-700 text-white text-2xl">Parent

                    <div className="w-[100px] h-[300px] bg-green-700 text-xl">child</div>
                </div>
            </div>
            <div className="text-2xl text-black flex flex-col gap-1"></div>
        </div>
    );
    // JSX/TSX ends here
}
