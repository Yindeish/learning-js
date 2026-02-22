'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {
    const persons = [
        {
            name: { first: "Jane", last: "Doe" }, age: 25, city: "Los Angeles"
        },
        {
            name: { first: "Jim", last: "Beam" }, age: 40, city: "Chicago"
        },
        { name: { first: "Jill", last: "Baker" }, age: 35, city: "Houston" },
        { name: { first: "Yahya", last: "Doe" }, age: 28, city: "San Francisco" }
    ]

    // filter -> funnel (remove some items and leave the rest)

    // lets filter persons that their last name is Doe
    // callback function -> baby function


    // const filteredPersons = persons.filter((person) => {
    //     // condition
    //     if (person.name.last === 'Doe') return person;
    //     else return null;//nothing
    // })
    const filteredPersons = persons.filter((person) => {
        // condition
        if (person.age > 30) return person;
        else return null;//nothing
    })

    // the reason is maybe you want to send that thing to a backend or API
    const filteredPersonsString = JSON.stringify(filteredPersons); //  special string ""

    const person = {
        name: { first: "Jane", last: "Doe" }, age: 25, city: "Los Angeles"
    };

    const personString = JSON.stringify(person); // converts the person object to a string // melting ice -> water
    const personVersion2 = JSON.parse(personString) // reverts it back to an object // freezing water -> ice

    console.log(personVersion2, 'personVersion2')

    // {"name":{"first":"Jane","last":"Doe"},"age":25,"city":"Los Angeles"} personString


    // [{"name":{"first":"Jim","last":"Beam"},"age":40,"city":"Chicago"},{"name":{"first":"Jill","last":"Baker"},"age":35,"city":"Houston"}] 



    return (
        <div className="w-screen h-screen bg-white flex items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Persons Array
            </div>


        </div>
    );
}
