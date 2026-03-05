export default function Page() {
  const petroleum1 = {
    kerosine: "kerosine",
    petrol: "petrol",
    gas: "gas",
    diesel: "diesel",
  };
  const dieselValue = petroleum1.diesel;
  console.log(dieselValue.length, "disel lenght");

  const petroleum2 = {
    kerosine: "kerosine",
    petrol: "petrol",
    gas: "gas",
    diesel: "diesel",
  };

  const { gas, petrol } = petroleum2;
  console.log(petrol.length, "petrol lenght");

  const formik = {
    values: {
      name: "Rehab",
      password: 123456,
      email: "rehab@gmail.com",
    },
  };
  const newformik = formik.values;
  console.log(newformik.email, " email");

  const formik2 = {
    values: {
      name: "Rehab",
      password: 123456,
      email: "rehab@gmail.com",
    },
  };

  const newValue = formik2.values;
  const { name } = newValue;
  console.log(name, "name");

  const formik3 = {
    values: {
      innerObject: {
        innerName: "kjaggd",
      },
    },
  };
  const newinnerName = formik3.values.innerObject;
  console.log(newinnerName.innerName);

  const petroleum3 = {
    kerosine: "kerosine",
    petrol3: "petrol",
    gas3: "gas",
  };
  const { kerosine, petrol3, gas3 } = petroleum3;
  console.log(kerosine);

  const petroleum4 = {
    diesel: "diesel",
    leftOver: "leftOver5",
  };

  const newDiesel = petroleum4.diesel;
  console.log(newDiesel.length);

  const user = {
    firstName: "John",
    lastName: "Doe",
  };
  const { firstName, lastName } = user;
  console.log(firstName, +"" + lastName);

  const product = {
    title: "Laptop",
    price: 500,
  };
  const newproduct = product.price;
  console.log(newproduct + 100);

  return <div>assignement-extracting-by-destructing</div>;
}
