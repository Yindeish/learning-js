'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


// !JSON Placeholder
// https://jsonplaceholder.typicode.com/


export default function Home() {

    type Post = {
        postId: number,
        id: number,
        name: string,
        email: string,
        body: string,
    }

    const posts: Post[] = [ // array of objects
        {
            postId: 20,
            id: 2,
            name: "rehab",
            email: "rehab@gmail",
            body: "hello form here",

        },
        {
            postId: 3,
            id: 20,
            name: "ahmad",
            email: "adham@gmail",
            body: "hi form here",
        }
    ]

    console.log(posts);




    // type Post = {
    //     userId: number,
    //     id: number,
    //     title: string,
    //     body: string,
    // };

    // const posts: Post[] = [
    //     {
    //         userId: 1,
    //         id: 1,
    //         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //     },
    //     {
    //         userId: 1,
    //         id: 2,
    //         title: "qui est esse",
    //         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    //     },
    //     {
    //         userId: 1,
    //         id: 3,
    //         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    //     },
    // ]



    // object
    // type Person = {
    //     name: string;
    //     age: number;
    // }

    // // object // mufrad
    // const person1: Person = {
    //     age: 12,
    //     name: 'Adam'
    // }
    // const person2: Person = {
    //     age: 6,
    //     name: 'Kamil'
    // }
    // const person3: Person = {
    //     age: 25,
    //     name: 'Rehab'
    // }
    // const person4: Person = {
    //     age: 21,
    //     name: 'Adam'
    // }

    // // jamhu of objects
    // const persons: Person[] = [
    //     person1,
    //     person2,
    //     person3,
    //     person4,
    // ]

    // const people: Person[] = [person2, person3];


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Array of Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
