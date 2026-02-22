'use client'
import { Montserrat } from "next/font/google";
import { users } from "../Rehabcomponent";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    const numbers = [1, 2, 3, 4, 5];

    // <p>1</p>
    // <p>2</p>
    // <p>3</p>
    // <p>4</p>
    // <p>5</p>


    const updatedNumbers = numbers.map((n, index) => {
        return '<p>' + n + '</p>'; // this is hardcoding // not dynamic
    })
    // console.log(updatedNumbers, 'updatedNunbers')

    const prices = [100, 200, 300];

    // percent is 100
    // 10 percent is 10/100
    // 10/100 is 0.1
    // 10 percent of the price is 0.1 * price -> 0.1 * p
    // price is p
    // add 10% to the prices
    // p + (0.1 * p)
    // 1p + 0.1p = 1 + 0.1 = 1.1p
    // rehab + rehab = 2rehab


    const updatedPrice = prices.map((p) => {
        // return p + (0.1 * p);
        return 1.1 * p;
    })

    // console.log(updatedPrice, 'updatedPrice')

    const names = ["john", "mary", "alex"];
    // const names = ["Jjohn", "Mmary", "Aalex"];
    // const names = ["John", "Mary", "Alex"];

    // ''
    // ""
    // Template Literals. ``

    const updatedNames = names.map((name) => {
        // return name.charAt(0).toUpperCase() + name.slice(1);
        // return `${1+1}${20*20}`;
        return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    })

    console.log(users, 'users')


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Map Method
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">

                {/* Dynamic */}
                {users.map((user) => {
                    // dynamic output with {}

                    // Name: Age: 
                    // return <div>{'Name: '+user.name+' Age: '+user.age+'lives in '+user.city}</div>;
                    return <div>{`Name: ${user.name} with the age of ${user.age} lives in ${user.city}`}</div>;
                })}
                {/* Dynamic */}
                

            </div>

        </div>
    );
    // JSX/TSX ends here
}
