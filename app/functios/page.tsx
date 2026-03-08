import { Braah_One } from "next/font/google";

export default function FunctionsPage() {
  //1
  function greet() {
    console.log("Hello World");
  }

  greet();
  console.log(typeof greet, "type of greet");
  //2
  const sayBye = () => {
    return "Goodbye";
  };
  sayBye();
  console.log(sayBye().length, "lenght of saybye");

  //const result = sayBye();
  //console.log(result, "result of saybaye");

  //3

  function familyName(lastname: string) {
    return "My family name is " + lastname;
  }

  familyName("Adeshina");
  console.log(familyName("Adeshina"));
  //const result2 = familyName("Adeshina");
  //console.log(result2);
  //what is the diffrente between the two methods of calling a functions

  //4
  const anonymousFunction = function () {
    return "Anonymous";
  };

  const result3 = anonymousFunction();
  console.log(result3.toUpperCase(), "result of anonymousFunction");

  //5
  const user = {
    name: "Rehab",
    email: "rehab@gmail.com",
    speak: () => {
      return "Speaking...";
    },
  };
  user.speak();
  console.log(user.speak().length, "lenght of string speaking ");

  //6

  const user2 = {
    name: "Rehab",
    email: "rehab@gmail.com",
  };

  const { name, email } = user2;
  console.log(name + " - " + email, "destructuring user2");

  //6
  const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
  };

  const { brand: carBrand, model: carModel } = car;
  console.log(carBrand, carModel, "destructing car ");

  //8
  const person = {
    name: "Rehab",
    country: "Yemen",
  };

  const { name: userName } = person;
  const age = 20;
  console.log(userName, age);

  //9
  function namedFunction() {
    return "Named Function";
  }
  const newFunction = namedFunction;
  newFunction();
  console.log(newFunction());

  //10
  const arrowFunction = () => "Arrow Function";
  arrowFunction();
  console.log(arrowFunction());

  let a = 5;
  let b = a;
  b = 10;
  console.log(a);
  console.log(b);
  //expected output  is 5 and 10

  let x = 20;
  let y = x;
  x = x + 5;
  console.log(x);
  console.log(y);
  //expected output is 25 and 20

  let count = 7;
  function addTwo(value) {
    return value + 2;
  }
  let newCount = addTwo(count);
  console.log(count);
  console.log(newCount);

  let num1 = 15;
  let num2 = num1;
  let num3 = num2;
  console.log(num1);
  console.log(num2);
  console.log(num3);
  //expected outpot is 15,15,15

  const person = { name: "rehab" };
  const user = person;
  user.name = "john";
  console.log(person.name);
  console.log(user.name);
  //expected outpot is john and john

  const car = { Brand: "toyota" };
  const car2 = car;
  const car3 = car2;
  car3.brand = "hona";
  console.log(car.brand);
  console.log(car2.brand);
  console.log(car3.brand);
  //expected outpot is hona ,hona ,hona

  const obj = { value: 10 };
  function increase(date) {
    data.value = date.value + 5;
  }
  increase(obj);
  console.log(obj.value);

  //

  let number = 8;
  function muliply(val) {
    val = val * 2;
    return val; //16
    muliply(number);
    console.log(number);

    //
    const student = { name: "sara" };
    const anotherStudent = student;
    student.name = "david";
    console.log(anotherStudent.name);

    // expected output is david

    const book = { title: "JS guide" };
    let copy = book;
    copy.title = "advanced js";
    console.log(book.title);
    console.log(copy.title);
    // expected outpot is advanced js and advanced js
  }
  return (
    <main>
      <h1>Functions</h1>
      <p>Learning JavaScript functions</p>
    </main>
  );
}
