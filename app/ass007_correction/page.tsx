'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})

const page = () => {

    const petroleum = {
        kerosine: "kerosine",
        petrol: "petrol",
        gas: "gas",
        diesel: "diesel"
    };

    // extracting values from object are of 2 types // 1 Extracting by Direct or Dot method // 2 Extratcting by destructuring
    const dieselValue = petroleum.diesel;
    // console.log(dieselValue.length, 'dieselValue.length')

    // const { gas, petrol } = petroleum;

    // console.log(petrol.length, 'petrol.length')


    const formik = {
        values: {
            name: "Rehab",
            password: 123456,
            email: "rehab@gmail.com"
        }
    };

    // console.log(formik.values.email, 'formik.values.email');
    // formik.values; // dot method or direct method
    const { name } = formik.values;

    // console.log(name, 'name')

    const formik2 = {
        values: {
            innerObject: {
                innerName: "kjaggd"
            }
        }
    };

    // console.log(formik2.values.innerObject.innerName, 'formik2.values.innerObject.innerName');


    const petroleum2 = {
        kerosine: "kerosine",
        petrol: "petrol",
        gas: "gas"
    };

    const { kerosine, petrol, gas } = petroleum2;

    // console.log(kerosine, 'kerosine')

    const petroleum3 = {
        diesel: "diesel",
        leftOver: "leftOver5"
    };

    const diesel = petroleum3.diesel;

    // console.log(diesel.length, 'diesel.length')


    const user = {
        firstName: "John",
        lastName: "Doe"
    };

    const { firstName, lastName } = user;

    // console.log(firstName + " " + lastName)

    const product = {
        title: "Laptop",
        price: 500
    };

    const price = product.price + 100;

    // console.log(price, 'price')

    const formik3 = {
        values: {
            name: "Rehab",
            email: "rehab@gmail.com"
        }
    };

    const { values } = formik3;

    const { email } = values;

    // console.log(email.length, 'email.length')


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                assignment 007 correction
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}

export default page;