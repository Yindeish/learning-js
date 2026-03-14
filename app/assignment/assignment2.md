# Assignment 010

1. Student Management System
A school application stores student records.
Each student has:
 • studentId
 • fullName
 • age
 • email
 • courses (a student can register for multiple courses)
Each course has:
 • courseCode
 • courseTitle
 • creditUnit
 • lecturerName
Task
1. Create a TypeScript interface for Student.
1. Create a TypeScript interface for Course.
1. Ensure that courses is properly typed.

1. Crypto Portfolio Tracker
A crypto dashboard stores information about user assets.
Each portfolio item contains:
 • assetName
 • symbol
 • balance
 • priceUsd
 • chain
Chains can only be one of:
 • Ethereum
 • Bitcoin
 • Solana
 • Polygon
Task
1. Create a union type for chains.
1. Create a PortfolioAsset interface.

1. Messaging Application
A chat system stores messages between users.
Each message contains:
 • messageId
 • senderId
 • receiverId
 • content
 • attachments (optional)
 • timestamp
Attachments may contain:
 • fileName
 • fileSize
 • fileType
Task
1. Create an Attachment interface.
1. Create a Message interface.
1. Make sure attachments can store multiple attachment.


1. E-commerce Order System
An online store tracks orders made by customers.
Each order contains:
 • orderId
 • customerName
 • products
 • totalPrice
 • orderStatus
Possible order statuses:
 • pending
 • shipped
 • delivered
 • cancelled
Each product contains:
 • productId
 • name
 • price
 • quantity
Task
1. Create a Product interface.
1. Create an Order interface.
1. Ensure products can contain multiple products.

<https://www.whatsapp.com/download/handoff>
