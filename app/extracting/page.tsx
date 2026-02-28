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

    // const petroleum = {
    //     kerosine: '1',
    //     petrol: '2',
    //     gas: '3',
    //     diesel: '4',
    //     leftOver: '5'
    // }
    // components of the crude oil
    // crude oil

    // extract these values from petroleum
    // const firstComponent = petroleum.diesel;
    // const secondComponent = petroleum.gas;

    // Extract and destructure
    // const diesel = 'firts diesel';

    const petroleum = {
        kerosine: 'kerosine',
        petrol: 'petrol',
        gas: 'gas',
        diesel: 'diesel',
        leftOver: 'leftOver5'
    }

    // extract the diesel varaibale from ptroleum
    // when you extract smth from an object it means you're destructing the object
    // 1. extract by destructuring (by removing)
    const { gas, kerosine,  } = petroleum;
    // Direct extracting (without destructuring)
    const diesel = petroleum.diesel;

    const howManyettersInDiesel = diesel.length;

    console.log(howManyettersInDiesel, 'howManyettersInDiesel')

    // const petroleum = ;



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