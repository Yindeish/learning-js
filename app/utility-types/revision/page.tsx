'use client'
import { Montserrat, } from "next/font/google";

const mont = Montserrat({
  weight: ['100', '200', '900'],
  subsets: ['latin']
})

export default function Home() {
  // Utility Types and they're called like fucntions in Js but with angular braces <>
  // Partial, Pick, Omit, Record



  type Product = {
    id: number;
    name: string;
    price: number;
  };

  type Prod = Record<string, string | number>

  type PartialProduct = Partial<Product>;
  type OptionalProduct = {
    id?: number;
    name?: string;
    price?: number;
  };

  // ! Pick<TypesFromWhichYouWantToPick, fieldsYouWantoPick>

  type SelectedProductAttr = Pick<Product, "id" | "name">

  type SemiProduct = {
    id: number;
    name: string;
  }

  type OmittedProduct = {
    name: string;
    price: number;
  }

  type Omited = Omit<Product, "id">;

  type OmitedOptional = Partial<Omited>;

  const omittedProduct: OmitedOptional = {

  }

  type User = {
    id: number;
    username: string;
    email: string;
    password: string;
  };

  const numbers: Record<number, number> = {
    0: 0,
    1: 1,
    2: 2
  }

  const letters: Record<string, string> = {
    a: "a",
    b: "b",
    c: "c"
  }

  type NewUser = Record<string, number | string>;

  type Order = {
    id: number;
    total: number;
    status: string;
    createdAt: Date;
  };

  type Profile = {
    id: number;
    name: string;
    bio: string;
    avatar: string;
  };


  type Settings = {
    theme: string;
    language: string;
    notifications: boolean;
  };

  type UpdateSettings = Partial<Pick<Settings, "theme" | "language">>;
  // JSX/TSX starts here
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
