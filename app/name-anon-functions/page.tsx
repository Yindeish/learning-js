'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {

function namedFunction() {
  console.log(namedFunction, "this is a named fonction");
}
namedFunction();

const arrowFunction = () => {
  return "this is an arrow function";
};
arrowFunction();

function familyName(lastname: string) {
  console.log(" my family name is " + lastname);
}
familyName("alzarqa");

const childrenFunction = () => {};

childrenFunction();

const anonymousFunction = function () {
  console.log(anonymousFunction, "il is AnonymousFunction");
};
anonymousFunction();
// renaming object property
const user = {
  name: "rehab",
  email: "rehab@gmail",
  speak: () => {
    console.log("this is action finction");
  },
};

user.speak();
const { name, email } = user;
console.log(name, email);

const { name: userName, email: userEmail } = user;
console.log(userName, userEmail);

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023,
};

const { brand: lisix, model: sozoki, year: newYear } = car;
console.log(lisix, sozoki, newYear);

const person = {
  name: "Rehab",
  country: "Yemen",
};

const { name: sara, country: france, age = 20 } = person;

console.log(sara, france, 20);
    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Named and Anonymous Functions
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}
