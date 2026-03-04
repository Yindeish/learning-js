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
  return (
    <main>
      <h1>Functions</h1>
      <p>Learning JavaScript functions</p>
    </main>
  );
}
