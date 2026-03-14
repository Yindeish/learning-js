export default function Assignment() {
  return (
    <div>
      <h1>Assignment 010</h1>
    </div>
  );
}
//type TypeName = value;
//type TypeName = value1 | value2 | value3;

//1. Student Management System ✅
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
  coures: Coures[];
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

type Chain = "Ethereum" | "Bitcoin" | "Solana" | "Polygon"; // types seprated by OR ( | )

type portfolio = {
  assetName: string;
  symbol: string;
  balance: number;
  priceUsd: number;
  chain: Chain;
  // chain: "Ethereum" | "Bitcoin" | "Solana" | "Polygon"
};

//2. Crypto Portfolio Tracker

//3. Messaging Application

//this is message type
type Message = {
  messageId: number;
  senderId: number;
  receiverId: number;
  content: string;
  // attachments: string;
  attachments?: Attachment[] //Array of attachments or collections of attachments // ? mark makes it optional
  // timestamp: number;
  timestamp: Date,
  dateOfBirth: Date
};

type Attachment = {
  fileName: string
  fileSize: number
  fileType: string
}

//3. Messaging Application
//E-commerce Order System

type order = {
  orderId: number;
  customerName: string
  // products: string;
  products: product[] //array of products // coolection of products
  totalPrice: number
  // orderStatus: boolean;
  orderStatus: orderStatus
  // timestamp: number;
  timestamp: Date
};
type product = { //✅
  productId: number;
  name: string;
  price: number;
  quantity: number;
};
// type orderStatuses = " pending" | "shipped" | "delivered" | "canceled";
type orderStatus = " pending" | "shipped" | "delivered" | "canceled";
