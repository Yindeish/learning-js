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
            email: 'rehab@gmail.com'
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
    

    const petroleum = {
        kerosine: 'kerosine',
        petrol: 'petrol',
        gas: 'gas',
        diesel: 'diesel',
        leftOver: 'leftOver5'
    }


    const kerosine = petroleum.kerosine;
    const petrol = petroleum.petrol;
    const gas = petroleum.gas;

    console.log(gas.length, 'how many letters in the word petrol')


    // JSX/TSX starts here
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
                Extracting Directly
            </div>
            <div className="text-2xl text-black flex flex-col gap-1">


            </div>

        </div>
    );
    // JSX/TSX ends here
}

export default page;