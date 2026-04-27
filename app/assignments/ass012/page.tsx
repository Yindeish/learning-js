'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    // !1. Username Formatter
    type Username = `user_${string}`;

    // !2. Country Code Phone Number

    type PhoneNumber = `+234${number}`;

    // !3 CSS Class Naming (BEM Style)

    type BEM = `${string}__${string}--${string}`;

    //! 4 API Endpoint Builder
    // !Union Type + Strict Type

    type Resource = 'users' | 'products' | 'orders';

    type Endpoint = `/api/${Resource}`;

    const endpoint: Endpoint = '/api/orders';

    // ! 5 File Extension Validator

    type Extension = 'png' | 'jpg' | 'mp4' | 'pdf';

    type Filename = `${string}.${Extension}`;

    const rehabPhoto: Filename = 'rehab.jpg';

    // !6 Environment Variable Format

    type Variable = `${string}_${string}_${string}`;


    // !7 Hex Color Code

    type HexColorCode = `#${string | number}`;
    const black: HexColorCode = '#000'; //black
    const white: HexColorCode = '#fff'; //white


    // ! 7 Version Tag System

    type VersionTagSystem = `v${number}.${number}.${number}`;

    const tag1: VersionTagSystem = 'v1.2.3';
    const tag2: VersionTagSystem = 'v3.244435356567.3';

    // ! 8 Dynamic Permission System (Advanced)

    type Entities = 'user' | 'admin' | 'product';

    type Actions = 'create' | 'update' | 'delete';

    type Permission = `${Entities}:${Actions}`;

    const example1: Permission = 'admin:create';
    const example2: Permission = 'product:update';




    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Assignment 012 corrections
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
