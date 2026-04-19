'use client'
import { Montserrat, } from "next/font/google";

const mont = Montserrat({
  weight: ['100', '200', '900'],
  subsets: ['latin']
})

export default function Home() {
  // Utility Types and they're called like fucntions in Js but with angular braces <>
  // Omit, Record


  type Document = {
    extension: string;
    name: string;
    size: number;
    pages: number;
  };

  type Author = {
    name: string;
    age: number;
    nationality: string;
  };

  type User = {
    id: number;
    username: string;
    email: string;
    password: string;
  };

  type UserProfile = Partial<Pick<User, "email" | "username">>;

  type Order = {
    id: number;
    total: number;
    status: string;
    createdAt: Date;
  };
  type OrderUpdate = Partial<Pick<Order, "status">>;

  type Profile = {
    id: number;
    name: string;
    bio: string;
    avatar: string;
  };





  // !Omit -> means remove

  // type Omitted = Omit<Settings, "notifications">;

  const user: Omit<Profile, 'id' | 'avatar'> = {
    // avatar: 'avatra.png',
    bio: 'I love apples',
    name: 'John Doe',
  }

  // ! Omit<Profile, 'id' | 'avatar'>
  // ! { name: string, bio: string }
  // ! Pick<Omit<Profile, 'id' | 'avatar'>, 'name'>
  // ! { name: string }
  // ! Partial<Pick<Omit<Profile, 'id' | 'avatar'>, 'name'>>
  // ! { name?: string }

  const userName: Partial<Omit<Profile, 'id' | 'avatar'>> = { //! bio and name // name
    name: 'John Doe',
    bio: 'I love apples',
  }



  // ! Record - objects -> key-value pairs

  // !Record<key, value>
  // key
  // value


  const alphaNumeric: Record<string, number> = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
  }

  const numeAlhpa: Record<number, string> = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
  }

  const staffs: Record<number, Partial<Omit<Profile, 'id'>>> = {
    1: {
      name: 'John Doe',
      bio: 'I love apples',
      avatar: 'avatar1.png'
    },
    2: {
      name: 'Rehab',
      bio: 'I love banana',
      avatar: 'avatar2.png'
    },
    3: {
      name: 'Adam'
    }
  }

  type Settings = {
    theme: string;
    language: string;
    notifications: boolean;
  };

  //! create  a variable such that its keys (or properties) are strings and its values are settings with the notification key (or property) removed and the rest of the keys (or properties) optional


  const settings: Record<number, Partial<Omit<Settings, "notifications">>> = {
    0: {

    }
  }



  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
      >
        Utility Types
      </div>
      <div className="text-2xl text-black flex flex-col gap-1"></div>
    </div>
  );
  // JSX/TSX ends here
}
