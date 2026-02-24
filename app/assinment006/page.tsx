'use client'
import { Montserrat } from "next/font/google";
import { users } from "../Rehabcomponent";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    const numbers = [2, 4, 6, 8, 10];

    // 2*2
    // 4 * 2
    // 6 * 2
    // [4, 8, 12, 16, 20]
    const doubledNumbers = numbers.map((number) => number * 2)

    const scores = [45, 78, 32, 90, 55, 50, 51];

    // [78, 90, 55]
    // greater than sign is >
    const scoresGreaterthan50 = scores.filter((score) => score > 50)

    const users = [
        { id: 2, name: "Mary", active: true },
        { id: 1, name: "John", active: true },
        { id: 3, name: "Alex", active: true }
    ];

    // { id: 2, name: "Mary", active: false }
    // if noe is found it will return undefined
    // if it finds more than one user or item that meets the condtion (for example user.active == true) it will return the first user or item

    const inactiveUser = users.find((user) => user.active == true)

    const words = ["apple", "banana", "kiwi"];  // array of string

    // [5, 6, 4]
    const wordsLength = words.map((word) => word.length)

    const ages = [12, 17, 21, 30, 15];

    // [21, 30]

    // && and operator
    // >= greater than or equal to
    const agesGreaterthan18 = ages.filter((age) => age >= 18);


    const products = [
        { name: "Laptop", price: 1000 },
        { name: "Phone", price: 500 },
        { name: "Tablet", price: 700 },
    ];

    // { name: "Laptop", price: 1000 }
    const productofPriceGreaterthan600 = products.find(product => product.price > 600)

    const names = ["john", "mary", "alex"];

    // ["JOHN", "MARY", "ALEX"]

    const capitalizedNames = names.map((name) => name.toUpperCase())


    const numbersArr = [1, 3, 5, 8, 10];

    // [8, 10]

    const evenNumbers = numbersArr.filter((number) => number % 2 == 0)

    console.log(evenNumbers, 'evenNumbers')


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Assignment 006 Corection
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
