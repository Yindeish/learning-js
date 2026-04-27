"use client";
import { strict } from "assert";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: ["100", "200", "900"],
  subsets: ["latin"],
});

export default function Page() {


  //Question 1
  type User = {
    id: string;
    name: string;
    email: string;
  };

  interface Admin extends User {
    isAdmin: boolean;
  }

    //Question 2

    type Product = {
      status: "available" | "out of stock";
    }


    // Question 3

  type Student = {
    name: string;
    grade: number;
  };
  type Teacher = {
    name: string;
    subject: string;
  };

  type People = Student | Teacher;

  // Question 4

  type Role = `${"admin" | "user" | "guest"}`;


  // Question 5

  type Address = {
    street: string;
    city: string;
  };

  type Contact = {
    email: string;
    phone: number;
  };


  // Question 6
  type UserGroup = {
    id: string;
    name: string;
  };

  // Question 7

  type Products = {
    id: string;
    name: string;
    price: number;
  };

  // Question  8
  type Blog = {
    title: string;
    description: string;
  };

  // Question  9

  type UserProfil = {
    name: string;
    email: string;
    age: number;
  };

  type UserUpDate = {
    user1: UserProfil;
    user2: UserProfil;
  };


  interface LogInfo: UserLog (email: string, password: string){
    return;

  }
//need help

  
  // Question  11

  type User3 = {
    id: string;
    name: string;
    email: string;
  }

  type UserPartial  = Partial<User3>;



    // Question  12

    type User4 = {
      id: string;
      name: string;
      email: string;
    }
  
    type UserPartial2  = Omit<User4, "id">;
    const userPartial2: UserPartial2 = {
      name: "rehab",
      email: "rehab@gmail"
      
    }
  
      // Question  13

      type User5 = {
        id: string;
        name: string;
        email: string;
        password: string;
      }
    
      type UserPartial3  = Omit<User4, "password">;
      const userPartial3: UserPartial3 = {
        id: "123",
        name: "rehab",
        email: "rehab@",
        
      }
        // Question  14

        type humain = {
          "humain1":{
            id: string;
            name: string;
            email: string;
            password: string;
  
          }
          humain2:{
            id: string;
            name: string;
            email: string;
            password: string;
  
          }

        }
  
        type humain2 = {
          id: string;
          name: string;
          email: string;
          password: string;
          personeInfo:humain[];
        }

        // Question  15
         const user6: unknown = "rehab";

         const user6String: string = user6 as string;

  // JSX/TSX starts here
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-linear-to-r from-[green] to-[black] ${mont.className}`}
      >
        assignement017
      </div>
    </div>
  );
  // JSX/TSX ends here
}
