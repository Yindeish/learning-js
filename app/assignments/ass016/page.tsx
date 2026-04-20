"use client";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: ["100", "200", "900"],
  subsets: ["latin"],
});

export default function Page() {
  //Question 1
  type Users = {
    id: number;
    name: string;
    email: string;
  };
  type UserInfo = Partial<Pick<Users, "email" | "name">>;
  const userInfo1: UserInfo = {
    name: "rehqab ",
    email: "rehqb@gmail.com",
  };

  //Question 2

  type User2 = {
    id: number;
    name: string;
    email: string;
  };

  type UserInfor2 = Pick<User2, "name" | "email">;
  const userInfo: UserInfor2 = {
    name: "rehqab ",
    email: "rehqb@gmail.com",
  };

  //Question 3
  type User3 = {
    id: number;
    name: string;
    email: string;
    password: string;
  };

  type UserInfo3 = Pick<User3, "email" | "password">;

  //Question 4
  type UpdatingAll = {
    name: string;
    age: number;
    nashionality: string;
  };

  type UpdatingAllInfo = Partial<UpdatingAll>;

  //Question 5

  type AdminView = {
    id: number;
    name: string;
    isAdmin: boolean;
    role: string;
  };

  type AdminInfo = Pick<AdminView, "isAdmin" | "name" | "id">;

  //Question 6

  type UserPermissions = {
    id: number;
    name: string;
    isAdmin: boolean;
  };

  type UserEdit = Partial<Omit<UserPermissions, "name">>;
  //how the question is requirement is one key like isAdmin but Pick Use 2 arguement
  //Question 7

  type UserList = {
    id: number;
    name: string;
    lastnamme: string;
  };
  type UserPick = Pick<UserList, "id" | "name">;
  const userPick: UserPick = {
    name: "rehqab ",
    id: 2,
  };

  //Question 8

  type Credentials = {
    id: number;
    name: string;
    password: string;
    email: string;
  };

  type CredentUpdate = Partial<Pick<Credentials, "email" | "password">>;

  const CredentInfo: CredentUpdate = {
    email: "rehab@gmail;com",
    password: "rehalkfslf",
  };

  //Question 9

  type OnlyUserNames = {
    id: number;
    name: string;
    email: string;
  };

  type UserNameUpdate = Omit<OnlyUserNames, "id" | "email">;
  const usernameupdate: UserNameUpdate = {
    name: "rehab",
  };

  //Question 10

  type PatchRequiest = {
    id: number;
    name: string;
    email: string;
    password: string;
  };

  type PartialUpdate = Partial<
    Pick<PatchRequiest, "email" | "password" | "name">
  >;
  const partialUpdate: PartialUpdate = {
    email: "rehab",
    password: "rehabfsfsdfs",
    name: "adham",
  };

  // JSX/TSX starts here
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
      >
        assignement016{" "}
      </div>
      <div className="text-2xl text-black flex flex-col gap-1">
        <p>My info is {userInfo}</p>
      </div>
    </div>
  );
  // JSX/TSX ends here
}
