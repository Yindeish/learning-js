export default function Assignment() {
  return (
    <div>
      <h1>Assignment 010</h1>
    </div>
  );
}
//type TypeName = value;
//type TypeName = value1 | value2 | value3;

//1. Student Management System
type Coures = {
  courseCode: string;
  courseTitle: string;
  creditUnit: number;
  lecturerName: string;
};

type student = {
  studentId: number;
  fullName: string;
  age: number;
  email: string;
  Coures: Coures[];
};

//Student Management System
type User = {
  assetName: string;
  symbol: string;
  balance: number;
  priceUsd: number;
  Chain: string;
};

//2. Crypto Portfolio Tracker

type Chain = "Ethereum" | "Bitcoin" | "Solana" | "Polygon";

type portfolio = {
  assetName: string;
  symbol: string;
  balance: number;
  priceUsd: number;
  chain: string;
};

//2. Crypto Portfolio Tracker

//3. Messaging Application

//this is message type
type Message = {
  messageId: number;
  senderId: number;
  receiverId: number;
  content: string;
  attachments: string;
  timestamp: number;
};

//3. Messaging Application
//E-commerce Order System

type order = {
  orderId: number;
  customerName: string;
  products: string;
  totalPrice: number;
  orderStatus: boolean;
  timestamp: number;
};
type product = {
  productId: number;
  name: string;
  price: number;
  quantity: number;
};
type orderStatuses = " pending" | "shipped" | "delivered" | "canceled";
 function showDate(name: string, age: number, country: string) {
   return `${name} - ${age} - ${country}`;
 }
 console.log(showDate("rehab", 34, "yemen"));


 //assignement 11

