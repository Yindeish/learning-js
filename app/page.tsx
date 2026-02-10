'use client'


export default function Home() {

  // Declaration
  const arrays: number[] = [];

  arrays.push(1)

  arrays.push(2.5) //float

  arrays.push(0)
  // 4, 5
  console.log(arrays.push(4, 5))

  // arrays.pop()

  console.log(arrays.pop())

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black]">
      LEARNING JAVASCRIPT/TYPESCRIPT
    </div>
  );
}
