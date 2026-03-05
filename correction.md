# Corrections

1. Given:
let a = 5;
let b = a;
b = 10;
console.log(a); // 5
console.log(b); // 10

2. Given:
let x = 20;
let y = x;
x = x + 5;
console.log(x); // 25
console.log(y); // 20

3. Given:
let count = 7;
function addTwo(value){
return value + 2;
}
let newCount = addTwo(count: number);
console.log(count); // 7
console.log(newCount); // 11

4. Given:
let num1 = 15;
let num2 = num1;
let num3 = num2;
num2 = 30;
console.log(num1); // 15
console.log(num2); // 30
console.log(num3); // 15

5. Given:
const person = { name: "Ali" };
const user = person;
user.name = "John";
console.log(person.name); // "John"
console.log(user.name); // "John"

6. Given:
const car = { brand: "Toyota" };
const car2 = car;
const car3 = car2;
car3.brand = "Honda";
console.log(car.brand); // "Honda"
console.log(car2.brand); // "Honda"
console.log(car3.brand); // "Honda"

7. const obj = { value: 10 };
function increase(data: { value: number };){
data.value = data.value + 5;
}
increase(obj);
console.log(obj.value); // 15

8. Given:
let number = 8;
function multiply(val: number){
val = val * 2;
return val;
}

multiply(number);
console.log(number); // 8

const multipliedValue = multiply(number);
console.log(multipliedValue); // 16


9. Given:
const student = { name: "Sara" };
const anotherStudent = student;
student.name = "David";
console.log(anotherStudent.name); // "David"

10. Given:
const book = { title: "JS Guide" };
let copy = book;
copy.title = "Advanced JS";
console.log(book.title); // "Advanced JS"
console.log(copy.title); // "Advanced JS"
What is the expected output
