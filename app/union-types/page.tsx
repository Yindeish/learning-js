'use client'
import { Montserrat } from "next/font/google";



const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {
  // Union types
  //  OR
  // first or second or third

    // |
    // first | second | third

  type Light = "on" | "off";

  type Mode = "light" | "dark";

  type Life = "dead" | "living";

  type Mood = "happy" | "sad";

    type Bulb = {
        light: Light
    }

  type Person = {
    mood: Mood;
    life: Life;
    bulb: Bulb;
  };

    const person: Person = {
        mood: 'happy',
        life: 'living',
        bulb: {

        }
    }




  // JSX/TSX starts here
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
      >
        Union Types
      </div>
      <div className="text-2xl text-black flex flex-col gap-1"></div>
    </div>
  );
  // JSX/TSX ends here
}