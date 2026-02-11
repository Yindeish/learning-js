'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: ['100', '200', '900'],
  subsets: ['latin']
})


export default function Home() {

  // Declaration
  // const arrays: number[] = [];

  // arrays.push(1)

  // arrays.push(2.5) //float

  // arrays.push(0)
  // // 4, 5
  // console.log(arrays.push(4, 5))

  // // arrays.pop()

  // console.log(arrays.pop())

  // const arrays: boolean[] = [true, false, false, true];

  // for loop
  // for (declaration and start; condition, what to do after result like increase or decrease for example)
  // const arrays = [10, 20, 30, 40, 50, 60];

  // for (let index = 0; index < 2; index += 1) {
  //   const currentItem = arrays[index];
  //   console.log(currentItem, 'currentItem')
  // }

  // for (let number of arrays) {
  //   console.log(number, 'number')
  // }

  // Parent functions
  // baby functions
  const arrays = [10, 20, 30, 40, 50, 60];

  arrays.forEach((number, index) => {
    console.log(number, index, 'number, index')
  })


  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <div className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}>
        LEARNING JAVASCRIPT/TYPESCRIPT
      </div>
    </div>
  );
}
