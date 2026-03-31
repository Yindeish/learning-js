'use client'
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: ['100', '200', '900'],
    subsets: ['latin']
})


export default function Home() {
  // **Task**

  // 1. Create a TypeScript **type** for `Course`.
  // 2. Create a TypeScript **type** for `Student`.
  // 3. Ensure `courses` is typed as an **array of Course**.

  type Course = {
    courseCode: string;
    courseTitle: string;
    creditUnit: number;
    lecturerName: string;
  };

  type Student = {
    studentId: string;
    fullName: string;
    age: number;
    email: string;
    courses: Course[]; //array of coures
  };

  //   **Task**

  // 1. Create a **union type** for `Chain`.
  // 2. Create a `PortfolioAsset` type using the chain union.

  type Chain = "Ethereum" | "Bitcoin" | "Solana " | "Polygon";

  type PortfolioAsset = {
    assetName: string;
    symbol: string;
    balance: number;
    priceUsd: number;
    chain: Chain;
  };

  //   **Task**

  //   1. Create an `Attachment` type.
  // 2. Create a `Message` type.
  // 3. Ensure `attachments` is **optional** and can store **multiple attachments**.

  type Attachment = {
    fileName: string;
    fileSize: number;
    fileType: string;
  };
  type Message = {
    messageId: string;
    senderId: string;
    receiverId: string;
    content: string;
    attachments?: Attachment[];
    timestamp: Date;
  };

  //   **Task**

  // 1. Create a `Product` type.
  // 2. Create a union type for `OrderStatus`.
  // 3. Create an `Order` type ensuring `products` is an **array of Product**.

  type Product = {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  };
  type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";
  type Order = {
    orderId: string;
    customerName: string;
    products: Product[];
    totalPrice: number;
    orderStatus: OrderStatus;
  };

  // **Task**

  // 1. Create a `User` type.
  // 2. Make `phoneNumber` optional.

  type User = {
    userId: string;
    username: string;
    email: string;
    phoneNumber?: number;
    isVerified: boolean;
  };

  //   **Task**

  // 1. Create a strict type for Gmail using template literals.
  // 2. Declare a variable using that type.
  // Emails must follow this pattern:
  // `example@gmail.com`

  type EmailStrict = `${string}@gmail.com`;
  const ES: EmailStrict = "Rehab@gmail.com";

  //   **Task**

  // 1. Create a strict type for URL.
  // 2. Assign a valid and invalid example.
  // URLs must start with:
  // `https://`
  type URLStrict = `https://${string}`;
  const US1: URLStrict = "https://www.rehab.com";
  const US2: URLStrict = "www.rehab.com";

  //  **Task**

  //  1. Create a union type for `CarBrand`.
  //  2. Declare a variable using that type.

  type CarBrand = "Toyota" | "BMW" | "MERCEDED" | "Hyundai";
  const CB = "MERCEDED";

  // **Task**

  // 1. Create `Login` type (email, password).
  // 2. Create `Profile` type (name, age).
  // 3. Merge both into a single type.

  type Login = {
    email: string;
    password: string;
  };
  type Profile = {
    name: string;
    age: number;
  };
  type CollectionOf = Login & Profile;

  //    **Task**

  // 1. Create a `Common` type.
  // 2. Create `Student` and `Teacher` types.
  // 3. Combine them using **intersection types**.

  type Common = {
    name: string;
    age: number;
    country: string;
  };
  type StudentNew = {
    level: string;
    adepartment: string;
  };
  type Teacher = {
    subject: string;
    salary: number;
  };

  type CST = Common & StudentNew & Teacher;
  const TSC: CST = {
    name: "rehab",
    age: 34,
    country: "yemen",
    level: "intermediate",
    adepartment: "vélizy",
    subject: "informatique",
    salary: 10000000,
  };

  //   **Task**

  // 1. Create a `Post` type.
  // 2. Create an array of posts using that type.

  type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
  };

  const PT: Post[] = [
    {
      id: 20,
      title: "Post Privet",
      content: "LA POST ",
      author: "REHAB",
    },
  ];

  //   **Task**

  // 1. Create all required types.
  // 2. Ensure optional fields are correctly applied.

  type objectT = {
    account: string;
    notifications?: Notifications;
  };

  type Account = {
    security: string;
    emailUpdates?: boolean;
  };
  type Notifications = {
    sound: string;
    vibration?: boolean;
  };

  //   **Task**

  // 1. Create a function type that takes:

  //    * price (number)
  //    * quantity (number)
  // 2. Returns total (number).

  // **Task**

  // 1. Use **Partial** to make all fields optional.
  // 2. Use **Pick** to select only name and email.
  // 3. Use **Omit** to remove password.
  // 4. Use **Record** to map user IDs to users.

  type User10 = {
    id: number;
    name: string;
    email: string;
    password: string;
  };

  type;

  // **Task**

  // 1. Create a strict type for product ID using template literals.
  // 2. Declare a variable using that type.

  type ProductId = `PROD-${number}`;
  const PI: ProductId = "PROD-123";

  // JSX/TSX starts here
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div
        className={`text-center text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[green] to-[black] ${mont.className}`}
      >
        Assignment 014 corrections
      </div>
      <div className="text-2xl text-black flex flex-col gap-1"></div>
    </div>
  );
  // JSX/TSX ends here
}
