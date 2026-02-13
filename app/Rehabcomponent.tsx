const users = [
  { name: "Ahmed", age: 25, city: "Cairo" },
  { name: "Sameh", age: 30, city: "Alex" },
  { name: "Aya", age: 22, city: "Giza" },
];
console.table(users);
// Array of Objects when i what to use it in console
//console.group()
//console.groupEnd()
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);
// two colum in table (index + value)

//🧪 JavaScript Quiz

//✅ Instructions

//You must follow all rules exactly.

//🟢 Task 01

//Create two variables named:

//numberOne

//numberTwo

//Follow correct JavaScript variable naming rules.

//numberOne value is 10 and its data type is Number

//numberTwo value is 20 and its data type is Number

//Then complete the following output requirements:

// Normal Concatenate = 1020
let numberOne = 10;
let numberTwo = 20;
// Add Variables Here

// Ouput
console.log("" + numberOne + numberTwo); // Normal Concatenate => "1020"
console.log(typeof ("" + numberOne + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

/* Rules

You must NOT modify any existing console.log lines.

You must NOT write any extra console.log.

You must only replace "Add Code Here".

Line 5 and 6 must be printed using only one console.log.

Line 7 and 8 must be printed using only one console.log.


*/
