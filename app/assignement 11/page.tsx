export default function Assignment() {
  return (
    <div>
      <h1>Assignment 010</h1>
    </div>
  );
}

// Assignment 011

// Question 1
type Score = {
  points: number;
};

const score1: Score = { points: 20 }; //20

const addFive = (s: Score) => {
  s.points = s.points + 5; // 25
};

addFive(score1);

// Expected result:
// score1.points // 25

// Question 1

// Question 2
type Wallet = {
  balance: number;
};

const wallet1: Wallet = { balance: 100 }; //100

const wallet2 = wallet1; // 100

wallet2.balance = 150;
// Expected result:
// wallet1.balance // 150
// wallet2.balance // 150

// Question 2

// Question 3
type Item = {
  price: number;
};

const item1: Item = { price: 40 };

const multiplyPrice = (i: Item) => {
  i.price = i.price * 2; // 40 * 2 = 80
};

multiplyPrice(item1);
// Expected result:
// item1.price // 80

// Question 3

// Question 4
type Counter = {
  count: number;
};

const counterA: Counter = { count: 10 }; // 10

const counterB = counterA; // 10
const counterC = counterB; // 10

counterC.count = counterC.count + 20; // 10 + 20 = 30
// Expected result:
// counterA.count // 30
// counterB.count // 30
// counterC.count // 30

// Question 4

// Question 5
type Progress = {
  level: number;
};

const progress1: Progress = { level: 5 };

const increaseLevel = (p: Progress) => {
  return p.level + 3; // 5 + 3 = 8
};

progress1.level = increaseLevel(progress1); // 8
// Expected result:
// progress1.level // 8

// Question 5

// Question 6
type Player = {
  score: number;
  stage: number;
};

const player1: Player = {
  score: 50,
  stage: 2,
};

const getScore = (p: Player) => {
  return p.score;
};

player1.stage = getScore(player1); // 50
// Expected result:
// player1.score // 50
// player1.stage // 50

// Question 6

// Question 7
type Bank = {
  money: number;
};

const bank1: Bank = { money: 500 };

const deposit = (b: Bank) => {
  b.money = b.money + 200;
};

deposit(bank1);
deposit(bank1);
// Expected result:
// bank1.money

// Question 7

// Question 8
// type Product = {
//     quantity: number
// }

// const product1: Product = { quantity: 15 }

// const product2 = product1

// product1.quantity = 30
// Expected result:
// product1.quantity
// product2.quantity
