'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";



const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})



export default function Home() {
    // ! 2 ways of declaring function types

    1. //! Using the function type
    2. //! Custom method (User-defined)


    // ! 1. Using the function type

    // : after round braces () means a function returns something
    // traditional function
    function makeJuice(): Function {
        return makeJuice()
    }

    // arrow function
    const makeJuice2: Function = (): Function => {
        return () => { };
    }


    2. //! Custom method (User-defined)

    // !Template literal ``

    // !on hover: makeCall(): void
    function makeCall(person1: string, person2?: string): string {
        return `Calling ${person1} and ${person2}`;
    }
    // !on hover: makeCall2: () => void
    const makeCall2 = (person: string): string => {
        return `Calling ${person}`
    }

    const returnString = (): number => {
        return 1;
    }

    const name2 = 'Rehab';























    // Types of Variables

    // !Global variables
    // !Block (Local) variables //!inside a function, if statement, loop block (e.g map method of array)

    // !Paramater is a variable we use a in a function


    // Arrow functions

    // object
    type DoSmth = () => void;

    const concartenateStrings = (str1: string, str2: string) => {

    }

    concartenateStrings('one', 'two');


    // makes juice
    // any fruit + juice

    function juice(fruit: string) {
        return fruit + 'juice';
        // fruit+juice
    }

    // console.log('apple' + 'juice');


    const name = 'orange';

    // console.log(juice(name)) //! returns name + juice // orange juice // variable as an argument

    juice('apple') // value as an argument
    // argument can be a variable or a value




    // Returning values in functions

    function getZero() {
        return 0;
    }

    // const zero1 = getZero(); // 0

    // console.log(getZero(), 'zero1')


    const zero = 0;

    // console.log(zero, 'zero')

    const sumTwoNumbers = (val1: number, val2: number): number => {
        return val1 + val2;
    }

    console.log(sumTwoNumbers(3, 4));

    const added = sumTwoNumbers(3, 4);

    console.log(added, 'added')

    function addNumbers(val1: number, val2: number): number {
        // val1 + val2
        return val1 + val2;
    }

    console.log(addNumbers(3, 4));

    const sum = addNumbers(3, 4);

    console.log(sum, 'sum')












    // custom types or user-defined types
    // basic types

    // examples of built-in types in Typescript
    // string, number, boolean, void, any, never, unknown, null

    type User = { name: string }

    // const users: Array<User> = [] //type casting

    // const users2: User[] = []

    // [], {}
    // Array
    // Object
    // Function

    // Basically, there 2 ways to decalare a function type

    // ! A good function type will tell you all the infos about the function
    // ! 1. Arguments the function needs (input)
    // ! 2. The type of value the fucntion returns (output)

    // ! 1 Using the Function keyword

    const calculateValue: Function = (value: string) => {

    }





    // ! 1 Custom Type in function

    type ReturnsUppercase = (word: string) => string;

    type CreatesUserId = (fnThatReturnsUppercase: ReturnsUppercase) => `USER-000990-${string}`;

    const returnsUppercase: ReturnsUppercase = (word: string) => {
        return word.toUpperCase();
    }

    const generateUserId: CreatesUserId = (fnThatReturnsUppercase: ReturnsUppercase) => {
        return `USER-000990-${userName}`;
    }

    // USER-000990-REHAB

    const userName = 'Rehab';

    returnsUppercase(userName) //! REHAB

    // generateUserId(returnsUppercase(userName))







    type CalculateValue2 = (value: string) => void;

    const calculateValue2: CalculateValue2 = (value: string) => {

    }

    type SumNumbers = (num1: number, num2: number) => number;

    const sumNumbers: SumNumbers = (val1: number, val2: number) => {
        return val1 + val2;
    }

    const count = 1;

    sumNumbers(count, count)
    sumNumbers(3, 4);

    // !1st phase when you declare the function (parameter) //parameters are variables we pass to a function
    // !2nd phase when you use the function (argument) //arguments are variables or values we pass to a function when we use it

    // parameter
    // argument
    // Higher order functions //! fucntions that take another function or functions as arguments
    [].map(() => { });
    [].filter(() => { });
    [].find(() => { });
    [].find(() => { });



    // callback //! is a function you pass to another function as an argument

    [].find(
        // !callback
        () => { }
    );
    [].find(
        // !callback
        () => { }
    );







    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Function Types
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}