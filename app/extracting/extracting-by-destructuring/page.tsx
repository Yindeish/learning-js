'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


const page = () => {

    const formik = {
        values: {
            // column here means equal to =
            name: 'Rehab',
            password: 123456,
            email: 'rehab@gmail.com',
            innerObject: {
                innerName: 'kjaggd'
            }
        },
        errors: {
            name: 'Name is required',
            passsword: 'Password is required',
            email: 'Email is required',
        },
        onChange: () => {
            console.log('changing..')
        },
        // setFeildValue: () => {}
    }

    // const formik1 = formik.values.innerObject.innerName;
    // const formik1 = formik.values.innerObject.innerName;

    const petroleum = {
        kerosine: 'kerosine',
        petrol: 'petrol',
        gas: 'gas',
        diesel: 'diesel',
        leftOver: 'leftOver5'
    }

    // short-cut
    const { petrol, gas } = petroleum;


    const lettersInPetrol = petrol.length;


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Extracting and Destructuring values from an Object
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}

export default page;