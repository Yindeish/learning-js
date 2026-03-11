'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

    let a = 5;
    let b = a;
    b = 10;
    console.log(a); // 5
    console.log(b); // 10

    let x = 20;
    let y = x;
    x = x + 5;
    console.log(x); // 25
    console.log(y); // 20

    let count = 7;
    function addTwo(value: number) {
        return value + 2;
    }
    let newCount = addTwo(count);
    console.log(count); // 7
    console.log(newCount); // 11

    let num1 = 15;
    let num2 = num1;
    let num3 = num2;
    num2 = 30;
    console.log(num1); // 15
    console.log(num2); // 30
    console.log(num3); // 15

    const person = { name: "Ali" };
    const user = person;
    user.name = "John";
    console.log(person.name); // "John"
    console.log(user.name); // "John"

    const car = { brand: "Toyota" };
    const car2 = car;
    const car3 = car2;
    car3.brand = "Honda";
    console.log(car.brand); // "Honda"
    console.log(car2.brand); // "Honda"
    console.log(car3.brand); // "Honda"

    const obj = { value: 10 };
    function increase(data: { value: number }) {
        data.value = data.value + 5;
    }
    increase(obj);
    console.log(obj.value); // 15

    let number = 8;
    function multiply(val: number) {
        val = val * 2;
        return val;
    }

    multiply(number);
    console.log(number); // 8

    const multipliedValue = multiply(number);
    console.log(multipliedValue); // 16


    const student = { name: "Sara" };
    const anotherStudent = student;
    student.name = "David";
    console.log(anotherStudent.name); // "David"

    const book = { title: "JS Guide" };
    let copy = book;
    copy.title = "Advanced JS";
    console.log(book.title); // "Advanced JS"
    console.log(copy.title); // "Advanced JS"



    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Corrections
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
