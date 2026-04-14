'use client'
import { Montserrat, } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})

let doc: any = {

}

export default function Home() {

    // Utility Types and they're called like fucntions in Js but with angular braces <>
    // Partial, Pick, Omit, Record
    // !not 100% 

    type Document = {
        extension: string,
        name: string,
        size: number,
        pages: number
    }



    type Author = {
        name: string,
        age: number,
        nationality: string,
    }


    // !Pick<NameoftheTypeToPickFrom, fieldsYouWantoPick>
    const student: Pick<Author, 'name' | 'age'> = {
        name: 'Rehab',
        age: 12
    }

    type Selected = {
        name: string,
        age: number,
    }

    const student2: Selected = {
        name: 'Adam',
        age: 12
    }

    const person: Author = {
        age: 18,
        name: 'Rehab',
        nationality: 'Yemen'
    }

    // const student: Partial<Author> = {
    //     name: 'Rehab'
    // }










    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Utility Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
