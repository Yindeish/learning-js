'use client'
import { Montserrat } from "next/font/google";



const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    // User-defined and strict
    // They're mostly defined using template lieterals (ES6+ Js)

    // firstName-lastName
    type FirstName = string;
    type LastName = string;

    // 
    type NameConvention = `${FirstName}-${LastName}`;
    type NameConvention2 = `${string},${string}`;


    // const fullName: string = '';

    type Url = `https://${string}`;

    const url: Url = 'https://';

    type Email = `${string}@gmail.com`; // strict types

    const name: string = '';

    const gmail = 'adeshinaadam0' + '@gmail.com';

    const userEmail: Email = 'adewsqbbcdbkj@gmail.com';

    // iphone6
    // iphone7
    // iphone8
    // iphone9
    // iphone10
    type Iphone = `iphone${number}`;

    type PutBool = `${boolean | 'me' | 'you'}`;

    const puttingBool: PutBool = 'me';

    const newIphoneVersion: Iphone = `iphone${12}`;

    type GenType = `GEN${boolean}`;

    const gen1: GenType = 'GENfalse'

    type Skills = `${string},${string},${string}`;

    const userSkills: Skills = 'reactjs,html,css';






    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Strict Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">

            </div>

        </div>
    );
    // JSX/TSX ends here
}
