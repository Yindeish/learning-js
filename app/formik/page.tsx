'use client'
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


const page = () => {

    // const doSmth = (paramter) => { // paramter is what you put in a function when it is created
    // column here meeans type of
    const doSmth = (name: string) => { // paramter is what you put in a function when it is created
        console.log(`${name} is going`)
    }

    // doSmth(argument) // argument is what you put in a function when it is called
    // doSmth('Rehab') 
    // doSmth('Adam') 
    // doSmth('Kamil') 

    // const users = ['Rehab', 'Adam', 'Kamil'];

    // users.forEach((user) => doSmth(user))

     

    // values
    // values has children
    // values has variables including // name, password, email
    // erorrs
    // errors has children
    // errors has variables including // name, password, email

    // onChange
    // onBlur
    // setFeildValue

    const formik = {
        values: {
            // column here means equal to =
            name: 'Rehab',
            password: 123456,
            email: 'rehab@gmail.com'
        },
        errors: {
            name: 'Name is required',
            passsword: 'Password is required',
            email: 'Email is required',
        },
        onChange: () => { 
            console.log('changing..'+formik.errors.name)
        },
        // setFeildValue: () => {}
    }

    console.log(formik.errors.email, 'formik.errors.email')
    // formik.onChange()


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Builing Formik
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}

export default page;